import './Events.css';
import GustavoImg from '../assets/Gustavo.png';
import MultiverseImg from '../assets/Multiverse.png';
import RightArrow from '../assets/Right-arrow.svg.png';

export default function Events() {
    return (
        <section id="articles" className="events-section">
            <div className="section-banner animate-on-scroll">
                <div className="banner-line left-line"></div>
                <h2 className="banner-title">ARTICLES/CONCERTS</h2>
                <div className="banner-line right-line"></div>
            </div>
            <div className="events-grid">
                <article className="event-card animate-on-scroll">
                    <div className="event-image-wrapper">
                        <img src={GustavoImg} alt="Celebrating Gustavo at the Bowl" className="event-img" />
                    </div>
                    <div className="event-content">
                        <h3 className="event-title">Celebrating Gustavo at<br />the Bowl: Beethoven 9</h3>
                        <div className="event-divider"></div>
                        <p className="event-desc">Logyn served as Concert Orchestrator for Oscar-winning composer Michael Giacchino's world premiere, presented during Celebrating Gustavo at the Bowl: Beethoven 9. Don't miss this landmark performance at the Hollywood Bowl on August 20, 2026, at 8:00 PM.</p>
                        <a href="#" className="event-cta">
                            <span className="cta-text">LEARN MORE</span>
                            <span className="cta-icon"><img src={RightArrow} alt="arrow" /></span>
                        </a>
                    </div>
                </article>
                <article className="event-card animate-on-scroll">
                    <div className="event-image-wrapper">
                        <img src={MultiverseImg} alt="Shredding the Multiverse" className="event-img" />
                    </div>
                    <div className="event-content">
                        <h3 className="event-title">Shredding the Multiverse</h3>
                        <div className="event-divider"></div>
                        <p className="event-desc">Logyn arranged the music of Mick Giacchino for Shredding the Multiverse, presented by ArtPower at UC San Diego on July 21, 2026. The concert celebrated Giacchino's acclaimed film and television scores, bringing his music to life in a special live performance.</p>
                        <a href="#" className="event-cta">
                            <span className="cta-text">LEARN MORE</span>
                            <span className="cta-icon"><img src={RightArrow} alt="arrow" /></span>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}
