const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const messageone=document.querySelector('#message-1')
const messagetwo=document.querySelector('#message-2')
//messageone.textContent='from javascript'
weatherform.addEventListener('submit',(e)=>
{
    e.preventDefault()
    const location=search.value
    fetch('/weather?address='+location).then((response)=>
{
    response.json().then((data)=>
    {
        messageone.textContent='Loading'
        messagetwo.textContent=''
        if(data.error)
        {
            messageone.textContent=data.error
        }
        else{
            messageone.textContent=data.address
            messagetwo.textContent=data.forecast
        }

    })

})
})