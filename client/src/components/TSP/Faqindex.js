import React, { useState } from "react";
import "./Faq.css";
import { questions } from "./Faqfiles";

function Faqindex({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="ques_class" onClick={() => setShow(!show)}>
        <h3>{question}</h3>
        <h3 onClick={() => setShow(!show)}>{show ? "🔺" : "🔻"}</h3>
      </div>

      <div className="ans_class" style={{maxHeight: show===true ? '100px':'0', transition:'max-height 0.7s ease', overflow:'hidden',marginBottom: '30px'}}> <p>{answer}</p> </div>
    </div>
  );
}

export default Faqindex;
