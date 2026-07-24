import './Footer.css';
import InstagramIcon from '../assets/instagram.png';
import LinkedInIcon from '../assets/linkedin.png';
import YouTubeIcon from '../assets/youtube.png';
import AppleMusicIcon from '../assets/apple_music.png';
import IMDbIcon from '../assets/IMDbContact.png';

export default function Footer() {
    return (
        <footer className="site-footer">
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
                            <a href="https://www.instagram.com/the_logokuda/" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <img src={InstagramIcon} alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/in/logyn-okuda-ab9322243/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedInIcon} alt="LinkedIn" />
                            </a>
                            <a href="https://www.youtube.com/@logpog4660" className="social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                                <img src={YouTubeIcon} alt="YouTube" />
                            </a>
                            <a href="https://music.apple.com/us/artist/logyn-okuda/1713800649" className="social-icon apple-music" aria-label="Apple Music" target="_blank" rel="noopener noreferrer">
                                <img src={AppleMusicIcon} alt="Apple Music" />
                            </a>
                            <a href="https://www.imdb.com/name/nm14950716/?ref_=ext_shr_sms" className="social-icon" aria-label="IMDb" target="_blank" rel="noopener noreferrer">
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
                     <a href="https://zumify.co" target="_blank" rel="noopener noreferrer">Powered By Zumify</a>
                </div>
            </div>
        </footer>
    );
}
