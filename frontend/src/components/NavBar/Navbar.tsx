import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-info">
            <Link className="navbar-brand ml-3" to="/">My Favourite Videos MERN App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/newVideo">Create New Video</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Go Home</Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
