

import car from '../Assets/carLogo1.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/home'>
                    <img src={car} alt="Car Logo" height={50} width={100} />
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-link me-3'>Home</Link>
                        </li>
                        <li className='nav-item dropdown me-3'>
                            <a className='nav-link dropdown-toggle' href="#" role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                Buy Car
                            </a>
                            <ul className='dropdown-menu'>
                                <li><Link to='/buy' className='dropdown-item'>Used cars in Nagpur</Link></li>
                                <li><Link to='/buy' className='dropdown-item'>Used cars in Delhi</Link></li>
                                <li><Link to='/buy' className='dropdown-item'>Used cars in Pune</Link></li>
                            </ul>
                        </li>
                        <li className='nav-item dropdown me-3'>
                            <a className='nav-link dropdown-toggle' href="#" role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                Sell Car
                            </a>
                            <ul className='dropdown-menu'>
                                <li><Link to='/sell' className='dropdown-item'>Sell car in Nagpur</Link></li>
                                <li><Link to='/sell' className='dropdown-item'>Sell car in Delhi</Link></li>
                                <li><Link to='/sell' className='dropdown-item'>Sell car in Pune</Link></li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-link me-3'>
                                <i className="fa-solid fa-location-dot"></i> Delhi
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/compare' className='nav-link me-3'>Compare cars</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/cart' className='nav-link me-3'>
                                <i className="fa-solid fa-cart-shopping me-1"></i> Cart
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <form className="d-flex" role='search'>
                                <input className="form-control form-control-sm" type='search' placeholder='Search' aria-label='Search' />
                                <button className="btn btn-warning" type='submit'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </button>
                            </form>
                        </li>
                        <li className='nav-item dropdown me-3'>
                            <Link to='/home' className='nav-link dropdown-toggle' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                <i className="fa-regular fa-user me-2"></i> Account
                            </Link>
                            <ul className='dropdown-menu'>
                                <li><Link to='/login' className='dropdown-item'><button className="btn btn-success">Login/SignUp</button></Link></li>
                                <li><Link to='/myorders' className='dropdown-item'>My Orders</Link></li>
                                <li><Link to='/mylistedcars' className='dropdown-item'>My Listed Cars</Link></li>
                            </ul>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-link me-3'>
                                <button type="button" className="btn btn-danger btn-sm" style={{ padding: '2px 6px', fontSize: '0.75rem', lineHeight: '1', height: 'auto' }}>
                                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
