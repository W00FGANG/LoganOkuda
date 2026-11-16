import { useEffect, useRef, useState } from 'react';
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
    website: string; // Honeypot field for bot protection
}

interface Grecaptcha {
    render?: (
        container: HTMLElement,
        parameters: {
            sitekey: string;
            theme?: 'dark' | 'light';
            callback?: (token: string) => void;
            'expired-callback'?: () => void;
            'error-callback'?: () => void;
        }
    ) => number;
    reset: (optWidgetId?: number) => void;
    ready: (callback: () => void) => void;
}

declare global {
    interface Window {
        grecaptcha?: Grecaptcha;
        onRecaptchaLoad?: () => void;
    }
}

// Google's official reCAPTCHA v2 test key is used as a fallback only in local dev (import.meta.env.DEV)
const GOOGLE_TEST_SITE_KEY = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';
const RECAPTCHA_SITE_KEY =
    (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined)?.trim() ||
    (import.meta.env.DEV ? GOOGLE_TEST_SITE_KEY : '');

export default function Contact() {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
    });
    const [recaptchaToken, setRecaptchaToken] = useState<string>('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'captcha-missing'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const recaptchaContainerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (!RECAPTCHA_SITE_KEY) return;

        const renderWidget = () => {
            if (
                !window.grecaptcha ||
                !window.grecaptcha.render ||
                !recaptchaContainerRef.current ||
                widgetIdRef.current !== null
            ) {
                return;
            }

            widgetIdRef.current = window.grecaptcha.render(recaptchaContainerRef.current, {
                sitekey: RECAPTCHA_SITE_KEY,
                theme: 'dark',
                callback: (token: string) => {
                    setRecaptchaToken(token);
                    setStatus((prev) => (prev === 'captcha-missing' ? 'idle' : prev));
                },
                'expired-callback': () => {
                    setRecaptchaToken('');
                },
                'error-callback': () => {
                    setRecaptchaToken('');
                },
            });
        };

        if (window.grecaptcha && window.grecaptcha.render) {
            window.grecaptcha.ready(renderWidget);
            return;
        }

        window.onRecaptchaLoad = () => {
            renderWidget();
        };

        const existingScript = document.querySelector<HTMLScriptElement>(
            'script[src*="google.com/recaptcha/api.js"]'
        );
        if (!existingScript) {
            const script = document.createElement('script');
            script.src = 'https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit';
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }

        return () => {
            delete window.onRecaptchaLoad;
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');

        if (RECAPTCHA_SITE_KEY && !recaptchaToken) {
            setStatus('captcha-missing');
            return;
        }

        setStatus('sending');

        try {
            const response = await fetch('/api/send-contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    website: formData.website,
                    recaptchaToken,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '', website: '' });
                setRecaptchaToken('');
                if (window.grecaptcha && widgetIdRef.current !== null) {
                    window.grecaptcha.reset(widgetIdRef.current);
                }
            } else {
                setErrorMessage(result.error || 'Something went wrong. Please try again or email directly.');
                setStatus('error');
                if (window.grecaptcha && widgetIdRef.current !== null) {
                    window.grecaptcha.reset(widgetIdRef.current);
                    setRecaptchaToken('');
                }
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setErrorMessage('Something went wrong. Please try again or email directly.');
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
                        {/* Hidden Honeypot input to trap automated spam bots */}
                        <div className="honeypot-field" aria-hidden="true">
                            <label htmlFor="contact-website">Website</label>
                            <input
                                id="contact-website"
                                type="text"
                                name="website"
                                tabIndex={-1}
                                autoComplete="off"
                                value={formData.website}
                                onChange={handleChange}
                            />
                        </div>

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

                        {RECAPTCHA_SITE_KEY && (
                            <div className="recaptcha-wrapper">
                                <div ref={recaptchaContainerRef}></div>
                            </div>
                        )}

                        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Submit'}
                        </button>
                        {status === 'captcha-missing' && (
                            <p className="form-status error">
                                Please check the &ldquo;I&apos;m not a robot&rdquo; box before submitting.
                            </p>
                        )}
                        {status === 'success' && (
                            <p className="form-status success">
                                Thank you! Your message has been sent successfully.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="form-status error">
                                {errorMessage || 'Something went wrong. Please try again or email directly.'}
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
