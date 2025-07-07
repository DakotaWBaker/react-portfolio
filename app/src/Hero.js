import React from 'react'
import Resume from "./assets/Dakota_Baker_Resume.pdf"

export default function Hero() {
  return (
    <div className='container-fluid hero align-items-center'>
<div className='row herorow text-center'>
<div className='col mb-3'>
    <h1>Hi! I'm <strong>Dakota Baker</strong></h1>
</div>
</div>
<div className='row text-center'>
    <div className='col'>
        <h5>Full Stack Web Developer </h5>
    </div>
</div>
      <div className='row text-center'>
    <div className='col'>
    <a href = '#contactscroll'> <button className = 'contactbtn'>
            Contact Me!
            </button>
            </a>
    </div>
</div>
 <div className='row text-center'>
    <div className='col'>
    <a href = {Resume}> <button className = 'contactbtn'>
            Resume
            </button>
            </a>
    </div>
</div>
      </div>
  )
}
