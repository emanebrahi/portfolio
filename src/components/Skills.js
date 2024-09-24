import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Skills() {
  const data = [
    { id: 1, skill: "Backend development", degree: "95%" },
    { id: 2, skill: "Data Science", degree: "80%" },
    { id: 3, skill: "Frontend development", degree: "90%" },
    { id: 4, skill: "Cyber Security", degree: "95%" }
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 2, // Show only 2 skills on small screens
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className='container m-auto' id='skills' >
      <div className='skills-container'>
        <div className='skills text-center'>
          <h2 className='h1'>Skills</h2>
          <p className='text-capitalize'>You can see my skills here</p>
          <Slider {...settings}>
            {data.map((element) => (
              <div key={element.id} className='text-center skill-slide'>
                <div className='skill text-center m-auto'>
                  <h5 className='mt-5'>{element.degree}</h5>
                </div>
                <h5 className='mt-3'>{element.skill}</h5>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Skills;
