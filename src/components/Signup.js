import React from 'react'
import { Link } from 'react-router-dom'
import '../components/styles/signin.css'
const Signup = () => {
  return (
    <div id='container' className='d-flex justify-content-center align-items-center'>
      <section className='container'>
        <div className='row'>
          <aside className='col-lg-6 d-flex justify-content-center' >
            <img alt='BankImage' width="90%" src="https://img.freepik.com/premium-vector/bank-building-online-banking-finance-bank-transactions-bank-service-3d-vector-icon-cartoon-minimal-style_365941-689.jpg?w=826" />
          </aside>
          <aside className='col-lg-6 d-flex justify-content-center align-items-center signupsection '>
            <section >
              <h2>Create a new KLG Account</h2>

              <form>
                <div className="mb-3 d-flex">
                  <div className="me-3">
                    <label htmlFor="firstNameInput" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstNameInput" placeholder="First Name" />
                  </div>
                  <div>
                    <label htmlFor="lastNameInput" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastNameInput" placeholder="Last Name" />
                  </div>
                </div>
                <div className="mb-3">

                  <label htmlFor="username" className="form-label">User Name</label>
                  <input type="text" className="form-control" id="username" placeholder="Username" />

                </div>
               
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                </div>

                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Password</label>
                  <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" id="passwordInput" placeholder="Password" />
                </div>
                <span className="d-flex justify-content-end">Forgot Password?</span>
                 <span><input id='signupbtn' className=' btn btn-primary ' type="submit" value="Signup" /></span>
              </form>

              <p>Already have an Account? <Link id='signuplinkk' to="/Signin">Signin</Link></p>
            </section>
          </aside>
        </div>

      </section>
    </div>
  )
}

export default Signup
