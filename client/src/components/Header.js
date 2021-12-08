
import React from 'react'
import {NavLink} from "react-router-dom"
// MUI Icons
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import CategoryIcon from '@mui/icons-material/Category';

const Header = () => {
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
                            {/* <NavLink className="nav-link" to="/">Home</NavLink> */}
                            
                            <NavLink className="nav-link fw-bold fs-6" to="/login">Log in</NavLink>
                            <NavLink className="nav-link fw-bold fs-6" to="/signup">Sign up</NavLink>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
