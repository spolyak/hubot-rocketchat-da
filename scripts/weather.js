// Description:
//    An example script, tells you the time. See below on how documentation works.
//    https://github.com/hubotio/hubot/blob/master/docs/scripting.md#documenting-scripts
// 
// Commands:
//    bot what time is it? - Tells you the time
//    bot what's the time? - Tells you the time
//
let request = require('request');

module.exports = (robot) => {
    robot.respond(/(weather|what is the weather|what's the weather)/gi, (res) => {

        let apiKey = process.env.WEATHER_API_KEY;
        let city = 'iowa city';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

        request(url, function (err, response, body) {
            if (err) {
                //console.log('error:', error);
                res.reply(`Error: ${error}`);
            } else {
                let weather = JSON.parse(body)
                let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.reply(message)
            }
        });
    })
}