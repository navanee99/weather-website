const request=require('postman-request')

const forecast=(address,callback)=>
{
    const url='http://api.weatherstack.com/current?access_key=14de53b6fdeec8a481d4982d0a699b4b&query='+address+'&units=m'
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
            callback(undefined,body.current.weather_descriptions[0]+" The temperature is "+body.current.temperature +" Degree Celsius"
            +" The humidity is "+body.current.humidity+"%")
        }
        
    
    })
}
module.exports=forecast


