import React from 'react'
import '../styles/Homehero.css'
import Registration from './Registration'
import OfferEnds from './OfferEnds'
import Works from './Works'

function HomeHero() {
  return (
    <section className='hero text-center p-lg-4 p-2' id='home'>
      {/* <div className="blur1 d-none d-sm-none d-md-block"></div>
      <div className="blur2 d-none d-sm-none d-md-block"></div> */}
    
          <p className='p-2 text-black bg-secondary text-white rounded-5 mb-3 mt-3'>Java Fullstack Development  Bootcamp</p>
        <h1 className="heading-text mt-3 text-900 py-2">Develop API using <span className="text-main">springboot </span>,,Java fullstack development</h1>
        <div className="p-large text-dark">Live Q&A Session With Experts, <br />Get Easiest Part To Learn complete  API developement using springboot,  Get E-Certificate and Study Meterial</div>
        <div className="date-container mt-5">
            <button className="btn fs-6 p-3 bg-black text-white"> <i class="bi bi-calendar2-event text-main mx-2"></i>17th -18th April 2024 </button>
            <button className="btn fs-6 p-3 bg-black text-white"> <i class="bi bi-alarm text-main"></i> 7:30PM to 9:30PM</button>
        </div>
        <div className='container mt-5 text-start'>
        <div className="row align-items-center justify-content-center">
     
      <div className="col-12 col-sm-12 col-md-6 col-lg-7 mb-3 order-2 order-sm-2 order-md-1">
      <Works/>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-5 mb-3 order-1 order-sm-1 order-md-2">
    <Registration/>
</div>

      </div>
        </div>
       <div className="text-center container-fluid">
        <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-12 col-md-8">
        {/* <OfferEnds/> */}
            
            </div>
        </div>
       </div>
    </section>
  )
}

export default HomeHero
