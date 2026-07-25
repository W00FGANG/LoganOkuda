import { useEffect, useState } from 'react';
import './Listen.css';
import BannerImage from '../assets/LogynThinking.jpg';

function ListenItemEmbed({ title, src }: { title: string; src: string }) {
    const [isInteractive, setIsInteractive] = useState(false);

    return (
        <div 
            className="listen-item" 
            onMouseEnter={() => setIsInteractive(true)}
            onMouseLeave={() => setIsInteractive(false)}
        >
            <h2 className="listen-item-title">{title}</h2>
            <div 
                className="iframe-wrapper" 
                style={{ position: 'relative', width: '100%', height: '400px' }}
                onClick={() => setIsInteractive(true)}
            >
                {/* Transparent overlay blocks touch events initially so user can scroll over it */}
                {!isInteractive && (
                    <div style={{ position: 'absolute', inset: 0, zIndex: 10, cursor: 'pointer' }}></div>
                )}
                <iframe
                    width="100%"
                    height="100%"
                    scrolling="no"
                    frameBorder="no"
                    src={src}
                    style={{ pointerEvents: isInteractive ? 'auto' : 'none' }}
                ></iframe>
            </div>
        </div>
    );
}

export default function Listen() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="listen-page">
            <section className="listen-banner" style={{ backgroundImage: `linear-gradient(90deg, #0a0a0a 0%, rgba(10, 10, 10, 0.8) 40%, rgba(10, 10, 10, 0.2) 100%), url("${BannerImage}")` }}>
                <div className="listen-banner-content">
                    <h1 className="listen-banner-title">ORIGINAL MUSIC</h1>
                </div>
            </section>

            <section className="listen-section">
                <div className="listen-grid">
                    {/* Item 1 */}
                    <ListenItemEmbed 
                        title="Powerful, Grandiose" 
                        src="https://play.reelcrafter.com/embed/895f4186-0a54-436c-bd4b-e66859931901" 
                    />
                    {/* Item 2 */}
                    <ListenItemEmbed 
                        title="Intimate, Emotional" 
                        src="https://play.reelcrafter.com/embed/c518fd1f-d7dd-4985-a72f-c940ef765447" 
                    />
                    {/* Item 3 */}
                    <ListenItemEmbed 
                        title="Action, Energetic" 
                        src="https://play.reelcrafter.com/embed/aa6668ac-f0cf-48c6-9d85-370489f91d24" 
                    />
                    {/* Item 4 */}
                    <ListenItemEmbed 
                        title="Eclectic, Modern" 
                        src="https://play.reelcrafter.com/embed/c3dfc234-2e45-46cf-b191-bf6510111b32" 
                    />
                    {/* Item 5 */}
                    <ListenItemEmbed 
                        title="Dark, Horror" 
                        src="https://play.reelcrafter.com/embed/7634001d-885a-43cd-bc62-958c9f21afc3" 
                    />
                </div>
            </section>
        </main>
    );
}
