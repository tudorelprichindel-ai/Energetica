(() => {
    let previewObserver = null;
    let hoveredVideo = null;
    const visibility = new Map();

    const previewVideos = () => document.querySelectorAll('.product-media video');

    function pauseAll() {
        previewVideos().forEach(video => video.pause());
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
            if (video === activeVideo && !document.hidden) {
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
            video.preload = 'metadata';
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
            if (videos[0]) videos[0].play().catch(() => {});
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
            init();
        }
    });

    window.videoPerformance = { init, pauseAll };
})();
