import { useEffect } from 'react';
import './Listen.css';
import BannerImage from '../assets/LogynThinking.jpg';

export default function Listen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="listen-page">
            <section className="listen-banner" style={{ backgroundImage: `linear-gradient(90deg, #0a0a0a 0%, rgba(10, 10, 10, 0.8) 40%, rgba(10, 10, 10, 0.2) 100%), url("${BannerImage}")` }}>
                <div className="listen-banner-content">
                    <h1 className="listen-banner-title">ORIGINAL MUSIC</h1>
                    <div className="listen-banner-text">
                        <p>Some of my favorites pieces from previous projects.</p>
                        <br />
                        <p>Check out my best original music here:</p>
                    </div>
                </div>
                <div className="listen-scroll-indicator" onClick={() => document.querySelector('.listen-grid')?.scrollIntoView({ behavior: 'smooth' })}>
                    <p>Listen to My Originals</p>
                    <div className="arrow-down">↓</div>
                </div>
            </section>

            <section className="listen-section">
                <div className="listen-grid">
                    {/* Item 1 */}
                    <div className="listen-item">
                        <h2 className="listen-item-title">Powerful, Grandiose</h2>
                        <iframe
                            width="100%"
                            height="400"
                            scrolling="no"
                            frameBorder="no"
                            src="https://play.reelcrafter.com/embed/895f4186-0a54-436c-bd4b-e66859931901">
                        </iframe>
                    </div>
                    {/* Item 2 */}
                    <div className="listen-item">
                        <h2 className="listen-item-title">Intimate, Emotional</h2>
                        <iframe
                            width="100%"
                            height="400"
                            scrolling="no"
                            frameBorder="no"
                            src="https://play.reelcrafter.com/embed/c518fd1f-d7dd-4985-a72f-c940ef765447">
                        </iframe>
                    </div>
                    {/* Item 3 */}
                    <div className="listen-item">
                        <h2 className="listen-item-title">Action, Energetic</h2>
                        <iframe
                            width="100%"
                            height="400"
                            scrolling="no"
                            frameBorder="no"
                            src="https://play.reelcrafter.com/embed/aa6668ac-f0cf-48c6-9d85-370489f91d24">
                        </iframe>
                    </div>
                    {/* Item 4 */}
                    <div className="listen-item">
                        <h2 className="listen-item-title">Eclectic, Modern</h2>
                        <iframe
                            width="100%"
                            height="400"
                            scrolling="no"
                            frameBorder="no"
                            src="https://play.reelcrafter.com/embed/c3dfc234-2e45-46cf-b191-bf6510111b32">
                        </iframe>
                    </div>
                    {/* Item 5 */}
                    <div className="listen-item">
                        <h2 className="listen-item-title">Dark, Horror</h2>
                       <iframe
                            width="100%"
                            height="400"
                            scrolling="no"
                            frameBorder="no"
                            src="https://play.reelcrafter.com/embed/7634001d-885a-43cd-bc62-958c9f21afc3">
                        </iframe>
                    </div>
                </div>
            </section>
        </main>
    );
}
