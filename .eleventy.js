module.exports = function (config) {

   config.addPassthroughCopy("src/js");

   return {
      dir: {
         input: "src",
         output: "dist",
         data: "_data",
      }
   };

};

// 07908b01793347ae80869e52b2c3f998