const request=require('postman-request')

const forecast=(latitude,longtitude,callback)=>
{
    const url='http://api.weatherstack.com/current?access_key=14de53b6fdeec8a481d4982d0a699b4b&query='+latitude+','+longtitude+'&units=f'
    request({url,json:true},(error,{body})=>
    {
        if(error)
        {
            callback('unable to connect',undefined)
        }
        else if(body.error)
        {
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined,"The temperature is "+body.current.temperature +" degree farenheit")
        }
        
    
    })
}
module.exports=forecast


