import React, { useState } from 'react'
import './Faq.css'
import { questions } from './Faqfiles'
import Faqindex from './Faqindex';

function Faq() {
    // const[data,setDatA] = useState(questions);
    
  return (
    <div className='faq-container' id='TspFaqs'>
        <section className='Faqs'>
        <h2 className="title">FAQs</h2>
            <div className="faq">
                {questions.map((currElm)=>{
                    const  {id} = currElm;
                    return <Faqindex key={id} {...currElm}/>
                })}
            </div>


        </section>
    </div>
  )
}

export default Faq
