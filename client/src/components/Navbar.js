import { NavLink, Link } from 'react-router-dom'
import image from '../images/profileimg.png';

function Navbar({ showAvatar = true }) {

    return (
        <div className="navbar">
            <div className="container header-container">
                <div className="row">
                    <div className="col my-auto">
                        <Link to="/">
                            <p className="logo">Wander</p>
                        </Link>
                    </div>
                    <div className="col float-right">
                        {showAvatar &&
                            <div className="links">
                                <NavLink className="nav-link" to="/Profile"><img src={image}></img></NavLink>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Navbar;