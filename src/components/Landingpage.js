import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">KLG</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/Points">Points</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Rules">Rules</Link>
            </li>
          </ul>
          <div>
            <Link id='loginlink' to="/Signin">Login</Link>
            <Link id='signuplink' to="/Signup">Signup</Link>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid ">
    <div class="row">
      <div class="col-md-6 text-center d-flex  align-items-center">
        <section>
        <h2 className='display-2 '><strong>What is KLG?</strong></h2>
        <hr/>
        <section>
            <p>KLG  is a reward system designed to encourage good behaviour by rewarding them with points that can be converted to Real Money! Get Paid for being a good Child!</p>
            <Link id='learnmore' to="/Learnmore">Learn More</Link>
        </section>
        </section>
        </div>
      <div className="col-md-6 d-flex justify-content-center"><img alt='giving a Child Money' src='https://img.freepik.com/premium-vector/father-gives-money-little-son-purchases-vector-man-giving-money-small-boy-from-wallet-payment-finance-education-characters-financial-relationship-flat-cartoon-illustration_87720-5124.jpg?w=826' ></img></div>
    </div>

  </div>

  </>
  );
}
