import { NavLink } from 'react-router-dom'

function Navbar() {

    return(
        <div className="navbar">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/Profile">Profile</NavLink>
            <NavLink className="nav-link" to="/Login">Login</NavLink>
        </div>
    )

    
}

export default Navbar;