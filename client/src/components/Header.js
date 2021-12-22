
import React, { useContext } from 'react'
// Hooks
import { UserContext } from '../UserContext';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"
// Components
import { toast } from 'react-toastify';
// MUI Icons
import CategoryIcon from '@mui/icons-material/Category';
// API Functions
import { logout } from "../API/user";

const Header = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    const handleLogout = (evt) => {
        evt.preventDefault();
        logout().then((res) => {
            toast.success(res.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setUser(null)
            navigate("/login")
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand " href="/"><CategoryIcon sx={{ fontSize: 'h4.fontSize' }} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link fw-bold fs-6" to="/">Home</NavLink>
                        </div>
                        <div className="navbar-nav ms-auto">
                            {!user ?
                                <>
                                    <NavLink className="nav-link fw-bold fs-6" to="/login">Log in</NavLink>
                                    <NavLink className="nav-link fw-bold fs-6" to="/signup">Sign up</NavLink>
                                </> : <>
                                    <span
                                        className="nav-link fw-bold fs-6 "
                                        style={{ cursor: "pointer" }}
                                        onClick={handleLogout}
                                    >
                                        Log out
                                    </span>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
