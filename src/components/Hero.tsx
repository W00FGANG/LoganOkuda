import './Hero.css';

export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-bg">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/hero-bg-mobile.webp" />
                    <source media="(min-width: 769px)" srcSet="/hero-bg-desktop.webp" />
                    <img src="/hero-bg-desktop.webp" alt="Logyn Okuda Composer Background" className="hero-img" fetchPriority="high" />
                </picture>
            </div>
            <div className="hero-content">
                <h1 className="hero-title">LOGYN OKUDA</h1>
                <p className="hero-subtitle">Composer</p>
            </div>
        </section>
    );
}

