const axios = require('axios');

const getClima = async (lat, long) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=4916247e9327a2f812c6534e88a96278`);
    console.log("CLIMA :: ")
    console.log(resp.data)
    return resp.data.main.temp;
};

module.exports = {
getClima
}