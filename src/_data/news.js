const axios = require("axios");
require("dotenv").config();

module.exports = async function () {
   try {
      const response = await axios.get(`http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-28&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
      return response.data;
   } catch (error) {
      console.log(error);
   }
};
