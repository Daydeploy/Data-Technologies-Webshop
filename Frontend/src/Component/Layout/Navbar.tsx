import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../../Styles/Navbar.css';

const Navbar = () => {
    const [username, setUsername] = useState<string | null>(localStorage.getItem('username'));
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await fetch('http://localhost:5261/api/Auth/logout', { method: 'POST' });
        } catch {
            // no-op for UI demo
        }
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        setUsername(null);
        navigate('/');
    };

    return (
        <nav className="Navbar">
            <div className="Navbar-inner">
                <Link to="/" className="Navbar-brand" aria-label="Thred home">
                    <span className="Navbar-brand-mark" aria-hidden="true">T</span>
                    <span className="Navbar-brand-text">THRED.</span>
                </Link>

                <ul className={`Navbar-links ${menuOpen ? 'is-open' : ''}`}>
                    <li>
                        <NavLink to="/" end className={({ isActive }) => (isActive ? 'Navbar-link active' : 'Navbar-link')}>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="Navbar-link">New In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/" className="Navbar-link Navbar-link-accent">Sale</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? 'Navbar-link active' : 'Navbar-link')}>
                            About
                        </NavLink>
                    </li>
                </ul>

                <div className="Navbar-actions">
                    <Link to="/winkelwagen/mine" className="Navbar-icon-btn" aria-label="Open cart">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        <span className="Navbar-cart-count" aria-label="2 items in cart">2</span>
                    </Link>

                    <div className="Navbar-auth">
                        {username ? (
                            <>
                                <span className="Navbar-username">{username}</span>
                                <button className="Navbar-logout" onClick={handleLogout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link to="/auth" className="Navbar-login">
                                Login
                            </Link>
                        )}
                    </div>

                    <button
                        className="Navbar-burger"
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(v => !v)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
