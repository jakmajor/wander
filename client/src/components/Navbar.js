import { NavLink } from 'react-router-dom'
import image from '../images/profileimg.png';

function Navbar({ user, setUser }) {

    const handleLogoutClick = () => {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <div className="container header-container">
            <div className="row">
                <div className="col">
                    <div className="navbar">
                        <p className="logo">Wander</p>
                        <div className="links">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/Profile"><img src={image}></img></NavLink>
                            <button className="nav-link" onClick={handleLogoutClick}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Navbar;