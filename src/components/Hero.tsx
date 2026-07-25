import './Hero.css';
import landingPageImg from '../assets/LandingPicture.png';

export default function Hero() {
    return (
        <section id="home" className="hero-section animate-on-scroll">
            <div className="hero-bg">
                <img src={landingPageImg} alt="Logyn Okuda Composer Background" className="hero-img" />
            </div>
            <div className="hero-content">
                <h1 className="hero-title">LOGYN OKUDA</h1>
                <p className="hero-subtitle">Composer</p>
            </div>
        </section>
    );
}

