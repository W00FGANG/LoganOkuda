import { useEffect, useState } from 'react';
import './Contact.css';

import imgCollageLogan from '../assets/CollageLogynContact.webp';
import imgEmailIcon from '../assets/EmailIcon.webp';
import imgPhoneIcon from '../assets/PhoneIcon.webp';
import imgBrandsInstagram from '../assets/instagram.webp';
import imgBrandsLinkedin from '../assets/linkedin.webp';
import imgBrandsYoutube from '../assets/youtube.webp';
import imgAppleMusic from '../assets/apple_music.webp';
import imgIMDb from '../assets/IMDbContact.webp';

interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch("/api/send-contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                console.log("Message sent!");
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus('error');
        }
    };

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
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Name (required)" 
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Email (required)" 
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject"
                                placeholder="Subject Line (required)" 
                                value={formData.subject}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message"
                                placeholder="Message (required)" 
                                rows={4} 
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Submit'}
                        </button>
                        {status === 'success' && (
                            <p className="form-status success">
                                Thank you! Your message has been sent successfully.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="form-status error">
                                Something went wrong. Please try again or email directly.
                            </p>
                        )}
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
                        <a href="https://www.instagram.com/the_logokuda/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={imgBrandsInstagram} alt="Instagram" /></a>
                        <a href="https://www.linkedin.com/in/logyn-okuda-ab9322243/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src={imgBrandsLinkedin} alt="LinkedIn" /></a>
                        <a href="https://www.youtube.com/@logpog4660" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><img src={imgBrandsYoutube} alt="YouTube" /></a>
                        <a href="https://music.apple.com/us/artist/logyn-okuda/1713800649" target="_blank" rel="noopener noreferrer" aria-label="Apple Music"><img src={imgAppleMusic} alt="Apple Music" /></a>
                        <a href="https://www.imdb.com/name/nm14950716/?ref_=ext_shr_sms" target="_blank" rel="noopener noreferrer" aria-label="IMDb"><img src={imgIMDb} alt="IMDb" /></a>
                    </div>
                </div>
            </div>
        </main>
    );
}
