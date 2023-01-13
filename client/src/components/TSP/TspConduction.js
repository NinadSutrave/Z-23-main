import React from 'react'
import "./Tsp-conduction.css"
import "./Tsp-about.css"
function TspConduction() {
    return (
        <div className='conduction' id='TspConduction' >
            <h2 className='title' data-aos="zoom-out" data-aos-duration="1000">Conduction</h2>
            <div className="openOlympiad">
                <div className='oo subheading' data-aos="zoom-in" data-aos-duration="1000">Open Olympiad</div>
                <div className="phase1">
                    <div className="txt" data-aos="fade-right" data-aos-duration="1000">
                        <div>Phase - 1</div>
                        <p>It will be conducted on the school level and it can be either online or offline
                            as per the preference of the school. The pattern of the exam will be objective type consisting of four sections with a time limit of 90 mins. The top 5% of participants from each school will qualify for Phase 2. All the participants who participate in stage 1 will also get an opportunity for Techwalk.
                        </p>
                    </div>
                    <img src={require("./../../Assets/Phase1.png")} alt="" data-aos="fade-left" data-aos-duration="1000" />
                </div>
                <div className="phase1 phase2">
                    <img src={require("./../../Assets/Phase1.png")} alt="" data-aos="fade-right" data-aos-duration="1000" />
                    <div className="txt" data-aos="fade-left" data-aos-duration="1000">
                        <div>Phase - 2</div>
                        <p>This phase will be conducted in IIT Ropar during Zeitgeist’23. The pattern of the exam will be objective type consisting of four sections with a time limit of 90 mins. The winners will be awarded. Participation certificates will be given to all the qualifiers</p>
                    </div>
                </div>
            </div>
            <div className="jsc">
                <div className='oo subheading' data-aos="zoom-in" data-aos-duration="1000">Junior Scientist Competition</div>
                <div className="jscContent">
                    <p data-aos="fade-right" data-aos-duration="1000">In this competition, a maximum of three projects are allowed for display by individual schools in each category: Category 1 - 9th and 10th Class, Category 2 - 11th and 12th Class. The projects will be presented at IIT Ropar during Zeitgeist’23. Exciting prizes for winners and certificates of participation for all the participants. All the participants will also get an opportunity for Techwalk.</p>
                    <img src={require("./../../Assets/Phase1.png")} alt="" data-aos="fade-left" data-aos-duration="1000" />
                </div>
            </div>
            <div className="techwalk">
                <div className="tech subheading" data-aos="zoom-in" data-aos-duration="1500">Techwalk</div>
                <p data-aos="fade-up-left" data-aos-duration="1500">During Zeitgeist 2023, all of our institute's participating labs will be open to school students. Various departments will demonstrate cutting-edge technologies in their respective areas.
                    Aside from the labs, there will be an exhibition of projects created by students and faculty.
                    There will be exhibitors from across the globe displaying
                    emerging technologies.
                    For the visitors, this will be a great opportunity to learn, experience, and
                    interact with experts from distinct scientific fields and witness the recent advancements in the
                    field of science. Students will experience the culture of IIT Ropar, student life, and the
                    responsibilities of students here. They gain a lot of valuable information about cracking the JEE exam.

                </p>
            </div>
            <div className="registeration">
                <div className="oo title" data-aos="flip-up" data-aos-duration="2000">Registeration Process</div>
                <div className="register">
                    <div className="registerIn" data-aos="flip-right" data-aos-duration="2000">
                        <h3 className='subheading'>Open Olympiad</h3>
                        <ol>
                            <li>The participation fees for Open Olympiad are INR 50 per participant for 9th and 10th class students and INR 100 per participant for 11th and 12th class students.
                            </li>
                            <li>Students do not have to register individually.</li>
                            <li>Schools are requested to collect money from the students and register them through the
                                <a href="https://docs.google.com/forms/d/1JqOglp5d2PuE9ij1Gp0l9ItG6qnCZ0IbbzI7hGGz96M/edit" style={{"cursor":"pointer", "color": "cyan"}} target="_blank"> Google Form</a>
                            </li>
                        </ol>
                    </div>
                    <div className="registerIn" data-aos="flip-left" data-aos-duration="2000">
                        <h3 className='subheading'>Junior Scientist Program</h3>
                        <ol>
                            <li>The participation fees for Junior Scientist Competition are INR 150 per team.</li>
                            <li>Individual registration by each team is required.</li>
                            <li>Only one member from a team are requested to do the same on zeitgeist’s website through the
                                <a href="https://docs.google.com/forms/d/1HeYzzte2usM4p2mUxqGlWmfEwbgRqM0dCi3Zrhed5h4/edit" style={{"cursor":"pointer", "color": "cyan"}} target="_blank"> Google Form</a>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TspConduction
