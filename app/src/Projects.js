import React from "react";
import weather from "./assets/weather.png";

export default function Projects() {
  return (
    <div className="Container-fluid projectcontainer" id="projectscroll">
      <div className="row pt-5">
        <div className="col sectionheader text-center">
          <h2 className="aboutme mt-4 mb-1">Check out my work!</h2>
          <hr className="w-25 m-auto mt-2" />
        </div>
      </div>

      <div className="row projectrow justify-content-center w- 75 pb-4 mt-5">
        <div className="col-4 projectcols text-center">
          <iframe
            src="https://giphy.com/embed/CQNYoAQ5MDiQb4YQGw"
            width="480"
            height="224"
            frameBorder="0"
            className="projectpics"
          ></iframe>
        </div>
        <div className="col-6 projectcols text-center pt-5">
          <h4 className="mb-4">React Restaurant</h4>
          <p>
            This project is a weather app using openweathermap api to retreive
            weather data based on user inputted zip code! I also implemented
            geolocation for retreiving weather data, and local storage so the
            page isn't lost on refresh. This app was built with html, css,
            javascript, and bootstrap{" "}
          </p>
        </div>
      </div>
      <div className="row projectrow justify-content-center w- 75 pb-4 mt-5">
        <div className="col-6 projectcols text-center pt-5">
          <h4 className="mb-4"> Weather App</h4>
          <p>
            This project is a weather app using openweathermap api to retreive
            weather data based on user inputted zip code! I also implemented
            geolocation for retreiving weather data, and local storage so the
            page isn't lost on refresh. This app was built with html, css,
            javascript, and bootstrap{" "}
          </p>
        </div>
        <div className="col-4 projectcols text-center">
          <iframe
            src="https://giphy.com/embed/SLm4iYpPNnfuIw7JPL"
            width="480"
            height="228"
            frameBorder="0"
            class="projectpics"
          ></iframe>
        </div>
      </div>
      <div className="row projectrow justify-content-center w- 75 pb-4 mt-5">
        <div className="col-4 projectcols">
          <img src={weather} className="projectpics" />
        </div>
        <div className="col-6 projectcols text-center pt-5">
          <h4 className="mb-4"> Weather App</h4>
          <p>
            This project is a weather app using openweathermap api to retreive
            weather data based on user inputted zip code! I also implemented
            geolocation for retreiving weather data, and local storage so the
            page isn't lost on refresh. This app was built with html, css,
            javascript, and bootstrap{" "}
          </p>
        </div>
      </div>
      <div className="row justify-content-center w- 75 pb-4 mt-5">
        <div className="col-6 projectcols text-center pt-5">
          <h4 className="mb-4"> Weather App</h4>
          <p>
            This project is a weather app using openweathermap api to retreive
            weather data based on user inputted zip code! I also implemented
            geolocation for retreiving weather data, and local storage so the
            page isn't lost on refresh. This app was built with html, css,
            javascript, and bootstrap{" "}
          </p>
        </div>
        <div className="col-4 projectcols text-center">
          <iframe
            src="https://giphy.com/embed/Mqjd5YkZ2X6HCWys0p"
            width="288"
            height="480"
            frameBorder="0"
            class="projectpics"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
