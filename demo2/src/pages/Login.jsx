import e from "cors"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/Header";

export default function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()

    const onLogin = async()=>{
        if (email.length==0){
            toast.warn('Enter Email')
        }else if (password.length==0){
            toast.warn('Enter Password')
        }else {
                //todo
                toast.success('Welcome to CarBazzar')
                navigate('/home')
        }
    }
   
    return (
        <>
            <Header/>
            <h1 className='title'>Login</h1>

            <div className="row">
                <div className="col"></div>
                <div className="col">

                    <div className="form">

                        <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <input onChange={e => setEmail(e.target.value)} type="email" placeholder="abc@mail.com" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Password</label>
                            <input onChange={e => setPassword(e.target.value)} type="password" placeholder="********" className="form-control" />
                        </div>

                        <div className="mb-3">

                            <div>Don't have an account? <Link to='/register'>Register here</Link></div>
                            <button onClick={onLogin} className="btn btn-primary mt-2">Login</button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </>
    )
}

