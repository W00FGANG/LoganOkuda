import { useEffect } from 'react';
import './Biography.css';
import CollageLogan from '../assets/Collage Logan 1 1.png';
import LoganComposer from '../assets/Logan Composer.jpg';
import BannerImage from '../assets/Banner Image.png';

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
                    <button className="biography-banner-btn">LEARN MORE</button>
                </div>
            </section>

            <section className="biography-section">
                <div className="biography-content">
                    <div className="biography-grid">
                        <div className="biography-text-container">
                            <p className="biography-text">
                                He recently scored Emmy-nominated Henry Ian Cusick’s (LOST) new short, Salvador, political spy-thriller Granadilla, starring Faran Tahir (Iron Man, Star Trek), indie video game Agebringer by Space Base Games (2026), and Nightbound: Paralysis by FlickerLight Games (2027). In addition, Okuda collaborates and works for composer Michael Giacchino, orchestrating and assisting on projects such as Marvel’s The Fantastic Four: First Steps, Disney’s Zootopia 2, and Warner Bros.’ The End of Oak Street. Additional music credits include Skydance Animation’s Ray Gunn (dir. by Brad Bird), Amazon Prime’s Butterfly, Marvel Television’s VisionQuest. Okuda worked with Michael’s son, Mick Giacchino, on an arrangement of a new Muppets song for The Game Awards in December of 2025.
                            </p>
                        </div>
                        <div className="biography-images-wrapper">
                            <img src={CollageLogan} alt="Logan Studio" className="biography-image-top" />
                            <img src={LoganComposer} alt="Logan Conducting" className="biography-image-bottom" />
                        </div>
                    </div>
                    <div className="biography-full-text">
                        <p className="biography-text">
                            Logyn also was awarded the Movie Music Award at the Garden State Film Festival for his score and jazz composition on Aiko Lozar’s East Did Meet West, a historical drama featured at the 2026 American Pavilion Emerging Filmmakers’ Showcase at Cannes Film Festival. He was nominated for the 2025 'Emerging Composer Award' from Apulia Soundtrack Awards in Italy, and won ‘Outstanding Achievement Award for Original Score’ in the 2024 IndieX Film Festival for his music on Eve. His score for a commissioned animation, With the Waves, premiered live-to-picture with the Hawai’i Symphony Orchestra in fall of 2025. He was a finalist for the 2024 American Prize for his piece ‘Return to Sky’, commissioned by the Hawaii Chamber Music Festival.
                        </p>
                    </div>
                </div>
               <div className="biography-divider-banner">
                    <div className="biography-divider-line left-line"></div>
                    <h2 className="biography-divider-title">RECENT PROJECTS</h2>
                    <div className="biography-divider-line right-line"></div>
                </div>
            </section>
        </main>
    );
}
