import './Footer.css';
import InstagramIcon from '../assets/instagram.png';
import LinkedInIcon from '../assets/linkedin.png';
import YouTubeIcon from '../assets/youtube.png';
import AppleMusicIcon from '../assets/apple_music.png';
import IMDbIcon from '../assets/IMDb_Icon.png';

export default function Footer() {
    return (
        <footer id="contact" className="site-footer">
            <div className="footer-content">
                <h2 className="footer-title">LOGYN OKUDA</h2>
                <div className="footer-divider"></div>
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
                                <img src={InstagramIcon} alt="Instagram" />
                            </a>
                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <img src={LinkedInIcon} alt="LinkedIn" />
                            </a>
                            <a href="#" className="social-icon" aria-label="YouTube">
                                <img src={YouTubeIcon} alt="YouTube" />
                            </a>
                            <a href="#" className="social-icon apple-music" aria-label="Apple Music">
                                <img src={AppleMusicIcon} alt="Apple Music" />
                            </a>
                            <a href="#" className="social-icon" aria-label="IMDb">
                                <img src={IMDbIcon} alt="IMDb" />
                            </a>
                        </div>
                        <div className="contact-info">
                            <h3>Contact Info:</h3>
                            <p>(808)729-3854 | logokuda03@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-line"></div>
                <div className="footer-copyright">
                    <p>Copyright &copy; 2026. All rights Reserved.</p>
                    <p>Powered By Zumify</p>
                </div>
            </div>
        </footer>
    );
}
