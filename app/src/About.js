import React from 'react'
import css from './assets/css3.svg'
import js from './assets/javascript.svg'
import html from './assets/html5.svg'
import bs from './assets/bootstrap.svg'
import python from './assets/python.svg'
import dj from './assets/django.svg'
import react from './assets/react.svg'
import agile from './assets/scrum.svg'
import gh from './assets/github.svg'
import comms from './assets/communication.svg'
import tw from './assets/teamwork.svg'
import headshot from "./assets/headshot.jpg"




export default function About() {
  return (
    <div className='container-fluid about'id = "aboutscroll">
      <div className='row pt-5'>
       <div className='col sectionheader text-center'>
        <h2 className='aboutme mb-1'>About Me</h2>
        <div className='row text-center mt-4' id = "headshot"> 
           <div className='col d-flex justify-content-center'>
       
       <img src= {headshot} alt="prof pic" />
       </div>
       </div> 
        <hr className="w-25 m-auto mt-2" />
        </div>
        </div>
        <div className='row'> 
       
       <div className='col aboutpara text-center'>
        <p>I was active duty military for 4 years and I was stationed in Fort Polk, Louisiana. I found while in the military that I really enjoyed the aspect of working in a 
          team, being detail oriented, and constantly learning . After my contract I came back to Lexington and done rideshare with uber full time for a few years. 
          Then, I decided I needed a change in life and a solid career for my future, which led me to enroll in the awesome inc bootcamp. Now, I am a full-stack web developer!
          I’ve found that my passion is solving problems through writing code, and expanding my knowledge on being a developer. I am looking for a company where I contribute 
          the skills I have learned, and continuously grow my knowledge on the tools and technologies used in development.</p>
       </div>
      </div>
      <div className='row skills justify-contents-center'>
        <div className='col-sm-4 col-md-6 col-xl-4 skillscol d-flex justify-content-end'>
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal pt-3">Languages</h4>
          </div>
          <div className="card-body pt-0">
            <ul className="list-unstyled mt-3 mb-4">
              <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {html} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  HTML
                </div>
              </div>
              <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {css} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  CSS
                </div>
              </div>
              <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {js} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  Javascript
                </div>
              </div>
             
              <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {python} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  Python
                </div>
              </div>
              </ul>
          </div>
          </div>
        </div>
        </div>
        <div className='col-sm-4 col-md-6 col-xl-4 skillscol d-flex justify-content-center'>
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal pt-3">Libraries</h4>
          </div>
          <div className="card-body pt-0">
            <ul className="list-unstyled mt-3 mb-4">
              <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {bs} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  Bootstrap
                </div>
              </div>
            <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {react} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  React
                </div>
              </div>
              <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {dj} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  Django
                </div>
              </div>
            </ul>
          </div>
          </div>
        </div>
        </div>
        <div className='col-sm-4 col-md-12 col-xl-4 skillscol d-flex justify-content-md-center justify-content-start'>
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal pt-3">Skills/tools</h4>
          </div>
          <div className="card-body pt-0">
            <ul className="list-unstyled mt-3 mb-4">
              <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {comms} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  Communication
                </div>
              </div>
            <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {tw} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  Teamwork
                </div>
              </div>
              <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {gh} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  Github/Gitpod
                </div>
              </div>
              <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {agile} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  Agile Methods
                </div>
              </div>
            </ul>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
