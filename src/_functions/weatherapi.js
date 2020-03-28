const axios = require("axios");

exports.handler = async function (event, context, callback) {

   const { lat, lon } = event.queryStringParameters;
   const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

   const reponse = await axios.get(url);

   callback(null, {
      statusCode: 200,
      body: JSON.stringify(reponse.data)
   })

}