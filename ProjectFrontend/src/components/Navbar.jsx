

import { useContext, useState } from 'react';
import car from '../Assets/carLogo1.png';
import { Link } from 'react-router-dom';
import { LocationContext } from '../data/LocationContext';

function Navbar() {

    const { location, setLocation } = useContext(LocationContext);
    const [showModal, setShowModal] = useState(false);

    const cities = [
        "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata",
        "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
        "Kanpur", "Nagpur", "Indore", "Bhopal", "Coimbatore",
    ];

    const onLocationChange = (city) => {
        setLocation(city);
        setShowModal(false);  
    };
    return (
        <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top'>
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
                        {/* <li className='nav-item dropdown me-3'>
                            <a className='nav-link dropdown-toggle' href="#" role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                Buy Car
                            </a>
                            <ul className='dropdown-menu'>
                                <li><Link to='/buy' className='dropdown-item'>Used cars in Nagpur</Link></li>
                                <li><Link to='/buy' className='dropdown-item'>Used cars in Delhi</Link></li>
                                <li><Link to='/buy' className='dropdown-item'>Used cars in Pune</Link></li>
                            </ul>
                        </li> */}
                        
                        <li className='nav-item'>
                            <Link to='/sell' className='nav-link me-3'>Sell Car</Link>
                        </li>
                        
                        <li className='nav-item'>
                                <button className='nav-link me-3 btn btn-link' onClick={() => setShowModal(true)}>
                                    <i className="fa-solid fa-location-dot"></i> {location}
                                </button>
                            </li>
                        <li className='nav-item'>
                            <Link to='/compare' className='nav-link me-3'>Compare cars</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/wishlist' className='nav-link me-3'>
                            <i class="fa-regular fa-heart"></i> WishList
                            </Link>
                        </li>
                        
                        {/* <li className='nav-item dropdown me-3'>
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
                        </li> */}

                         {/* Rightmost items */}
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
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




                    </ul>
                </div>
            </div>
        </nav>

         {/* Modal for city selection */}

         {showModal && (
            <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Select Your City</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={() => setShowModal(false)}></button>
                        </div>
                        <div className="modal-body">
                            <ul className="list-group">
                                {cities.map(city => (
                                    <li key={city} className="list-group-item list-group-item-action" onClick={() => onLocationChange(city)}>
                                        {city}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </>
    );
}

export default Navbar;
