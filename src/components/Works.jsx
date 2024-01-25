import React from 'react'
import '../styles/works.css'
import works from '../data/content.json'

function Works() {
  return (
    <section className='works' id='why'>
        <div className="container">
            {/* <h1 className=" text-center text-white mb-5">How Our Java Fullstack Development Bootcamp Works Over <span className="text-main">6 hours</span></h1> */}
            <div className="work-text-container p-3 p-lg-5">
            <h1 className="heading-subtitle text-white mb-3"> <i class="bi bi-star text-main mx-2"></i>4 Hours Bootcamp</h1>
            {
                works.working.map((item)=>(
                    <p className='p-large'><i class="bi bi-check2 text-main"></i> {item.works}</p>
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default Works
