import React from 'react'
import Registration from './Registration'

const allFaqs = {
  "faq": [
    {
        "title": "quest1",
        "quest": "Why do we need to learn Spring?",
        "ans":  "Spring framework plays a crucial role when it comes to development of enterprise applications. Currently, Spring covers a huge market. Most of the companies are looking for developers who know how to work with Spring.  "
    },
    {
        "title": "quest2",
        "quest": "Are there any prerequisites for this program?        ",
        "ans":  "No, we will explain everything required from scratch level.1.	Good to have JDK installed in your system2.	Good to have a Eclipse or Intellij editor "
    },
    {
        "title": "quest3",
        "quest": "Why do we need to learn Java for backend development?        ",
        "ans":  "Java’s platform independence allows developers to write code once and run it anywhere, making it a versatile language for backend development. The robustness of Java makes it ideal choice for developing secure and scalable applications.  "
    },
    {
        "title": "quest4",
        "quest": "What tools are used for this program?        ",
        "ans":  "You need to have JDK and Eclipse to attend this program.        "
    },
    {
        "title": "quest5",
        "quest": "How much time is required to learn DSA?        ",
        "ans":  "Learning DSA is continuous process.  It requires a significant investment of time and effort. It can take you anywhere from 4-8  months to truly to master it.        "
    },
    {
        "title": "quest6",
        "quest": "Can I download the program videos?        ",
        "ans":  "You can download video transcripts, assignment templates, readings, at the end of the workshop. However, the video lectures are only available for streaming and require an internet connection."
    }
]
}

function FAQ() {
  return (
    <section id='faq' className='p-3 p-lg-5'>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-12">
                <h1 className="text-center text-dark mb-5">
                    Frequently Asked <span className="text-main">Questions</span>
                </h1>
            </div>
          </div>

          <div className="row mt-3 mb-3">
           <div className="col-12 col-md-12 col-lg-8">
           <div className="accordion accordion-flush" id='faq'>
                    {
                        allFaqs.faq.map((item,index) => {
                          return (
                            <div className="accordion-item bg-transparent mt-2 mb-2" key={index}>
                              <div className="accordion-header ">
                                <div className="accordion-button collapsed  border bg-main mb-1" data-bs-target={`#${item.title}`} data-bs-toggle="collapse">
                                    <h6 className="text-dark"> { item.quest } </h6>
                                </div>
                              </div>
      
                              <div id={item.title} className="accordion-collapse collapse bg-white" data-bs-parent="#faq">
                                  <div className="accordion body p-4">
                                  
                                      <p className="text-black text-justify"> { item.ans } </p>
                                  </div>
                              </div>
                          </div>
                          )
                        })
                    }
                </div>
           </div>
           <div className="col-12 col-md-12 col-lg-4">
            <Registration/>
           </div>
          </div>
        </div>
    </section>
  )
}

export default FAQ
