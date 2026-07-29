(() => {
    const root = document.documentElement;
    const finePointer = window.matchMedia(
        '(pointer: fine) and (min-width: 1025px) and (prefers-reduced-motion: no-preference)'
    );
    const customCursor = document.querySelector('.cursor-dot');
    const interactiveSelector = [
        'a',
        'button',
        'input',
        'textarea',
        'select',
        'summary',
        'label[for]',
        'video[controls]',
        '[role="button"]',
        '#snipcart'
    ].join(',');

    function updateCursor(target) {
        const useCustomCursor = Boolean(customCursor)
            && finePointer.matches
            && target instanceof Element
            && !target.closest(interactiveSelector);
        root.classList.toggle('custom-cursor-active', useCustomCursor);
    }

    document.addEventListener('pointermove', event => updateCursor(event.target), { passive: true });
    document.addEventListener('pointerleave', () => root.classList.remove('custom-cursor-active'));
    document.addEventListener('keydown', event => {
        if (event.key === 'Tab') root.classList.remove('custom-cursor-active');
    });
    finePointer.addEventListener?.('change', () => root.classList.remove('custom-cursor-active'));

    const placeholderSocialHosts = new Set([
        'www.instagram.com',
        'instagram.com',
        'www.tiktok.com',
        'tiktok.com'
    ]);

    document.querySelectorAll('a[href]').forEach(link => {
        let url;
        try {
            url = new URL(link.href, window.location.href);
        } catch {
            return;
        }

        if (placeholderSocialHosts.has(url.hostname) && (url.pathname === '/' || url.pathname === '')) {
            link.hidden = true;
            link.setAttribute('aria-hidden', 'true');
            link.tabIndex = -1;
        }

        if (link.target === '_blank') {
            const relations = new Set((link.rel || '').split(/\s+/).filter(Boolean));
            relations.add('noopener');
            relations.add('noreferrer');
            link.rel = [...relations].join(' ');
        }
    });
})();
