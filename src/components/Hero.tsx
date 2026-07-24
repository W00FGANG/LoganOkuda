import { useState } from 'react';
import './Hero.css';
import landingPageImg from '../assets/LandingPagePic1.png';
import landingPageVideo from '../assets/LandingPage.mp4';

export default function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section id="home" className="hero-section animate-on-scroll">
            <div className="hero-bg">
                <img src={landingPageImg} alt="Logyn Okuda Composer Background" className="hero-img" />
            </div>
            <div className="hero-content">
                <h1 className="hero-title">LOGYN OKUDA</h1>
                <p className="hero-subtitle">Composer</p>
                <div className="hero-frame" onClick={() => setIsVideoOpen(true)} style={{ cursor: 'pointer' }}>
                    <video src={landingPageVideo} className="hero-video" autoPlay loop muted playsInline />
                    <div className="hero-play-overlay">
                        <div className="play-icon">▶</div>
                    </div>
                </div>
            </div>
        </section>

        {isVideoOpen && (
            <div className="video-modal-overlay" onClick={() => setIsVideoOpen(false)}>
                <div className="video-modal-content" onClick={e => e.stopPropagation()}>
                    <button className="video-modal-close" onClick={() => setIsVideoOpen(false)}>×</button>
                    <video src={landingPageVideo} className="video-modal-player" autoPlay controls playsInline />
                </div>
            </div>
        )}
        </>
    );
}

