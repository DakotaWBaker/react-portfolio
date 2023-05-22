import React from "react";
import weather from "./assets/weather.png";
import runelink from "./assets/runelink.png"
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
          <h4 className="">Impact Living Care</h4>
          <hr className="w-25 m-auto mb-3 mt-2" />
          <p>
            This project was a freelance project for a company called Impact Living Housing. I built this website for the customer using React.JS, Bootstrap 5, and CSS 3. I launched this highly customized website using GitHub pages and custom domain purchase on GoDaddy with SEO{" "}
          </p>
          <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-xs-12">
            <button className = 'button-29' button type = 'button'>
          <a href = 'https://impactlivingcare.org/#' target = 'none' className = "projectlinks" >Live Demo</a>
          </button>
          </div>
          <div className="col-lg-4 col-xs-12">
          <button className = 'button-29'>
          <a href = 'https://github.com/DakotaWBaker/Impact-Living-Care' className = "projectlinks" target = 'none'>View Code</a>
          </button>
          </div>
          </div>
        </div>
      </div>
      <div className="row projectrow justify-content-center pb-4 mt-5">
        <div className="col-6 projectcols text-center pt-5">
          <h4 className=""> RuneLink</h4>
          <hr className="w-25 m-auto mb-3 mt-2" />
          <p>
            This project is a Social companion site for keeping up to date on all things for the popular MMORPG Runescape. Users create accounts and track their in-game skill levels, view twitter feeds from developers for updates, make and reply to posts to find other players and by utilizing an API from the game, track item costs and the change in prices over the past 6 months. 
          </p>
          <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-xs-12">
            <button className = 'button-29'>
          <a href = 'https://tonal-benefit-365714.web.app/</button>' className = "projectlinks" target = 'none' >Live Demo</a>
          </button>
          </div>
          <div className="col-lg-4 col-xs-12">
          <button className = 'button-29'>
          <a href = 'https://github.com/DakotaWBaker/RuneLink' className = "projectlinks" target = 'none'>View Code</a>
          </button>
          </div>
          </div>
        </div>
        <div className="col-4 projectcols text-center">
          <img src = {runelink} className="projectpics"/>
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
          <a href = 'https://dakotawbaker.github.io/react-restaurant' target = 'none' className = "projectlinks" >Live Demo</a>
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
          <a href = 'https://dakotawbaker.github.io/Todo-App/' target = 'none' className = "projectlinks" >Live Demo</a>
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
    </div>
  );
}
