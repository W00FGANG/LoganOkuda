import './Footer.css';

export default function Footer() {
    return (
        <footer id="contact" className="site-footer">
            <div className="footer-content">
                <h2 className="footer-title">LOGYN OKUDA</h2>
                <div className="footer-divider"><img src="http://localhost:3845/assets/6ef246d4e82492e6d05a9b6ce49cae35b5753d11.svg" alt="line" /></div>
                <div className="footer-grid">
                    <div className="footer-column quick-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#biography">Biography</a></li>
                            <li><a href="#credits">Credits</a></li>
                            <li><a href="#listen">Listen</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-column social-contact">
                        <h3>Follow my work on social media</h3>
                        <div className="social-icons">
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <img src="http://localhost:3845/assets/a63366bc72b796130b71ef566609dacd8f616462.svg" alt="Instagram" />
                            </a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <img src="http://localhost:3845/assets/8dfe80538f5f00ef58a64ad28b386d80491b6d2d.svg" alt="LinkedIn" />
                            </a>
                            <a href="#" className="social-icon" aria-label="YouTube">
                                <img src="http://localhost:3845/assets/2b2a8c2a58f2161b7605d22a262605aea51e401d.svg" alt="YouTube" />
                            </a>
                            <a href="#" className="social-icon apple-music" aria-label="Apple Music">
                                <img src="http://localhost:3845/assets/f056c22d17f316354bd84692f6b6cad9b311eea2.svg" alt="Apple Music" />
                            </a>
                            <a href="#" className="social-icon" aria-label="Spotify">
                                <img src="http://localhost:3845/assets/c16cb90880c8c44288928bb770084e9960050b71.png" alt="Spotify" />
                            </a>
                        </div>
                        <div className="contact-info">
                            <h3>Contact Info:</h3>
                            <p>(808)729-3854 | logokuda03@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-line"><img src="http://localhost:3845/assets/188f5b5f0e88a2fca4e1a4def576537ff8881da3.svg" alt="line" /></div>
                <div className="footer-copyright">
                    <p>Copyright &copy; 2026. All rights Reserved.</p>
                    <p>Powered By Zumify</p>
                </div>
            </div>
        </footer>
    );
}
