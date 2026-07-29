(() => {
    const settings = {
        publicApiKey: 'ZTBlNGE2ZmQtZDdlNy00NTk5LWJjM2QtODI2NjZjNmFhMGM3NjM5MDczMzYwNzY4ODQ1NDI1',
        version: '3.3.3',
        modalStyle: 'side',
        currency: 'eur'
    };
    const interactionEvents = ['focusin', 'pointerover', 'touchstart', 'keydown'];
    let loaded = false;

    function loadSnipcart() {
        if (loaded) return;
        loaded = true;

        let container = document.getElementById('snipcart');
        if (!container) {
            container = document.createElement('div');
            container.id = 'snipcart';
            container.hidden = true;
            document.body.appendChild(container);
        }

        container.dataset.apiKey = settings.publicApiKey;
        container.dataset.configModalStyle = settings.modalStyle;
        container.dataset.currency = settings.currency;

        if (!document.querySelector('link[data-snipcart-theme]')) {
            const stylesheet = document.createElement('link');
            stylesheet.rel = 'stylesheet';
            stylesheet.dataset.snipcartTheme = '';
            stylesheet.href = `https://cdn.snipcart.com/themes/v${settings.version}/default/snipcart.css`;
            document.head.appendChild(stylesheet);
        }

        if (!document.querySelector('script[data-snipcart-script]')) {
            const script = document.createElement('script');
            script.async = true;
            script.dataset.snipcartScript = '';
            script.src = `https://cdn.snipcart.com/themes/v${settings.version}/default/snipcart.js`;
            document.head.appendChild(script);
        }

        interactionEvents.forEach(eventName => {
            document.removeEventListener(eventName, loadSnipcart);
        });
    }

    interactionEvents.forEach(eventName => {
        document.addEventListener(eventName, loadSnipcart, { once: true, passive: true });
    });

    window.setTimeout(loadSnipcart, 2750);
    window.LoadSnipcart = loadSnipcart;
})();
