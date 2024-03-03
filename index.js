const http = require('http');
require('dotenv').config();
MY_API_KEY = process.env.MY_API_KEY;





function getWeather(city) {
  const url = `http://api.weatherstack.com/current?query=${city}&access_key=${MY_API_KEY}`;
  http.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      const weatherData = JSON.parse(data);
      // console.log(weatherData);
      console.log(`Current presure in ${city}: ${weatherData.current.pressure}`);
    });
  }).on('error', (err) => {
    console.log(`Error: ${err.message}`);
  });
}


getWeather('Murom');

