import car from '../Assets/logo.png';
import { Link } from 'react-router-dom';
function Navbar() {
    return <nav
        data-bs-theme='dark'
        className='navbar bg-dark navbar-expand-lg bg-body-tertiary'
    >
        <div className='container-fluid'>
            <a className='navbar-brand' href='#'>
                <img src={car} alt="" height={20} width={20} />
            </a>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-link me-3' >Home</Link>

                    </li>


                    <li class="nav-item dropdown me-3">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Buy Car
                        </a>
                        <ul class="dropdown-menu">


                            <li> <Link to='/sell' class="dropdown-item">Used cars in Nagpur</Link> </li>
                            <li> <Link to='/sell' class="dropdown-item">Used cars in Delhi</Link> </li>
                            <li> <Link to='/sell' class="dropdown-item">Used cars in Pune</Link> </li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown me-3">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sell Car
                        </a>
                        <ul class="dropdown-menu">
                            <li> <Link to='/sell' class="dropdown-item">Sell car in Nagpur</Link> </li>
                            <li> <Link to='/sell' class="dropdown-item">Sell car in Delhi</Link> </li>
                            <li> <Link to='/sell' class="dropdown-item">Sell car in Pune</Link> </li>
                        </ul>
                    </li>

                    <li className='nav-item'>
                        <Link to='/home' className='nav-link me-3' >

                            <i class="fa-solid fa-location-dot"></i>  Delhi

                        </Link>

                    </li>

                    <li className='nav-item'>
                        <Link to='/home' className='nav-link me-3' > Compare cars </Link>

                    </li>

                    <li className='nav-item'>
                        <Link to='/home' className='nav-link me-3' >
                            <i class="fa-regular fa-heart"></i>
                        </Link>

                    </li>

                    <li class="nav-item dropdown me-3">
                        {/* <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        </a> */}
                        <Link to='/home' class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                            <i class="fa-regular fa-user me-2"></i> Account
                        </Link>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#"><button className="btn btn-success">Login/SignUp</button></a></li>
                            <li> <Link to='/orders' class="dropdown-item">Orders</Link> </li>
                            <li> <Link to='/mycars' class="dropdown-item">My Listed Cars</Link> </li>
                            <li><a class="dropdown-item" href="#">
                                <i class="fa-solid fa-cart-shopping me-1"></i>Cart</a></li>
                        </ul>
                    </li>

                    <li className='nav-item'>
                        <Link to='/login' className='nav-link me-3' >
                            <button type="button" class="btn btn-danger btn-sm " style={{ padding: '2px 6px', fontSize: '0.75rem', lineHeight: '1', height: 'auto' }}><i class="fa-solid fa-arrow-right-from-bracket"></i> </button>
                        </Link>

                    </li>

                    <li className='nav-item'>

                    </li>





                    {/* <li className='nav-item'>
            <a className='nav-link' onClick={logOut}>
              Logout
            </a>
          </li> */}
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar;