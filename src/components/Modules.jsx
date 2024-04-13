import React from 'react'
import '../styles/Homehero.css'


const moduledata = [
    {
        tag:"Day 1",
        heading:"Understanding Backend development",
        description:"You will learn about 3-layered architecture required for backend development for any enterprise application. You will understand difference between Entity and DTO. and Learn about core concepts required to understand why Spring is so popular. Understand the terms IOC, DI, Autowiring by working on code",
        topicCovered:["Understanding Backend development", "Spring Framework"]
    },
    {
        tag:"Day 2",
        heading:"Restful Web Services.",
        description:"Have a clear understanding of what exactly rest api is and how it works using HTTP methods. and Develop rest api using world most popular framework SpringBoot. You will be able to understand how controller layer, service layer and repository layer interact with each other. You will also be able to test your api’s using POSTMAN client. ",
        topicCovered:["Restful Web Services.", "SpringBoot"]
    },
]
function Modules() {
  return (
   <div className='module-container bg-dark py-4'>
    <h1 className="fs-1 text-white text-center mt-5">What you can expect in <span className="text-main">2 days</span>?</h1>
    <p className="fs-6 text-center text-white px-4">
    This program is organized into two module using Java. First module we are going to discuss about how actually backend works. You will get familiarize with Spring core concepts which is currently most popular framework. In second module you are going to understand about rest api and how you can develop rest api’s using SpringBoot.
    </p>
  <div className="conatiner p-3">
    <div className="row align-items-center">
    {
    moduledata.map((item, index)=>(
        <section className=' col-12 col-sm-12 col-md-6 mb-3 h-100'>
            <div className="module p-3 h-100 text-white">
           <div className=''>
           <h4 className="m-tag fs-6 p-1 bg-main fs-5" style={{backgroundColor:"#C10000"}}>{item.tag}</h4>
           </div>
        <h1 className="fs-4">{item.heading}</h1>
        <p className="fs-6">{item.description}</p>
        
        <h4 className="fs-4">Topics Covered</h4>
        <hr />
      <ul>
      {
            item.topicCovered.map((item1, index1)=>(
                <li className='mb-2'>{item1}</li>
            ))
        }
      </ul>
 
            </div>
            </section>
    ))
   }
    </div>
  </div>
   </div>
  )
}

export default Modules
