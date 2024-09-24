import React from 'react'
import { useState, useEffect } from 'react';
import ast from '../images/ast.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';



function FirstSection() {
    const trackNameWord = ["FullStack Developer", "FrontEnd Developer", "BackEnd Developer"];
    const [trackName, setTrackName] = useState('');
    const [charIndex, setCharIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
      if (wordIndex < trackNameWord.length) {
        const currentWord = trackNameWord[wordIndex];
        if (charIndex < currentWord.length) {
          const timeCharOut = setInterval(() =>{
            setTrackName(prevValue => prevValue + currentWord[charIndex]); 
            setCharIndex(prevIndex => prevIndex + 1); 
          }, 200); 
  
          return () => clearInterval(timeCharOut); 
        } else {
          const timeWordOut = setInterval(() => {
            setTrackName('');
            setCharIndex(0);
            setWordIndex(prevWordIndex => (prevWordIndex + 1) % trackNameWord.length); 
          }, 1000); 
  
          return () => clearInterval(timeWordOut);
        }
      }
    }, [charIndex, wordIndex, trackNameWord]);
  
    useEffect(() => {
        Aos.init({ duration: 1000 });
        Aos.refresh(); 
    }, []);
  return (
    <div>
        <div className="section-one">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 ">
                            <div className="info text-light">
                            <p className=" mb-0 text-center welcome-text" >Welcome all in My portfolio</p>
                                <p className='track-name mb-0'> i am Eman Ebrahim,{trackName}</p>
                                <p  className='mb-0 hello-text'>Hello eveyone i have one year experience in web development </p>
                            </div>
                            <p className='fs-4 mt-3 text-light'>Let's Connect <i className="fas fa-arrow-alt-circle-right"></i> </p> 
                        </div>

                        <div className="col-lg-6">
                            <div>
                                <img src={ast} data-aos="fade-up" className="infinite-animation"/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default React.memo(FirstSection)
