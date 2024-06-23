import { Link } from "react-router-dom"




export default function Header()
{
    return (
       <>
       
       <nav className="navbar navbar-expand-lg bg-warning" >
  <div className="container-fluid">
    <a className="navbar-brand" >Car Bazzar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
            <li><Link className="nav-link" aria-current="page" to="/home">Home</Link></li>
            <li><Link className="nav-link" aria-current="page" to="/buy">Buy</Link></li>
            <li><Link className="nav-link" aria-current="page" to="/sell">Sell</Link></li>
            <li><Link className="nav-link" aria-current="page" to="/compare">Compare</Link></li>
             
            <li><button className="nav-link" aria-current="page" >Logout</button></li>
          
          
          
        
      </ul>
    </div>
  </div>
</nav>
       </>
    )        
    
}