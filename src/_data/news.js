const axios = require("axios");
require("dotenv").config();

const apiKey = "07908b01793347ae80869e52b2c3f998"

module.exports = async function () {
   try {
      const response = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-28&sortBy=publishedAt&apiKey=${process.env.API_KEY}&pageSize=5`);
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
