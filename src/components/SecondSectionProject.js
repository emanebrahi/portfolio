import React, { useEffect } from "react";
import formImg from "../images/form-img.png";
import Aos from "aos";

function SecondSectionProject() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh(); 
}, []);
  return (
    <div id="second-section-projects">
      <div className="form-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={formImg} data-aos="fade-up" className="w-100 overflow-hidden mt-5"  />
            </div>

            <div className="col-lg-6">
              <h2 className="mb-5 mt-5 text-light fs-1">Get In Touch</h2>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div class="form-floating mb-2">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder=" "
                      />
                      <label for="floatingInput">Your Name</label>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div class="form-floating mb-2">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder=" "
                      />
                      <label for="floatingInput">Your Name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingEmail"
                        placeholder=" "
                      />
                      <label for="floatingEmail">Email Address</label>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingNumber"
                        placeholder=" "
                      />
                      <label for="floatingNumber">phone no.</label>
                    </div>
                  </div>
                </div>
                <div class="form-floating">
                  <textarea
                    class="form-control mt-2"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{height:"170px"}}
                  ></textarea>
                  <label for="floatingTextarea2">Comments</label>
                </div>
                <button className="btn btn-light fs-5 ps-4 pe-4 mt-3 mb-5">send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SecondSectionProject);
