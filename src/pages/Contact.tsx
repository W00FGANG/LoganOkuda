import { useEffect } from 'react';
import './Contact.css';

import imgCollageLogan from '../assets/CollageLogynContact.png';
import imgEmailIcon from '../assets/EmailIcon.png';
import imgPhoneIcon from '../assets/PhoneIcon.png';
import imgBrandsInstagram from '../assets/instagram.png';
import imgBrandsLinkedin from '../assets/linkedin.png';
import imgBrandsYoutube from '../assets/youtube.png';
import imgAppleMusic from '../assets/apple_music.png';
import imgIMDb from '../assets/IMDbContact.png';

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="contact-page">
            <div className="contact-container">
                <div className="contact-left">
                    <h1 className="contact-title">
                        CONTACT<br />
                        <span className="text-gold">LOGYN</span>
                    </h1>
                    <p className="contact-subtitle">
                        Have a project in mind? Contact me here to get started.
                    </p>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Name (required)" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email (required)" required />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Subject Line (required)" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message (required)" rows={4} required></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
                <div className="contact-right">
                    <img src={imgCollageLogan} alt="Logan Okuda" className="contact-collage" />
                    <div className="contact-info-section">
                        <div className="contact-info-item">
                            <img src={imgEmailIcon} alt="Email" className="contact-icon" />
                            <a href="mailto:logokuda03@gmail.com">logokuda03@gmail.com</a>
                        </div>
                        <div className="contact-info-item">
                            <img src={imgPhoneIcon} alt="Phone" className="contact-icon" />
                            <span>(808) 729-3854</span>
                        </div>
                    </div>
                    <div className="contact-social-icons">
                        <a href="https://www.instagram.com/the_logokuda/" target="_blank" rel="noopener noreferrer"><img src={imgBrandsInstagram} alt="Instagram" /></a>
                        <a href="https://www.linkedin.com/in/logyn-okuda-ab9322243/" target="_blank" rel="noopener noreferrer"><img src={imgBrandsLinkedin} alt="LinkedIn" /></a>
                        <a href="https://www.youtube.com/@logpog4660" target="_blank" rel="noopener noreferrer"><img src={imgBrandsYoutube} alt="YouTube" /></a>
                        <a href="https://music.apple.com/us/artist/logyn-okuda/1713800649" target="_blank" rel="noopener noreferrer"><img src={imgAppleMusic} alt="Apple Music" /></a>
                        <a href="https://www.imdb.com/name/nm14950716/?ref_=ext_shr_sms" target="_blank" rel="noopener noreferrer"><img src={imgIMDb} alt="IMDb" /></a>
                    </div>
                </div>
            </div>
        </main>
    );
}
