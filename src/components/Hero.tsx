import './Hero.css';
import landingPageImg from '../assets/LandingPagePic1.png';
import landingPageVideo from '../assets/LandingPage.mp4';

export default function Hero() {
    return (
        <section id="home" className="hero-section animate-on-scroll">
            <div className="hero-bg">
                <img src={landingPageImg} alt="Logyn Okuda Composer Background" className="hero-img" />
            </div>
            <div className="hero-content">
                <h1 className="hero-title">LOGYN OKUDA</h1>
                <p className="hero-subtitle">Composer</p>
                <div className="hero-frame">
                    <video src={landingPageVideo} className="hero-video" autoPlay loop muted playsInline />
                </div>
            </div>
        </section>
    );
}

