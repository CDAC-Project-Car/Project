import e from "cors"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register(){
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')

    const navigate=useNavigate()

    const onRegister = async()=>{
        if(firstName.length==0){
           // alert("Enter first Name")
           toast.warn('Enter First Name')
        }else if (lastName.length==0){
            toast.warn('Enter Last Name')
        }else if (email.length==0){
            toast.warn('Enter Email')
        }else if (password.length==0){
            toast.warn('Enter Password')
        }else if (confirmPassword.length==0){
            toast.warn('Confirm Password')
        }else if (password!=confirmPassword){
            toast.warn('Password does not match!')
        }else {
                //todo
                toast.success('Successfully registered user')
                navigate('/login')
        }
    }

    return(
        <>
            <h1 className='title'>Register</h1>

            <div className="row">
                <div className="col"></div>
                <div className="col">

                    <div className="form">

                    <div className="mb-3">
                            <label htmlFor="">First Name</label>
                            <input onChange={e => setFirstName(e.target.value)} type="text"  className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Last Name</label>
                            <input onChange={e => setLastName(e.target.value)} type="text"  className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Email</label>
                            <input onChange={e => setEmail(e.target.value)} type="email" placeholder="abc@mail.com" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Password</label>
                            <input onChange={e => setPassword(e.target.value)} type="password" placeholder="********" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Confirm Password</label>
                            <input onChange={e => setConfirmPassword(e.target.value)} type="password" placeholder="********" className="form-control" />
                        </div>

                        <div className="mb-3">

                            <div>Already have an account? <Link to='/login'>Login here</Link></div>
                            <button onClick={onRegister} className="btn btn-primary mt-2">Register</button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </>
    )
}