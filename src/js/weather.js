function success(pos) {
   const crd = pos.coords;
   const { latitude, longitude } = crd;

   const url = `/.netlify/functions/weatherapi?lat=${latitude}&lon=${longitude}&units=metric`;

   fetch(url)
      .then(response => response.json())
      .then(data => {
         document.querySelector("#city").textContent = data.name;
         document.querySelector("#temp").textContent = data.main.temp + "°C";
         document.querySelector("#main").textContent = data.weather[0].temp;
         document.querySelector("#desc").textContent = data.weather[0].description;

         document.querySelector("#weather").classList.remove("hidden");
      });
}

function error(err) {
   console.warn(`ERROR(${err.coe}): ${err.message}`)
}

if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(success, error);
}