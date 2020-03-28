const axios = require("axios");
require("dotenv").config();
const countries = require("./countries.json");

async function getNews(country) {
   try {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
      return {
         "country": country,
         "articles": response.data.articles,
      };
   } catch (error) {
      console.log(error);
   }
};

module.exports = async function () {
   const newsPromises = countries.map(getNews);
   return Promise.all(newsPromises).then(newsObjects => {
      console.log("news", newsObjects);
      return [].concat.apply([], newsObjects);
   });
};
