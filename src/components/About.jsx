import React, { useEffect, useState } from 'react'
import '../styles/about.css'
import ordinate from '../images/image2.jpg'

function About() {
  const [D, setD] = useState();
  const [H, setH] = useState();
  const [m, setM] = useState();
  const [s, setS] = useState();
        const counter  = () => {
          // Set the date we're counting down to
      let countDownDate = new Date("Dec 29, 2023 10:30:00").getTime();

      // Update the count down every 1 second
      let x = setInterval(function() {

      // Get todays date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setD(days)
      setH(hours)
      setM(minutes)
      setS(seconds)
      // document.querySelector(".day").innerHTML = days;
      // document.querySelector(".hour").innerHTML = hours;
      // document.querySelector(".minute").innerHTML = minutes;
      // document.querySelector(".second").innerHTML = seconds;
      

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
      }, 1000);
      }

useEffect(() => {
counter()
}, [])

  return (
  <>
    <section id='about' className="d-flex align-items-center justify-content-center mt-5 p-3">
        <div className="container about p-lg-5 p-3 rounded-4">
            <div className="row align-items-center">
                <div className="col-lg-8 col-md-6 col-sm-12 align-item-center">
                  <h1 className="text-main fs-1">Bootcamp co-ordinater</h1>
                  <h1 className="fs-3 text-white">Ganesh</h1>
                  <span className="fs-4 d-block text-white">Java Fullstack Development Fullstack trainer</span>
                  <span className='text-white'>10 Years of experience</span>
                  
                  <div className="project">

                  </div>
                  <hr />
                    <h1 className=" text-white mt-5"> About <span className="text-main">Bootcamp</span> </h1>
                    <h5 className="text-secondary">
                    
                    </h5>

                  <div className="row mt-2 mb-2">
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-2 mb-2">
                        <div className="card bg-main">
                          <div className="card-body">
                             <h4 className='text-700'> <i className="bi bi-geo-alt text-main-1"></i> Where</h4>
                             <h6 className="text-white"> Be Practical Tech Solutions</h6>
                             <h5 className="text-white"> <b>Mode: </b> Online</h5>
                          </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-2 mb-2">
                        <div className="card bg-main h-100 text-white">
                          <div className="card-body">
                              <h4 className='text-700'> <i className="bi bi-calendar-check"></i> When</h4>
                              <h6 className="text-white">18th - 19th - 20th Jan 2024</h6>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 text-center d-flex align-items-center justify-content-center p-3">
                   
                      </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={ordinate} alt="no image" className='img-fluid img-repsonsive abt1 ' />
                </div>
            </div>
        </div>
        
    </section>
    <div className="text-center mt-5">
    <a href="#register" className='text-decoration-none'><button className="main-btn px-5 text-700">Register Now <del className='text-danger'>1000/-</del> Free</button></a>
</div>
  </>
  )
}

export default About
