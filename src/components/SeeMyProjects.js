import React from 'react'

function SeeMyProjects() {
  return (
    <div className='see-my-projects-section'>
       <div className='container mt-5'>
       <div className='see-my-projects-container'>
        <div className='row justify-content-center p-5'>
            <div className='col-lg-4'>
                <h4>See my projects at once & leave your email</h4>
            </div>
            <div className='col-lg-8'>
            <div class="form-floating see-my-projects-form">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingEmail"
                        placeholder=" "
                      />
                      <label for="floatingEmail">Email Address  </label>
                      <button className='btn submit-btn'>submit</button> 
                     
                    </div>
            </div>

        </div>
      </div>
       </div>
    </div>
  )
}

export default React.memo(SeeMyProjects)
