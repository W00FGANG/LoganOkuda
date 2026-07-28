import { useEffect, useState } from 'react';
import './Credits.css';
import { compositionProjects, orchestrationProjects, ProjectData } from '../data/projectsData';
import IMDbIcon from '../assets/IMDBLogo.webp';

function InteractiveIframe({ src, className, style, allow, sandbox, title, height }: any) {
    const [isInteractive, setIsInteractive] = useState(false);
    return (
        <div 
            style={{ position: 'relative', width: style?.width || '100%', maxWidth: style?.maxWidth, height: height || style?.height || '100%', borderRadius: style?.borderRadius, overflow: 'hidden', ...style }}
            className={className}
            onMouseEnter={() => setIsInteractive(true)}
            onMouseLeave={() => setIsInteractive(false)}
            onClick={() => setIsInteractive(true)}
        >
            {!isInteractive && (
                <div style={{ position: 'absolute', inset: 0, zIndex: 10, cursor: 'pointer' }}></div>
            )}
            <iframe
                src={src}
                style={{ width: '100%', height: '100%', pointerEvents: isInteractive ? 'auto' : 'none', border: 'none' }}
                allow={allow}
                sandbox={sandbox}
                title={title}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default function Credits() {
    const [activeTab, setActiveTab] = useState<'composition' | 'orchestration'>(() => {
        const savedTab = sessionStorage.getItem('creditsTab');
        if (savedTab === 'composition' || savedTab === 'orchestration') {
            return savedTab;
        }
        return 'orchestration';
    });
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        sessionStorage.removeItem('creditsTab');
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
                                        {(selectedProject.award || selectedProject.role) && (
                                            <div className="project-detail-tags">
                                                {selectedProject.award && (
                                                    <span className="project-tag award-tag">
                                                        {selectedProject.award}
                                                    </span>
                                                )}
                                                {selectedProject.role && (
                                                    <span className="project-tag role-tag">
                                                        {selectedProject.role}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                        <div className="project-detail-description-wrapper">
                                            <p className="project-detail-description">{selectedProject.description}</p>
                                        </div>
                                        {(selectedProject.albumEmbedUrl || selectedProject.imdbUrl) && (
                                            <div className="project-detail-subtitle-wrapper" style={{ flexDirection: 'row', alignItems: 'center', gap: '20px', justifyContent: 'flex-start' }}>
                                                <p className="project-detail-subtitle">Links</p>
                                                {selectedProject.imdbUrl && (
                                                    <a href={selectedProject.imdbUrl} target="_blank" rel="noreferrer" aria-label="IMDb" className="imdb-link" style={{ height: '40px', display: 'flex', alignItems: 'center' }}>
                                                        <img src={IMDbIcon} alt="IMDb" className="imdb-icon" style={{ height: '100%', width: 'auto' }} />
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                        <div className="project-detail-links">
                                            {selectedProject.albumEmbedUrl && (
                                                <InteractiveIframe 
                                                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                                                    height="450" 
                                                    style={{ width: '100%', maxWidth: '860px', height: '400px', overflow: 'hidden', borderRadius: '10px' }}
                                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                                                    src={selectedProject.albumEmbedUrl}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Short Film Section */}
                            {selectedProject.shortFilmUrl && (
                                <>
                                    <div className="section-banner trailer-banner">
                                        <div className="banner-line left-line"></div>
                                        <h1 className="banner-title">SHORT FILM</h1>
                                        <div className="banner-line right-line"></div>
                                    </div>
                                    
                                    <div className="project-trailer-container">
                                        <InteractiveIframe 
                                            className="project-trailer-video" 
                                            src={selectedProject.shortFilmUrl} 
                                            title="Short Film" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        />
                                    </div>
                                </>
                            )}

                            {/* Trailer Section */}
                            {selectedProject.trailerUrl && (
                                <>
                                    <div className="section-banner trailer-banner">
                                        <div className="banner-line left-line"></div>
                                        <h1 className="banner-title">TRAILER</h1>
                                        <div className="banner-line right-line"></div>
                                    </div>
                                    
                                    <div className="project-trailer-container">
                                        <InteractiveIframe 
                                            className="project-trailer-video" 
                                            src={selectedProject.trailerUrl} 
                                            title="Trailer" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
