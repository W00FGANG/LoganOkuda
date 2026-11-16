import { useEffect, useRef, useState } from 'react';
import './Projects.css';
import ComposerReel from '../assets/ComposerReel.mp4';
import OrchestraReel from '../assets/OrchestraReel.mp4';
import { featuredVideos, FeaturedVideo } from '../data/projectsData';
import VideoModal, { LiteYouTubePreview } from './VideoModal';

export default function Projects() {
    const [shouldLoadVideos, setShouldLoadVideos] = useState(false);
    const [isReelsVisible, setIsReelsVisible] = useState(false);
    const [activeVideoModal, setActiveVideoModal] = useState<FeaturedVideo | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const reelsGridRef = useRef<HTMLDivElement>(null);
    const composerVideoRef = useRef<HTMLVideoElement>(null);
    const orchestraVideoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const target = reelsGridRef.current || sectionRef.current;
        if (!target) return;

        const loadObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShouldLoadVideos(true);
                    loadObserver.disconnect();
                }
            },
            { rootMargin: '200px 0px' }
        );

        const visibilityObserver = new IntersectionObserver(
            ([entry]) => {
                setIsReelsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        loadObserver.observe(target);
        visibilityObserver.observe(target);

        return () => {
            loadObserver.disconnect();
            visibilityObserver.disconnect();
        };
    }, []);

    useEffect(() => {
        const videos = [composerVideoRef.current, orchestraVideoRef.current];
        const shouldPlay = shouldLoadVideos && isReelsVisible && !activeVideoModal;

        videos.forEach((video) => {
            if (!video) return;
            if (shouldPlay) {
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }, [shouldLoadVideos, isReelsVisible, activeVideoModal]);

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

            <div className="recent-videos-grid">
                {featuredVideos.map((video) => (
                    <div
                        key={video.id}
                        className="recent-video-card animate-on-scroll"
                        onClick={() => setActiveVideoModal(video)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setActiveVideoModal(video);
                            }
                        }}
                    >
                        <div className="recent-video-header">
                            <h3 className="recent-video-title">{video.title}</h3>
                            <span className="recent-video-expand-hint">Click to Preview</span>
                        </div>
                        <div className="recent-video-embed">
                            <LiteYouTubePreview embedUrl={video.embedUrl} title={video.title} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="projects-grid" ref={reelsGridRef}>
                <div className="project-card animate-on-scroll" onClick={() => handleNavigate('composition')} style={{ cursor: 'pointer' }}>
                    <video 
                        ref={composerVideoRef}
                        src={shouldLoadVideos ? ComposerReel : undefined} 
                        preload="none"
                        className="project-poster project-poster-1" 
                        muted
                        playsInline
                        loop
                    />
                    <div className="project-text-overlay">
                        <h3>Composition<br />Credits</h3>
                    </div>
                </div>
                <div className="project-card animate-on-scroll" onClick={() => handleNavigate('orchestration')} style={{ cursor: 'pointer' }}>
                    <video 
                        ref={orchestraVideoRef}
                        src={shouldLoadVideos ? OrchestraReel : undefined} 
                        preload="none"
                        className="project-poster project-poster-2" 
                        muted
                        playsInline
                        loop
                    />
                    <div className="project-text-overlay">
                        <h3>Orchestration<span className="desktop-space"> </span><br className="mobile-break" />Credits</h3>
                    </div>
                </div>
            </div>

            {activeVideoModal && (
                <VideoModal
                    title={activeVideoModal.title}
                    embedUrl={activeVideoModal.embedUrl}
                    onClose={() => setActiveVideoModal(null)}
                />
            )}
        </section>
    );
}
