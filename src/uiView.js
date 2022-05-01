const cardView = function (data, unit) {
  const container = document.querySelector("article");
  const error = document.querySelector(".error");
  error.classList.add("hide");
  // empty article container
  clearView();
  const html = `
      <div class="card card-container">
          <div class="left-side">
              <img class="card-image" src="http://openweathermap.org/img/wn/${
                data.weather[0].icon
              }@2x.png" />
              <p class="weather">${data.weather[0].description}</p>
              <p class="city">${data.name},</p>
              <p class="country">${data.sys.country}</p>
          </div>
          <div class="right-side">
            <div class="top">
                <p class="temperature">${data.main.temp.toFixed(1)}&deg;</p>
                  <button class="temp-display">${
                    unit === "metric" ? "C" : "F"
                  }</button>
            </div>
          <div class="bottom">
              <h2>DETAILS</h2>
              <div class="details-container">
              <ul class="right">
                  <li>feels like</li>
                  <li>humidity</li>
                  <li>pressure</li>
                  <li>min temp</li>
                  <li>max temp</li>
                  <li>wind</li>
              </ul>
              <ul class="left">
                  <li>${data.main.feels_like.toFixed(1)}&deg;</li>
                  <li>${data.main.humidity}%</li>
                  <li>${data.main.pressure}hPa</li>
                  <li>${data.main.temp_min.toFixed(1)}&deg;</li>
                  <li>${data.main.temp_max.toFixed(1)}&deg;</li>
                  <li>${data.wind.speed}km/h</li>
              </ul>
            </div>
          </div>
          </div>
      </div>
      `;
  container.insertAdjacentHTML("beforeend", html);
};

const errorView = function () {
  const error = document.querySelector(".error");
  error.classList.remove("hide");
};

const loaderView = function () {
  const container = document.querySelector("article");
  const html = `
      <div class="loader load"></div>
    `;
  container.insertAdjacentHTML("beforeend", html);
};

const clearView = function () {
  const container = document.querySelector("article");
  container.textContent = "";
};
export { cardView, errorView, loaderView, clearView };
