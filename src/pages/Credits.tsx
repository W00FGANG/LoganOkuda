import { useEffect, useState } from 'react';
import './Credits.css';
import { compositionProjects, orchestrationProjects, ProjectData } from '../data/projectsData';
import IMDbIcon from '../assets/IMDBLogo.png';

export default function Credits() {
    const [activeTab, setActiveTab] = useState<'composition' | 'orchestration'>('orchestration');
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Scroll to top when a project is selected
    useEffect(() => {
        if (selectedProject) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [selectedProject]);

    const currentPosters = activeTab === 'composition' ? compositionProjects : orchestrationProjects;

    return (
        <main className="credits-page">
            <div className="credits-shading-overlay">
                <div className="credits-content">
                    
                    {!selectedProject ? (
                        <>
                            {/* CREDITS Banner */}
                            <div className="section-banner credits-banner">
                                <div className="banner-line left-line"></div>
                                <h1 className="banner-title">CREDITS</h1>
                                <div className="banner-line right-line"></div>
                            </div>

                            {/* Tabs / Subheadings */}
                            <div className="credits-tabs-container">
                                <div className={`credits-tabs ${activeTab === 'orchestration' ? 'is-orchestration' : 'is-composition'}`}>
                                    <h3 
                                        className={`tab-title ${activeTab === 'composition' ? 'active-tab' : 'inactive-tab'}`}
                                        onClick={() => setActiveTab('composition')}
                                    >
                                        Composition Credits
                                    </h3>
                                    <h3 
                                        className={`tab-title ${activeTab === 'orchestration' ? 'active-tab' : 'inactive-tab'}`}
                                        onClick={() => setActiveTab('orchestration')}
                                    >
                                        Orchestration Credits
                                    </h3>
                                </div>
                            </div>

                            {/* Poster Grid */}
                            <div className="credits-grid" key={activeTab}>
                                {currentPosters.map((poster, index) => (
                                    <div 
                                        key={poster.id} 
                                        className="poster-card" 
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                        onClick={() => setSelectedProject(poster)}
                                    >
                                        <img src={poster.src} alt={poster.alt} className="poster-image" />
                                        <div className="poster-overlay">
                                            <span className="poster-title">{poster.alt}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="project-detail-view fade-in-up">
                            <div className="project-detail-top">
                                <button className="back-button" onClick={() => setSelectedProject(null)}>
                                    Back
                                </button>
                                
                                <div className="project-detail-content">
                                    <img src={selectedProject.src} alt={selectedProject.alt} className="project-detail-poster" />
                                    
                                    <div className="project-detail-info">
                                        <div className="project-detail-title-wrapper">
                                            <p className="project-detail-title">{selectedProject.title}</p>
                                        </div>
                                        <div className="project-detail-description-wrapper">
                                            <p className="project-detail-description">{selectedProject.description}</p>
                                        </div>
                                        <div className="project-detail-subtitle-wrapper">
                                            <p className="project-detail-subtitle">Albums</p>
                                        </div>
                                        <div className="project-detail-links">
                                            <img src={selectedProject.albumCover} alt="Album Cover" className="project-album-cover" />
                                            {selectedProject.imdbUrl && (
                                                <a href={selectedProject.imdbUrl} target="_blank" rel="noreferrer" className="imdb-link">
                                                    <img src={IMDbIcon} alt="IMDb" className="imdb-icon" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trailer Section */}
                            <div className="section-banner trailer-banner">
                                <div className="banner-line left-line"></div>
                                <h1 className="banner-title">TRAILER</h1>
                                <div className="banner-line right-line"></div>
                            </div>
                            
                            <div className="project-trailer-container">
                                {selectedProject.trailerUrl ? (
                                    <iframe 
                                        className="project-trailer-video" 
                                        src={selectedProject.trailerUrl} 
                                        title="Trailer" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <div className="no-trailer">Trailer unavailable</div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
