import { useEffect, useRef, useState } from 'react';
import './Projects.css';
import ComposerReel from '../assets/ComposerReel.mp4';
import OrchestraReel from '../assets/OrchestraReel.mp4';

export default function Projects() {
    const [shouldLoadVideos, setShouldLoadVideos] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadVideos(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '200px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleNavigate = (tab: string) => {
        sessionStorage.setItem('creditsTab', tab);
        window.location.hash = '#credits';
    };

    return (
        <section id="credits" className="projects-section" ref={sectionRef}>
            <div className="section-banner animate-on-scroll">
                <div className="banner-line left-line"></div>
                <h2 className="banner-title">RECENT PROJECTS</h2>
                <div className="banner-line right-line"></div>
            </div>
            <div className="projects-grid">
                <div className="project-card animate-on-scroll" onClick={() => handleNavigate('composition')} style={{ cursor: 'pointer' }}>
                    <video 
                        src={shouldLoadVideos ? ComposerReel : undefined} 
                        preload="none"
                        className="project-poster project-poster-1" 
                        autoPlay muted playsInline
                        onEnded={(e) => {
                            e.currentTarget.currentTime = 0;
                            e.currentTarget.play();
                        }}
                    />
                    <div className="project-text-overlay">
                        <h3>Composition<br />Credits</h3>
                    </div>
                </div>
                <div className="project-card animate-on-scroll" onClick={() => handleNavigate('orchestration')} style={{ cursor: 'pointer' }}>
                    <video 
                        src={shouldLoadVideos ? OrchestraReel : undefined} 
                        preload="none"
                        className="project-poster project-poster-2" 
                        autoPlay muted playsInline
                        onEnded={(e) => {
                            e.currentTarget.currentTime = 0;
                            e.currentTarget.play();
                        }}
                    />
                    <div className="project-text-overlay">
                        <h3>Orchestration<span className="desktop-space"> </span><br className="mobile-break" />Credits</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
