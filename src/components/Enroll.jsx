import React from 'react'
import '../styles/enroll.css'

function Enroll() {
  return (
    <section className='enroll container mt-5' id='enroll'>
        <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
            <div className="enroll-card">
            <h1 className="heading-subtitle text-dark">Enroll Our <br /> API Development using springboot Bootcamp</h1>
            <div className="d-flex align-items-end">
            <h1 className="heading-text text-main mx-2">Free</h1>
            <h1 className="heading-subtitle text-dark"><del className='text-danger'>&#8377;1000</del></h1>
           
            </div>
            <div className="enroll-points">
                <p className="p-large text-dark"><i class="bi bi-check2 text-main mx-2"></i>Take advantage of Free Bootcamp</p>
                <p className="p-large text-dark"><i class="bi bi-check2 text-main mx-2"></i>This Offer will Expires Soon</p>
            </div>
           <a href="#register" className='text-decoration-none'> <button className="main-btn w-100">Enroll</button></a>
        </div>
            </div>
        </div>
        <div className="text-center mt-5">
        <a href="#faq" className='text-decoration-none'><button className="main-btn px-5 text-700">Register Now <del className='text-danger'>1000/-</del> Free</button></a>
        </div>
    </section>
  )
}

export default Enroll
