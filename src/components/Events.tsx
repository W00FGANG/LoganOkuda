import './Events.css';

export default function Events() {
    return (
        <section id="articles" className="events-section">
            <div className="section-banner animate-on-scroll">
                <img src="http://localhost:3845/assets/05deed5dba1d684f6ea691bee78b7141b80aa615.svg" alt="line left" className="banner-line" />
                <h2 className="banner-title">ARTICLES/CONCERTS</h2>
                <img src="http://localhost:3845/assets/84b416ed3067e5769186607e2f6d6e45756bf267.svg" alt="line right" className="banner-line" />
            </div>
            <div className="events-grid">
                <article className="event-card animate-on-scroll">
                    <div className="event-image-wrapper">
                        <img src="http://localhost:3845/assets/6bec7af99039688b4e5088ca85cfc53d671d5ea8.png" alt="Celebrating Gustavo at the Bowl" className="event-img" />
                    </div>
                    <div className="event-content">
                        <h3 className="event-title">Celebrating Gustavo at<br />the Bowl: Beethoven 9</h3>
                        <div className="event-divider"><img src="http://localhost:3845/assets/1cd76a4f86d8015e50a4d5652340821b4cb49950.svg" alt="divider" /></div>
                        <p className="event-desc">Logyn served as Concert Orchestrator for Oscar-winning composer Michael Giacchino's world premiere, presented during Celebrating Gustavo at the Bowl: Beethoven 9. Don't miss this landmark performance at the Hollywood Bowl on August 20, 2026, at 8:00 PM.</p>
                        <a href="#" className="event-cta">
                            <span className="cta-text">LEARN MORE</span>
                            <span className="cta-icon"><img src="http://localhost:3845/assets/c8459cb1ca4ff76250b7f7f75dbf48677fc2f345.svg" alt="arrow" /></span>
                        </a>
                    </div>
                </article>
                <article className="event-card animate-on-scroll">
                    <div className="event-image-wrapper">
                        <img src="http://localhost:3845/assets/aadcc8d5f044011b28cf828e0332d663f77aac0d.png" alt="Shredding the Multiverse" className="event-img" />
                    </div>
                    <div className="event-content">
                        <h3 className="event-title">Shredding the<br />Multiverse</h3>
                        <div className="event-divider"><img src="http://localhost:3845/assets/1cd76a4f86d8015e50a4d5652340821b4cb49950.svg" alt="divider" /></div>
                        <p className="event-desc">Logyn arranged the music of Mick Giacchino for Shredding the Multiverse, presented by ArtPower at UC San Diego on July 21, 2026. The concert celebrated Giacchino's acclaimed film and television scores, bringing his music to life in a special live performance.</p>
                        <a href="#" className="event-cta">
                            <span className="cta-text">LEARN MORE</span>
                            <span className="cta-icon"><img src="http://localhost:3845/assets/c8459cb1ca4ff76250b7f7f75dbf48677fc2f345.svg" alt="arrow" /></span>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
}
