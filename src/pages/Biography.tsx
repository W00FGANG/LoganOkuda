import { useEffect } from 'react';
import './Biography.css';
import BWLogynBio from '../assets/BWLogynBio.png';
import BannerImage from '../assets/Banner Image.png';
import ClassicalPacific from '../assets/ClassicalPacific.png';
import SkyfallVideo from '../assets/SkyFall.mp4';

export default function Biography() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="biography-page">
            <section className="biography-banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("${BannerImage}")` }}>
                <div className="biography-banner-content">
                    <h1 className="biography-banner-title">BIOGRAPHY</h1>
                    <p className="biography-banner-subtitle">
                        a fast-rising film and television music composer and orchestrator. Originally from Hawaii, he has quickly made a name for himself in Hollywood through his collaborative work under Oscar-winning composer Michael Giacchino.
                    </p>
                    <button 
                        className="biography-banner-btn"
                        onClick={() => document.querySelector('.biography-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >LEARN MORE</button>
                </div>
            </section>

            <section className="biography-section">
                <div className="biography-content">
                    <div className="biography-grid">
                        <div className="biography-text-container">
                            <p className="biography-text">
                                He recently scored Emmy-nominated Henry Ian Cusick’s (LOST) new short, Salvador, political spy-thriller Granadilla, starring Faran Tahir (Iron Man, Star Trek), indie video game Agebringer by Space Base Games (2026), and Nightbound: Paralysis by FlickerLight Games (2027). <br /> <br /> In addition, Okuda collaborates and works for composer Michael Giacchino, orchestrating and assisting on projects such as Marvel’s The Fantastic Four: First Steps, Disney’s Zootopia 2, and Warner Bros.’ The End of Oak Street. Additional music credits include Skydance Animation’s Ray Gunn (dir. by Brad Bird), Amazon Prime’s Butterfly, Marvel Television’s VisionQuest. Okuda worked with Michael’s son, Mick Giacchino, on an arrangement of a new Muppets song for The Game Awards in December of 2025.
                            </p>
                        </div>
                        <div className="biography-image-container">
                            <img src={BWLogynBio} alt="Logan Biography" className="biography-image" />
                        </div>
                    </div>
                    <div className="biography-full-text">
                        <p className="biography-text">
                            Logyn also was awarded the Movie Music Award at the Garden State Film Festival for his score and jazz composition on Aiko Lozar’s East Did Meet West, a historical drama featured at the 2026 American Pavilion Emerging Filmmakers’ Showcase at Cannes Film Festival. He was nominated for the 2025 'Emerging Composer Award' from Apulia Soundtrack Awards in Italy, and won ‘Outstanding Achievement Award for Original Score’ in the 2024 IndieX Film Festival for his music on Eve. His score for a commissioned animation, With the Waves, premiered live-to-picture with the Hawai’i Symphony Orchestra in fall of 2025. He was a finalist for the 2024 American Prize for his piece ‘Return to Sky’, commissioned by the Hawaii Chamber Music Festival.
                        </p>
                    </div>
                </div>
               <div className="section-banner" style={{ marginTop: '80px', marginBottom: '40px' }}>
                    <div className="banner-line left-line"></div>
                    <h2 className="banner-title">PRESS FEATURES</h2>
                    <div className="banner-line right-line"></div>
                </div>
                <div className="press-grid">
                    <div className="press-card">
                        <div className="press-image-container">
                            <iframe 
                                className="press-image" 
                                src="https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="press-text">
                            <p>This week on Billy V Live, Billy sits down with composer Logyn Okuda, an Iolani graduate who writes scores for some the world’s biggest box office hits.</p>
                        </div>
                    </div>
                    <a 
                        href="https://www.hawaiipublicradio.org/classical-music-conversations/2025-10-23/composer-logyn-okuda" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="press-card"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className="press-image-container">
                            <img src={ClassicalPacific} alt="Classical Pacific" className="press-image" />
                        </div>
                        <div className="press-text">
                            <p>Composer Logyn Okuda returns to Classical Pacific with updates on his career, orchestrating for composer Michael Giacchino on Butterfly, The Fantastic Four, and most recently, the upcoming Zootopia 2. Okuda will back home in the islands this week as one of 5 Hawai`i composers featured in the Hawai`i Symphony Orchestraʻs Symphony of the Hawai`i Seas.</p>
                        </div>
                    </a>
                </div>
                <div className="section-banner" style={{ marginTop: '80px', marginBottom: '40px' }}>
                    <div className="banner-line left-line"></div>
                    <h2 className="banner-title">OTHER WORK</h2>
                    <div className="banner-line right-line"></div>
                </div>
                <div className="other-work-list">
                    <div className="other-work-item">
                        <div className="other-work-image-container">
                            <video src={SkyfallVideo} className="other-work-image" controls />
                        </div>
                        <p className="other-work-text">Rescore of ‘Skyfall’ (2012) motorcycle chase sequence.</p>
                    </div>
                    <div className="other-work-item">
                        <div className="other-work-image-container">
                            <iframe 
                                className="other-work-video" 
                                src="https://www.youtube.com/embed/Q0-nb3VRV4A?si=9YkWll1uuBSV5U-w" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="other-work-text">‘Elegy for a Flower’, a tone poem for my late grandmother, <br />as performed by Budapest Scoring.</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
