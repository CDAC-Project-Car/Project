import { useNavigate } from 'react-router-dom'
import cover from '../Assets/cover.jpg'
import car from '../Assets/carLogo1.png'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom';

function Login()
{
    const navigate=useNavigate();
    const onLogin = ()=>
        {
            navigate('/home');

        }
    return (
    <div style={{backgroundColor:'grey'}}>
    <Navbar/>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style={{borderRadius: '1rem '}}>
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src= {cover}
                  alt="login form" class="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
  
                  <form>
  
                    <div class="d-flex align-items-center mb-3 pb-1">
                        <img src={car} alt="" height={50} width={50} />
                       <span class="h1 fw-bold mb-0">carBaazar</span>
                    </div>
  
                    <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input type="email" id="form2Example17" class="form-control form-control-lg" />
                      <label class="form-label" for="form2Example17">Email address</label>
                    </div>
  
                    <div data-mdb-input-init class="form-outline mb-4">
                      <input type="password" id="form2Example27" class="form-control form-control-lg" />
                      <label class="form-label" for="form2Example27">Password</label>
                    </div>
  
                    <div class="pt-1 mb-4">
                      <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" 
                      type="button" onClick={onLogin} >Login</button>
                    </div>
  
                    <a class="small text-muted" href="#!">Forgot password?</a>
                    <p class="mb-5 pb-lg-2">Don't have an account? 
                        <Link to='/register'  style={{color: 'blue'}} >Register here</Link>
                        </p>
                        
                    <a href="#!" class="small text-muted">Terms of use.</a>
                    <a href="#!" class="small text-muted">Privacy policy</a>
                  </form>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    )
}
export default Login;