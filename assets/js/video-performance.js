(() => {
    let previewObserver = null;
    let hoveredVideo = null;
    const visibility = new Map();
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const posterByVideo = {
        'ANTISTRESS.mp4': 'assets/images/video-posters/antistress.webp',
        'JAUNĀ LAIKMETA VĪRIETIS.mp4': 'assets/images/video-posters/new-era-man.webp',
        'Rota ir pieejama.mp4': 'assets/images/video-posters/available.webp',
        'VĒLMJU REALIZĒŠANAS ROTA.mp4': 'assets/images/video-posters/wish-realization.webp'
    };

    const previewVideos = () => document.querySelectorAll('.product-media video');

    function pauseAll() {
        previewVideos().forEach(video => video.pause());
    }

    function getPoster(source) {
        const fileName = source.split('/').pop();
        return posterByVideo[fileName] || '';
    }

    function loadVideo(video) {
        if (video.getAttribute('src')) return;

        const source = video.dataset.src;
        if (!source) return;

        video.src = source;
        video.load();
    }

    function updatePlayback() {
        const videos = [...previewVideos()];
        let activeVideo = hoveredVideo;

        if (!activeVideo) {
            activeVideo = videos.reduce((best, video) => {
                const ratio = visibility.get(video) || 0;
                const bestRatio = best ? visibility.get(best) || 0 : 0;
                return ratio >= 0.35 && ratio > bestRatio ? video : best;
            }, null);
        }

        videos.forEach(video => {
            if (video === activeVideo && !document.hidden && !prefersReducedMotion.matches) {
                loadVideo(video);
                video.play().catch(() => {});
            } else {
                video.pause();
            }
        });
    }

    function init() {
        if (previewObserver) previewObserver.disconnect();

        const videos = previewVideos();
        visibility.clear();
        hoveredVideo = null;
        videos.forEach(video => {
            video.muted = true;
            video.preload = 'none';
            const source = video.dataset.src || video.getAttribute('src') || '';
            const poster = getPoster(source);
            if (poster) video.poster = poster;
            const card = video.closest('.product-card');
            if (card && !card.dataset.videoPreviewBound) {
                card.dataset.videoPreviewBound = 'true';
                card.addEventListener('pointerenter', () => {
                    hoveredVideo = video;
                    updatePlayback();
                });
                card.addEventListener('pointerleave', () => {
                    hoveredVideo = null;
                    updatePlayback();
                });
            }
        });

        if (!('IntersectionObserver' in window)) {
            if (videos[0] && !prefersReducedMotion.matches) {
                loadVideo(videos[0]);
                videos[0].play().catch(() => {});
            }
            return;
        }

        previewObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                visibility.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
            });
            updatePlayback();
        }, { threshold: [0, 0.35] });

        videos.forEach(video => previewObserver.observe(video));
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseAll();
        } else {
            updatePlayback();
        }
    });

    prefersReducedMotion.addEventListener?.('change', updatePlayback);

    window.videoPerformance = { init, pauseAll };
})();
