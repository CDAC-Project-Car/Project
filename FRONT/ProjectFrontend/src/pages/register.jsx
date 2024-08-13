
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { RegisterService } from "../services/user"

export default function Register() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [address, setAddress] = useState('')
    const [mobileNo, setMobileNo] = useState('')

    const navigate = useNavigate()

    const onRegister = async () => {
        if (firstName.length == 0) {
            // alert("Enter first Name")
            toast.warn('Enter First Name')
        } else if (lastName.length == 0) {
            toast.warn('Enter Last Name')
        } else if (email.length == 0) {
            toast.warn('Enter Email')
        } else if (password.length == 0) {
            toast.warn('Enter Password')
        } else if (confirmPassword.length == 0) {
            toast.warn('Confirm Password')
        } else if (password != confirmPassword) {
            toast.warn('Password does not match!')
        } else if (address.length == 0) {
            toast.warn('Enter Address !')
        }
        else if (mobileNo.length == 0) {
            toast.warn('Enter Mobile No. !')
        }
        else {
            const result = await RegisterService(firstName, lastName, email, password, address, mobileNo)
            console.log(result.status)
            if (result.status == 201) {
                toast.success('Registered Successfully ')
                navigate('/login')
            }
            else {
                toast.error('Registration failed !')
            }




        }
    }

    return (
        <div>
            <Navbar />
            <h1 className='title'><center>Registeration page</center></h1>

            <div className="row">
                <div className="col"></div>
                <div className="col">

                    <div className="form">

                        <div className="mb-3">
                            <label htmlFor="">First Name</label>
                            <input onChange={e => setFirstName(e.target.value)} type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Last Name</label>
                            <input onChange={e => setLastName(e.target.value)} type="text" className="form-control" />
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
                            <label htmlFor="">Address</label>
                            <input onChange={e => setAddress(e.target.value)} type="text" className="form-control" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="">Mobile No.</label>
                            <input onChange={e => setMobileNo(e.target.value)} type="text" className="form-control" />
                        </div>



                        <div className="mb-3">

                            <div>Already have an account? <Link to='/login'>Login here</Link></div>
                            <button onClick={onRegister} className="btn btn-primary mt-2">Register</button>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <Footer />
        </div>
    )
}