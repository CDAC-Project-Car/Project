import { useNavigate } from 'react-router-dom'
import cover from '../Assets/cover.jpg'
import car from '../Assets/carLogo1.png'
import { LoginService } from '../services/user';


import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const onLogin = async () => {

    if (email.length == 0)
      toast.warn('Enter email !')
    else if (password.length == 0)
      toast.warn('Enter password')
    else {

      // const result = await LoginService(email, password);
      // console.log(result.status)

      // if (result.status == 200) {
      //   const { role, name } = result['data']

      //   if (role == 'ADMIN')
      //     navigate('/admin')
      //   else {
      //     toast.success('welcome ' + name)

      //     navigate('/home')
      //   }
      // }
      // else
      //   toast.error('invalid user')

      try {
        const result = await LoginService(email, password);

        if (result.status === 200) {
            const { role, userName, jwt, userId} = result.data;

            sessionStorage.userName=userName;
            sessionStorage.token=jwt;
            sessionStorage.userId=userId;
            sessionStorage.isLoggedIn=true;


            if (role === 'ADMIN') {
                navigate('/admin');
            } else {
                toast.success('Welcome ' + userName);
                navigate('/home');
            }
        } else {
            toast.error('Invalid user');
        }
    } catch (error) {
      // optional chaining
      const errorMessage = error.response?.data?.message ;
    toast.error(errorMessage);
    }


    }
    

  }
  return (
    <div style={{ backgroundColor: 'grey' }}>

      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-xl-10">
            <div class="card" style={{ borderRadius: '1rem ' }}>
              <div class="row g-0">
                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={cover}
                    alt="login form" class="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                </div>
                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                  <div class="card-body p-4 p-lg-5 text-black">

                    <form>

                      <div class="d-flex align-items-center mb-3 pb-1">
                        <img src={car} alt="" height={50} width={50} />
                        <span class="h1 fw-bold mb-0">CarBaazar</span>
                      </div>

                      <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input type="email" id="em" class="form-control form-control-lg" onChange={(e) => {
                          setEmail(e.target.value);
                        }
                        } />
                        <label class="form-label" for="form2Example17">Email address</label>
                      </div>

                      <div data-mdb-input-init class="form-outline mb-4">
                        <input type="password" id="pass" class="form-control form-control-lg" onChange={(e) => {
                          setPassword(e.target.value)
                        }} />
                        <label class="form-label" for="form2Example27">Password</label>
                      </div>

                      <div class="pt-1 mb-4">
                        <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block"
                          type="button" onClick={onLogin} >Login</button>
                      </div>

                      <a class="small text-muted" href="#!">Forgot password?</a>
                      <p class="mb-5 pb-lg-2">Don't have an account?
                        <Link to='/register' style={{ color: 'blue' }} > Register here</Link>
                      </p>


                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Login;