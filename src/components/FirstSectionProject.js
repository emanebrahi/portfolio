import React from "react";
import burgerRes from "../images/burger-res.png";
import cart from "../images/cart.png";
import historical from "../images/historical-sites.png";
import hotel from "../images/hotel.png";
import landing from "../images/landing.png";
import pets from "../images/pets.png";
import rocker from "../images/rocker.png";
import viva from "../images/viva-decor.png";

function FirstSectionProject() {
  const images = [
    { imgUrl: burgerRes },
    { imgUrl: cart },
    { imgUrl: historical },
    { imgUrl: hotel },
    { imgUrl: landing },
    { imgUrl: rocker },
    { imgUrl: viva },
    { imgUrl: pets },
  ];

  return (
    <div className="container mb-5" id="first-section-projects">
      <div className="row">
        {images.map((image, index) => {
          return (
            <div key={index} className="col-lg-4 img-projects p-1">
              <div className="overlay">
                <p className="mb-0">Business start up</p>
                <p>& web development</p>
              </div>
              <img
                className="w-100 overflow-hidden rounded card"
                src={image.imgUrl}
                alt={`Project ${index}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(FirstSectionProject);
