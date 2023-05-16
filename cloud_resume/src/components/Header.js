import {Outlet, Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div className="header">
                
                <Link id="pages" to="/">Home</Link>
                <Link id="pages" to="/resume">Cloud Resume</Link>
                <Link id="pages" to="/about">About</Link>
            </div>
            <div>
                <Outlet />
            </div>
       </>
    )
}

export default Header;