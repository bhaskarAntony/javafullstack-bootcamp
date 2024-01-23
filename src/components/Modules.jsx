import React from 'react'
import '../styles/Homehero.css'


const moduledata = [
    {
        tag:"Day 1",
        heading:"",
        description:" You will learn some fundamentals required for solving coding challenges. Learn how to analyze algorithm using Big-O notation. Solve questions to understand the concept lying behind calculation of Big-O. Hashing plays an important role when it comes to solve coding challenges Learn Hashing by doing problems.",
        topicCovered:["Basic Mathematics For DSA", "Understanding Time-Complexity", "Hashing"]
    },
    {
        tag:"Day 2",
        heading:"",
        description:"Recursion is a confusing topic. We will help you to understand recursion concept by doing multiple questions that help to enhance you recursive thinking. Array plays an important role when comes to coding interviews. Only way to get succeeded in coding interview is to master the concepts of Array. Learn this topic by solving problems.",
        topicCovered:["Recursion", "Arrays:"]
    },
]
function Modules() {
  return (
   <div className='module-container bg-dark py-4'>
    <h1 className="fs-1 text-white text-center mt-5">What you can expect in <span className="text-main">2 days</span>?</h1>
    <p className="fs-6 text-center text-white px-4">
    This program is organized into two module using Java. First module will make to work on basic mathematics required, how to analyze your code in term of time complexity and how Hashing helps to solve coding problems. Second module will let you to understand underlying concepts of recursive algorithm and data structure like Arrays. Each module builds on the next, and is designed to enter the job market as a developer.
    </p>
  <div className="conatiner p-3">
    <div className="row align-items-center">
    {
    moduledata.map((item, index)=>(
        <section className=' col-12 col-sm-12 col-md-6 mb-3 h-100'>
            <div className="module p-3 h-100 bg-white">
           <div className='d-flex align-items-center justify-content-center w-100'>
           <h4 className="m-tag fs-6 p-1 text-white fs-3 p-3" style={{backgroundColor:"#C10000"}}>{item.tag}</h4>
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
