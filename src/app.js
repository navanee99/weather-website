const path=require('path')
const express=require('express')
const hbs=require('hbs')
const forecast=require('./utils/forescast')

const app=express()
const publicdirectory=path.join(__dirname,'../public')
const viewspath=path.join(__dirname,'./templates/views')
const partialspath=path.join(__dirname,'./templates/partials')
app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialspath)

app.use(express.static(publicdirectory))

app.get('',(req,res)=>
{
    res.render('index',{
        title:'Weather',
        name:'Navanee'
    })
})
app.get('/about',(req,res)=>
{
    res.render('about',{
        title:"About",
        name:"Navanee"
    })
})
app.get('/help',(req,res)=>
{
    res.render('help',{
        helptext:"Hi this is navanee",
        title:'Help',
        name:'Navanee'
    })
})


app.get('/weather',(req,res)=>
{
    if(!req.query.address)
    {
         return res.send(
            {
                error:"You must provide a search item"
            }
        )

    }
    forecast(req.query.address,(error,data)=>
{
    if (error) {
        return res.send({error})
    }

    res.send(
        {
            forecast:data,
            address:req.query.address
        }
    )
})
    //res.send({
      //  forecast:'It is snowing',
        //location:'philodelphia',
        //address:req.query.address
    //})

})
app.get('/products',(req,res)=>
{
    if(!req.query.search)
    {
         return res.send(
            {
                error:"You must provide a search item"
            }
        )

    }
    console.log(req.query.search)
    res.send(
        {
            products:[]
        }
    )
})
app.get('/help/*',(req,res)=>
{
    
    res.render('404page',{
        title:'404',
        name:'Navanee',
        errormessage:'Help article not found'

    })

})
app.get('*',(req,res)=>
{
    res.render('404page',{
        title:'404',
        name:'navanee',
        errormessage:'Page not found'

    })

})


app.listen(3000,()=>
{
    console.log('server started')
})