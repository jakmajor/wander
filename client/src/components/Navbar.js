import { NavLink } from 'react-router-dom'

function Navbar({user, setUser}) {

    const handleLogoutClick = () => {
        fetch("/logout", { method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return(
        <div className="navbar">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/Profile">Profile</NavLink>
            <button className="nav-link" onClick={handleLogoutClick}>Sign Out</button>
        </div>
    )

    
}

export default Navbar;