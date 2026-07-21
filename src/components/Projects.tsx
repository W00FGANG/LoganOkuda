import './Projects.css';

export default function Projects() {
    return (
        <section id="credits" className="projects-section">
            <div className="section-banner animate-on-scroll">
                <img src="http://localhost:3845/assets/05deed5dba1d684f6ea691bee78b7141b80aa615.svg" alt="line left" className="banner-line" />
                <h2 className="banner-title">RECENT PROJECTS</h2>
                <img src="http://localhost:3845/assets/84b416ed3067e5769186607e2f6d6e45756bf267.svg" alt="line right" className="banner-line" />
            </div>
            <div className="projects-grid">
                <div className="project-card animate-on-scroll">
                    <div className="project-poster project-poster-1"></div>
                    <div className="project-text-overlay">
                        <h3>Composition<br />Credits</h3>
                    </div>
                </div>
                <div className="project-card animate-on-scroll">
                    <div className="project-poster project-poster-2"></div>
                    <div className="project-text-overlay">
                        <h3>Orchestration Credits</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
