import React from 'react'
import "./Tsp-prize.css"
import "./Tsp-about.css"

function TspPrize() {
    return (
        <div className='prize-container' id='TspPrize'>
            <div className="title">Prizes</div>
            <div className="openOlympiad prize-section">

                <div className='oo subheading'data-aos="fade-left" data-aos-duration="2000">Open Olympiad</div>
                <div className="phase1">
                    <ol className='prize-point' data-aos="fade-right" data-aos-duration="2000">
                        <li>
                            prizes worth INR 25,000 distributed amongst the winners of both categories.
                        </li>
                        <li>
                            All the grand finalists will be awarded certificates of excellence and goodies.
                        </li>
                        <li>
                            For schools with participation of 50+ students per category, a school winner shall be declared and awarded with goodies and certificate of participation.
                        </li>
                    </ol>

                </div>
                <div className='oo subheading' data-aos="fade-right" data-aos-duration="2000">Junior Scientist Competition</div>
                <div className="phase1">
                    <ol className='prize-point' data-aos="fade-left" data-aos-duration="2000">
                        <li>The junior scientist competition holds prizes worth INR 25000.</li>
                        <li>All the participants of the junior scientist competition shall be awarded a certificate of participation.
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    )
}

export default TspPrize
