import { useState, useEffect } from 'react';
import './Header.css';
import Ellipse1 from '../assets/Ellipse 1.png';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav-container">
                <button className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
                    <span></span><span></span><span></span>
                </button>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={closeMenu}>HOME</a></li>
                    <li className="separator"><img src={Ellipse1} alt="separator" /></li>
                    <li><a href="#biography" onClick={closeMenu}>BIOGRAPHY</a></li>
                    <li className="separator"><img src={Ellipse1} alt="separator" /></li>
                    <li><a href="#credits" onClick={closeMenu}>CREDITS</a></li>
                    <li className="separator"><img src={Ellipse1} alt="separator" /></li>
                    <li><a href="#listen" onClick={closeMenu}>LISTEN</a></li>
                    <li className="separator"><img src={Ellipse1} alt="separator" /></li>
                    <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
                </ul>
            </nav>
            <div className="nav-underline"></div>
        </header>
    );
}
