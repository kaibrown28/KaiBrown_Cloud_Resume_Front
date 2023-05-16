import {Outlet, Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/resume">Cloud Resume</Link>
            <Link to="/about">About</Link>
            <div>
             <Outlet />
            </div>
        </div>
    )
}

export default Header;