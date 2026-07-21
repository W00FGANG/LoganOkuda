import './Hero.css';

export default function Hero() {
    return (
        <section id="home" className="hero-section animate-on-scroll">
            <div className="hero-bg">
                <img src="http://localhost:3845/assets/a25c2d332e42dcdacc063eba91a1e96eb2b53f9a.png" alt="Logyn Okuda Composer Background" className="hero-img" />
            </div>
            <div className="hero-content">
                <h1 className="hero-title">LOGYN OKUDA</h1>
                <p className="hero-subtitle">Composer</p>
                <div className="hero-frame"></div>
            </div>
        </section>
    );
}
