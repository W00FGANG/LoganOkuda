import './Projects.css';
import ComposerReel from '../assets/ComposerReel.mp4';
import OrchestraReel from '../assets/OrchestraReel.mp4';

export default function Projects() {
    const handleNavigate = (tab: string) => {
        sessionStorage.setItem('creditsTab', tab);
        window.location.hash = '#credits';
    };

    return (
        <section id="credits" className="projects-section">
            <div className="section-banner animate-on-scroll">
                <div className="banner-line left-line"></div>
                <h2 className="banner-title">RECENT PROJECTS</h2>
                <div className="banner-line right-line"></div>
            </div>
            <div className="projects-grid">
                <div className="project-card animate-on-scroll" onClick={() => handleNavigate('composition')} style={{ cursor: 'pointer' }}>
                    <video 
                        src={ComposerReel} 
                        className="project-poster project-poster-1" 
                        autoPlay loop muted playsInline 
                        ref={(el) => { if (el) el.playbackRate = 0.6; }}
                    />
                    <div className="project-text-overlay">
                        <h3>Composition<br />Credits</h3>
                    </div>
                </div>
                <div className="project-card animate-on-scroll" onClick={() => handleNavigate('orchestration')} style={{ cursor: 'pointer' }}>
                    <video src={OrchestraReel} className="project-poster project-poster-2" autoPlay loop muted playsInline />
                    <div className="project-text-overlay">
                        <h3>Orchestration Credits</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
