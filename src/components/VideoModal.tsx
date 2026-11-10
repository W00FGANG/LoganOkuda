import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './VideoModal.css';

interface VideoModalProps {
    title: string;
    embedUrl: string;
    onClose: () => void;
}

function extractYouTubeId(embedUrl: string): string | null {
    const match = embedUrl.match(/\/embed\/([^?&/]+)/);
    return match ? match[1] : null;
}

function toPrivacyEnhancedEmbedUrl(embedUrl: string): string {
    return embedUrl.replace('https://www.youtube.com/embed/', 'https://www.youtube-nocookie.com/embed/');
}

export function LiteYouTubePreview({
    embedUrl,
    title,
    className = '',
}: {
    embedUrl: string;
    title: string;
    className?: string;
}) {
    const videoId = extractYouTubeId(embedUrl);
    const thumbnailUrl = videoId
        ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
        : '';

    return (
        <div className={`lite-yt-preview ${className}`.trim()}>
            {thumbnailUrl && (
                <img
                    src={thumbnailUrl}
                    alt={title}
                    className="lite-yt-thumbnail"
                    loading="lazy"
                    decoding="async"
                />
            )}
            <div className="lite-yt-play-btn" aria-hidden="true">
                <svg viewBox="0 0 68 48" width="68" height="48">
                    <path
                        className="lite-yt-play-bg"
                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                        fill="#212121"
                        fillOpacity="0.8"
                    />
                    <path d="M 45,24 27,14 27,34" fill="#fff" />
                </svg>
            </div>
        </div>
    );
}

export default function VideoModal({ title, embedUrl, onClose }: VideoModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const privacyUrl = toPrivacyEnhancedEmbedUrl(embedUrl);
    const autoplaySrc = privacyUrl.includes('?')
        ? `${privacyUrl}&autoplay=1`
        : `${privacyUrl}?autoplay=1`;

    return createPortal(
        <div
            className="video-modal-backdrop"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={title}
        >
            <div
                className="video-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="video-modal-header">
                    <h3 className="video-modal-title">{title}</h3>
                    <button
                        type="button"
                        className="video-modal-close"
                        onClick={onClose}
                        aria-label="Close video preview"
                    >
                        &times;
                    </button>
                </div>
                <div className="video-modal-player">
                    <iframe
                        width="100%"
                        height="100%"
                        src={autoplaySrc}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>,
        document.body
    );
}
