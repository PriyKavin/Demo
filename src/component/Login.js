import React from 'react'
import { Link } from 'react-router-dom'
import bg from './Images/log.jpg'
function Login() {
  return (

    <>
      
        <div className="m-auto w-25">
          <div className="container text-dark">
            <div classname="d-flex justify-content-end">
               <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <Link to={'/home'}>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </Link>
                </form>
                </div>
              </div>
            </div>
          
       
    </>
  )
}

export default Login
