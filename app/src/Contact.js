import React from 'react'
import ContactForm from './ContactForm'
import phone from './assets/smartphone.svg'
import gh from './assets/github.svg'
import email from './assets/email.svg'
import linkedin from './assets/linkedin.svg'
export default function Contact() {
  return (
    <div className='container-fluid contact' id = 'contactscroll'>
    <div className='row h-100'>
    <div className='col-s-12 col-xl-6 d-flex justify-content-center'>
    <ContactForm />
      </div>
      <div className='col-s-12 col-xl-6 contactlinks'>
        <div className = 'row d-flex justify-content-center mt-5'>
          <div className='col-xs col-xl-4 text-center'>
          <h2 className='contactheader'>Contact</h2>
          <h4 className='contactsubheader'>Want to get in touch</h4>
          <p className = 'contactblurp'>I would love to hear from you! I am always open for project collaboration or hiring oppurtunities.</p>
        </div>
        </div>
      <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {email} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                <a href = 'mailto: dakotabwayne14@gmail.com?subject=Can we hire you?' class = 'hrefs'target="_blank">Email me!</a>
                </div>
              </div>
      <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {gh} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  <a href = 'https://github.com/DakotaWBaker'class = 'hrefs'target="_blank">Github</a>
                </div>
              </div>
      <div className = "row">
                <div className = 'col-5 text-end mb-1'>
                <img src = {linkedin} className = 'icons' />
                </div>
                <div className = 'col-7 text-start mb-1'>
                  <a href = 'https://www.linkedin.com/in/dakotawbaker/'class = 'hrefs' target="_blank">Connect on linked in!</a>
                </div>
              </div>
    </div>
    </div>
    </div>
  )
}
