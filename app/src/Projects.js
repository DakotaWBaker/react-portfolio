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

      <div className="row projectrow justify-content-center pb-4 mt-5">
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
          <h4 className="">React Restaurant</h4>
          <hr className="w-25 m-auto mb-3 mt-2" />
          <p>
            This project is a restaurant app that dynamically renders menu items using an app call to return
            the data, and conditonally render the view based on which menu type is select(Breakfast, lunch, dinner, appetizers)
            Built with react, css, bootstrap{" "}
          </p>
          <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-xs-12">
            <button className = 'button-29' button type = 'button'>
          <a href = '#' className = "projectlinks" >Live Demo</a>
          </button>
          </div>
          <div className="col-lg-4 col-xs-12">
          <button className = 'button-29'>
          <a href = 'https://github.com/DakotaWBaker/React-Restaurant' className = "projectlinks" target = 'none'>View Code</a>
          </button>
          </div>
          </div>
        </div>
      </div>
      <div className="row projectrow justify-content-center pb-4 mt-5">
        <div className="col-6 projectcols text-center pt-5">
          <h4 className=""> To-Do App</h4>
          <hr className="w-25 m-auto mb-3 mt-2" />
          <p>
            This project is a To-Do app that uses React and LocalStorage to keep track of todos
            with full CRUD(Create/Read/Update/Delete) functionality. The content is dynamically rendered using React Components.
            There is also three views for the user. All To-Dos, Completed To-Dos, and not completed To-Dos{" "}
          </p>
          <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-xs-12">
            <button className = 'button-29'>
          <a href = '#' className = "projectlinks" >Live Demo</a>
          </button>
          </div>
          <div className="col-lg-4 col-xs-12">
          <button className = 'button-29'>
          <a href = 'https://github.com/DakotaWBaker/Todo-app' className = "projectlinks" target = 'none'>View Code</a>
          </button>
          </div>
          </div>
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
      <div className="row projectrow justify-content-center pb-4 mt-5">
        <div className="col-4 projectcols text-center">
          <img src={weather} className="projectpics" />
        </div>
        <div className="col-6 projectcols text-center pt-5">
          <h4 className=""> Weather App</h4>
          <hr className="w-25 m-auto mb-3 mt-2" />
          <p>
            This project is a weather app using openweathermap api to retreive
            weather data based on user inputted zip code! I also implemented
            geolocation for retreiving weather data, and local storage so the
            page isn't lost on refresh. This app was built with html, css,
            javascript, and bootstrap{" "}
            <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-xs-12">
          <button className = 'button-29'>
          <a href = '#' className = "projectlinks" >Live Demo</a>
          </button>
          </div>
          <div className="col-lg-4 col-xs-12">
          <button className = 'button-29'>
          <a href = 'https://github.com/DakotaWBaker/Weather-App' className = "projectlinks" target = 'none'>View Code</a>
          </button>
          </div>
          </div>
          </p>
        </div>
      </div>
      <div className="row justify-content-center pb-4 mt-5">
        <div className="col-6 projectcols text-center pt-5">
          <h4 className="">Mind Reader App</h4>
          <hr className="w-25 m-auto mb-3 mt-2" />
          <p>
            This project is a mind reader app implementing state management with Javascript to Create
            a single page web app that plays a game with the user to read their mind.{" "}
          </p>
          <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-xs-12">
          <button className = 'button-29'>
          <a href = '#' className = "projectlinks" >Live Demo</a>
          </button>
          </div>
          <div className="col-lg-4 col-xs-12">
          <button className = 'button-29'>
          <a href = 'https://github.com/DakotaWBaker/Mind-Reader' className = "projectlinks" target = 'none'>View Code</a>
          </button>
          </div>
          </div>
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
