const request = require('request')

const geocode = (address,callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibWFoYnViaG9zc2FpbiIsImEiOiJja2syaHFuZGgwYjdwMndudTI4ZHlwanp3In0.BeiFxca5C3lHuJjHnxsnfg&limit=1'

    request({url: url, json: true},(error,response)=>{
        if(error){
            callback('Unable to connect to the location service!',undefined)
        } else if(response.body.message || response.body.features.length===0){
            callback('Unable to find location! Try again',undefined)
        } else {
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geocode