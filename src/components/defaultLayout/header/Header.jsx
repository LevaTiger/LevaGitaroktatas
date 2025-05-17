import { Link, NavLink, useLocation } from "react-router";
import './header.css'
import { useEffect, useRef, useState } from "react";
const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const location = useLocation();
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const [showSubHeading, setShowSubHeading] = useState(true);

    // Hide/show sub-heading on resize and mount
    useEffect(() => {
        const handleSmallVisible = () => {
            if (window.innerWidth < 768) {
                setShowSubHeading(false);
            } else {
                setShowSubHeading(true);
            }
        };
        handleSmallVisible();
        window.addEventListener('resize', handleSmallVisible);
        return () => window.removeEventListener('resize', handleSmallVisible);
    }, []);

    useEffect(() => {
        setMenuVisible(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setMenuVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const homePath = () => {
        window.location.assign('/');
    };

    return (
        <div className="header-content">
            <div onClick={() => homePath()} className="logo">
                <div className="fire-svg-wrapper">
                    <div className="fire">
                        <div className="fire-left">
                            <div className="main-fire"></div>
                            <div className="particle-fire"></div>
                        </div>
                        <div className="fire-center">
                            <div className="main-fire"></div>
                            <div className="particle-fire"></div>
                        </div>
                        <div className="fire-right">
                            <div className="main-fire"></div>
                            <div className="particle-fire"></div>
                        </div>
                        <div className="fire-bottom">
                            <div className="main-fire"></div>
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
                        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"/>
                        <path fillRule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"/>
                        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"/>
                    </svg>
                </div>
                <h2>Bognár Levente </h2>
                {showSubHeading && <span className="sub-heading">- Gitáros & Tanár</span>}
            </div>
            <div
                className="hamburger"
                ref={hamburgerRef}
                onClick={() => setMenuVisible(!menuVisible)}
            >
                {`${!menuVisible ? '☰' : 'X'}`}
            </div>
            <nav className={menuVisible ? "open" : ""} ref={menuRef}>
                <ul>
                    <li>
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : '')}>Főoldal</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/webshop'} className={({ isActive }) => (isActive ? 'active' : '')}>Webshop</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/form'} className={({ isActive }) => (isActive ? 'active' : '')}>Form</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/kosar'} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag active" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;