import { useEffect, useState } from 'react';
import './Biography.css';
import BWLogynBio from '../assets/BWLogynBio.webp';
import BannerImage from '../assets/BannerImage.webp';
import ClassicalPacific from '../assets/ClassicalPacific.webp';
import SpidermanPoster from '../assets/SpidermanNewDay.webp';
import VisionQuestPoster from '../assets/VisionQuest.webp';
import VideoModal, { LiteYouTubePreview } from '../components/VideoModal';

export default function Biography() {
    const [activeVideoModal, setActiveVideoModal] = useState<{ title: string; embedUrl: string } | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePosterClick = (tab: 'composition' | 'orchestration', projectTitle: string) => {
        sessionStorage.setItem('creditsTab', tab);
        sessionStorage.setItem('creditsProjectTitle', projectTitle);
        window.location.hash = '#credits';
    };

    return (
        <main className="biography-page">
            <section className="biography-banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("${BannerImage}")` }}>
                <div className="biography-banner-content">
                    <h1 className="biography-banner-title">BIOGRAPHY</h1>
                </div>
            </section>

            <section className="biography-section">
                <div className="biography-content">
                    <div className="biography-grid">
                        <div className="biography-text-container">
                            <h1 className="biography-title">Logyn Okuda is a film/tv composer from Hawaii in Los Angeles</h1>
                            <p className="biography-text">
                                He recently wrote the music for <em>Cowboys Starbound</em>, the Dallas Cowboysʻ introduction video featuring a hybrid of orchestral, electric, and rock elements. In addition, he scored the Philadelphia 76ers introduction video, featuring an orchestral-hip-hop collaboration with Philadelphia rapper Meek Mill. In addition, he scored the documentary for best-selling author Robert Greeneʻs forthcoming book <em>The Law of the Sublime</em>, utilizing eclectic woodwind and percussive combinations to emulate the hypnotic subjects. He had previously scored Emmy-nominated Henry Ian Cusick’s (<em>LOST</em>) new short, <em>Salvador</em>, political spy-thriller <em>Granadilla</em>, starring Faran Tahir (<em>Iron Man</em>, <em>Star Trek</em>), and video game <em>Nightbound: Paralysis</em> by FlickerLight Games (2027).
                            </p>
                        </div>
                        <div className="biography-image-container">
                            <img src={BWLogynBio} alt="Logyn Okuda Biography" className="biography-image" />
                        </div>
                    </div>

                    <div className="biography-feature-row">
                        <div className="biography-posters-showcase">
                            <div 
                                className="bio-poster-card bio-poster-spiderman" 
                                onClick={() => handlePosterClick('orchestration', 'Spiderman New Day')}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && handlePosterClick('orchestration', 'Spiderman New Day')}
                            >
                                <img src={SpidermanPoster} alt="Spider-Man: Brand New Day Poster" className="bio-poster-img" />
                                <div className="bio-poster-badge">Orchestration</div>
                            </div>
                            <div 
                                className="bio-poster-card bio-poster-visionquest" 
                                onClick={() => handlePosterClick('composition', 'Vision Quest')}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => e.key === 'Enter' && handlePosterClick('composition', 'Vision Quest')}
                            >
                                <img src={VisionQuestPoster} alt="Marvel Television's VisionQuest Poster" className="bio-poster-img" />
                                <div className="bio-poster-badge">Additional Music</div>
                            </div>
                        </div>

                        <div className="biography-text-container">
                            <h2 className="biography-eyebrow">FEATURED COLLABORATIONS & CREDITS</h2>
                            <p className="biography-text">
                                In addition, Okuda collaborates and works for composer Michael Giacchino, orchestrating and assisting on projects such as Sonyʻs <em>Spider-Man: Brand New Day</em>, Marvel’s <em>The Fantastic Four: First Steps</em>, and Disney Animationʻs <em>Zootopia 2</em>. Additional music credits include Marvel Television’s <em>VisionQuest</em>, Paul McCartneyʻs <em>High in the Clouds</em>, Skydance Animation’s <em>Ray Gunn</em>, and Amazon Prime’s <em>Butterfly</em>. Okuda worked with Michael’s son, Mick Giacchino, on an arrangement of a new Muppets song for The Game Awards in December of 2025.
                            </p>
                        </div>
                    </div>

                    <div className="biography-full-text biography-awards-block">
                        <h2 className="biography-eyebrow">AWARDS & RECOGNITION</h2>
                        <p className="biography-text">
                            Logyn also was awarded the Movie Music Award at the Garden State Film Festival for his score and jazz composition on Aiko Lozar’s <em>East Did Meet West</em>, a historical drama featured at the 2026 American Pavilion Emerging Filmmakers’ Showcase at Cannes Film Festival. He was nominated for the 2025 'Emerging Composer Award' from Apulia Soundtrack Awards in Italy, and won ‘Outstanding Achievement Award for Original Score’ in the 2024 IndieX Film Festival for his music on <em>Eve</em>. His score for a commissioned animation, <em>With the Waves</em>, premiered live-to-picture with the Hawai’i Symphony Orchestra in fall of 2025. He was a finalist for the 2024 American Prize for his piece ‘Return to Sky’, commissioned by the Hawaii Chamber Music Festival.
                        </p>
                    </div>
                </div>
               <div className="section-banner" style={{ marginTop: '80px', marginBottom: '40px' }}>
                    <div className="banner-line left-line"></div>
                    <h2 className="banner-title">PRESS FEATURES</h2>
                    <div className="banner-line right-line"></div>
                </div>
                <div className="press-grid">
                    <div 
                        className="press-card"
                        onClick={() =>
                            setActiveVideoModal({
                                title: 'Billy V Live | Composer Logyn Okuda',
                                embedUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr',
                            })
                        }
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setActiveVideoModal({
                                    title: 'Billy V Live | Composer Logyn Okuda',
                                    embedUrl: 'https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr',
                                });
                            }
                        }}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="press-image-container">
                            <LiteYouTubePreview
                                embedUrl="https://www.youtube.com/embed/nNirjrRv8mU?si=uRTjbC5f5BG412Rr"
                                title="Billy V Live | Composer Logyn Okuda"
                            />
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
                 {/* <div className="section-banner" style={{ marginTop: '80px', marginBottom: '40px' }}>
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
                </div> */}
            {activeVideoModal && (
                <VideoModal
                    title={activeVideoModal.title}
                    embedUrl={activeVideoModal.embedUrl}
                    onClose={() => setActiveVideoModal(null)}
                />
            )}
            </section>
        </main>
    );
}
