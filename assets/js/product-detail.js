(() => {
    const productKey = document.body.dataset.product;
    const products = {
        antistress: {
            id: 'antistress',
            canonicalName: 'Echilibru Antistres',
            price: '90.00',
            video: 'assets/videos/ANTISTRESS.mp4',
            poster: 'assets/images/video-posters/antistress.webp',
            translations: {
                ro: {
                    name: 'Echilibru Antistres',
                    tagline: 'Un simbol personal construit în jurul intenției de echilibru și prezență.',
                    description: 'O creație din colecția Pentru Ea, prezentată ca un obiect personal de purtat și un reper pentru intenția aleasă.',
                    intention: 'Echilibru și prezență',
                    aboutTitle: 'Despre această creație',
                    about: 'Echilibru Antistres face parte din colecția de brățări energetice The Power Boutique. Designul este pus în valoare printr-o prezentare video completă, astfel încât forma și combinația vizuală să poată fi observate înainte de comandă.',
                    roleTitle: 'Rol și utilizare',
                    role: 'Brățara are rol simbolic și poate însoți un ritual personal de reflecție sau intenție. Nu este un produs medical și nu înlocuiește recomandările unui profesionist.'
                },
                en: {
                    name: 'Antistress Balance',
                    tagline: 'A personal symbol built around the intention of balance and presence.',
                    description: 'A creation from the For Her collection, presented as a personal object to wear and a reminder of the intention you choose.',
                    intention: 'Balance and presence',
                    aboutTitle: 'About this creation',
                    about: 'Antistress Balance belongs to The Power Boutique energy bracelet collection. The complete video presentation lets you observe its shape and visual combination before ordering.',
                    roleTitle: 'Role and use',
                    role: 'The bracelet has a symbolic role and may accompany a personal reflection or intention ritual. It is not a medical product and does not replace professional advice.'
                },
                ru: {
                    name: 'Антистрессовый баланс',
                    tagline: 'Личный символ, созданный вокруг намерения равновесия и присутствия.',
                    description: 'Изделие из коллекции «Для неё», представленное как личный аксессуар и напоминание о выбранном намерении.',
                    intention: 'Равновесие и присутствие',
                    aboutTitle: 'Об этом изделии',
                    about: '«Антистрессовый баланс» входит в коллекцию энергетических браслетов The Power Boutique. Полная видеопрезентация позволяет рассмотреть форму и визуальное сочетание до заказа.',
                    roleTitle: 'Роль и использование',
                    role: 'Браслет имеет символическое значение и может сопровождать личную практику размышления или намерения. Он не является медицинским изделием и не заменяет профессиональную консультацию.'
                },
                lv: {
                    name: 'Antistresa līdzsvars',
                    tagline: 'Personisks simbols, kas veidots ap līdzsvara un klātbūtnes nodomu.',
                    description: 'Kolekcijas “Viņai” radījums, kas pasniegts kā personisks valkājams priekšmets un atgādinājums par izvēlēto nodomu.',
                    intention: 'Līdzsvars un klātbūtne',
                    aboutTitle: 'Par šo radījumu',
                    about: '“Antistresa līdzsvars” ir daļa no The Power Boutique enerģētisko aproču kolekcijas. Pilnais video ļauj pirms pasūtīšanas apskatīt formu un vizuālo kombināciju.',
                    roleTitle: 'Loma un lietošana',
                    role: 'Aprocei ir simboliska loma, un tā var papildināt personisku pārdomu vai nodoma rituālu. Tā nav medicīnas ierīce un neaizstāj profesionālu padomu.'
                }
            }
        },
        dorinte: {
            id: 'dorinte',
            canonicalName: 'Realizarea Dorințelor',
            price: '113.00',
            video: 'assets/videos/VĒLMJU REALIZĒŠANAS ROTA.mp4',
            poster: 'assets/images/video-posters/wish-realization.webp',
            translations: {
                ro: {
                    name: 'Realizarea Dorințelor',
                    tagline: 'O creație construită în jurul intenției, clarității și direcției personale.',
                    description: 'O brățară din colecția Pentru Ea, concepută ca simbol purtabil pentru o dorință formulată conștient.',
                    intention: 'Intenție și claritate',
                    aboutTitle: 'Despre această creație',
                    about: 'Realizarea Dorințelor este prezentată printr-un clip complet, care permite observarea designului înainte de comandă. Piesa aparține universului vizual The Power Boutique și colecției dedicate femeilor.',
                    roleTitle: 'Rol și utilizare',
                    role: 'Brățara are rol simbolic și poate susține un moment personal de reflecție asupra unei intenții. Nu garantează un rezultat și nu înlocuiește serviciile unui profesionist.'
                },
                en: {
                    name: 'Wish Realization',
                    tagline: 'A creation built around intention, clarity and personal direction.',
                    description: 'A bracelet from the For Her collection, designed as a wearable symbol for a consciously stated wish.',
                    intention: 'Intention and clarity',
                    aboutTitle: 'About this creation',
                    about: 'Wish Realization is presented through a complete video, allowing you to observe its design before ordering. The piece belongs to The Power Boutique’s visual universe and its collection dedicated to women.',
                    roleTitle: 'Role and use',
                    role: 'The bracelet has a symbolic role and may support a personal moment of reflection on an intention. It does not guarantee an outcome and does not replace professional services.'
                },
                ru: {
                    name: 'Исполнение желаний',
                    tagline: 'Изделие, созданное вокруг намерения, ясности и личного направления.',
                    description: 'Браслет из коллекции «Для неё», задуманный как носимый символ осознанно сформулированного желания.',
                    intention: 'Намерение и ясность',
                    aboutTitle: 'Об этом изделии',
                    about: '«Исполнение желаний» представлено в полном видео, которое позволяет рассмотреть дизайн до заказа. Изделие относится к визуальному миру The Power Boutique и женской коллекции.',
                    roleTitle: 'Роль и использование',
                    role: 'Браслет имеет символическое значение и может сопровождать личное размышление о намерении. Он не гарантирует результат и не заменяет профессиональные услуги.'
                },
                lv: {
                    name: 'Vēlmju realizācija',
                    tagline: 'Radījums, kas veidots ap nodomu, skaidrību un personisku virzienu.',
                    description: 'Kolekcijas “Viņai” aproce, kas iecerēta kā valkājams simbols apzināti formulētai vēlmei.',
                    intention: 'Nodoms un skaidrība',
                    aboutTitle: 'Par šo radījumu',
                    about: '“Vēlmju realizācija” ir parādīta pilnā video, kas ļauj pirms pasūtīšanas apskatīt dizainu. Tā pieder The Power Boutique vizuālajai pasaulei un sievietēm veltītajai kolekcijai.',
                    roleTitle: 'Loma un lietošana',
                    role: 'Aprocei ir simboliska loma, un tā var papildināt personiskas pārdomas par nodomu. Tā negarantē rezultātu un neaizstāj profesionālus pakalpojumus.'
                }
            }
        }
    };

    const ui = {
        ro: {
            locale: 'ro-RO',
            home: 'Acasă',
            consultations: 'Consultații',
            shop: 'Shop',
            about: 'Despre',
            contact: 'Contact',
            back: 'Înapoi la colecția Pentru Ea',
            collection: 'Colecția Pentru Ea',
            videoHint: 'Pornește clipul',
            typeLabel: 'Tip',
            type: 'Brățară energetică',
            intentionLabel: 'Intenție',
            availabilityLabel: 'Disponibilitate',
            availability: 'Disponibilă în magazinul de test',
            deliveryLabel: 'Livrare',
            delivery: 'Calculată la finalizarea comenzii',
            specs: 'Compoziția exactă, mărimea, elementele metalice și instrucțiunile de întreținere sunt în curs de documentare și vor fi publicate înainte de activarea plăților live.',
            add: 'Adaugă în coș',
            ask: 'Întreabă pe WhatsApp',
            secureTitle: 'Plată securizată',
            secureText: 'Checkout Snipcart conectat la infrastructura Stripe, momentan în modul de test.',
            shippingTitle: 'Livrare internațională',
            shippingText: 'Costul este afișat în checkout în funcție de greutatea coletului.',
            supportTitle: 'Asistență directă',
            supportText: 'Poți cere clarificări înainte de comandă prin WhatsApp sau Telegram.',
            footer: '© 2026 ENERGETICA · JELENA SHIPKO',
            message: 'Bună, Elena! Aș dori mai multe detalii despre brățara'
        },
        en: {
            locale: 'en-GB',
            home: 'Home',
            consultations: 'Consultations',
            shop: 'Shop',
            about: 'About',
            contact: 'Contact',
            back: 'Back to the For Her collection',
            collection: 'For Her Collection',
            videoHint: 'Play the video',
            typeLabel: 'Type',
            type: 'Energy bracelet',
            intentionLabel: 'Intention',
            availabilityLabel: 'Availability',
            availability: 'Available in the test store',
            deliveryLabel: 'Delivery',
            delivery: 'Calculated at checkout',
            specs: 'Exact composition, sizing, metal elements and care instructions are being documented and will be published before live payments are enabled.',
            add: 'Add to cart',
            ask: 'Ask on WhatsApp',
            secureTitle: 'Secure payment',
            secureText: 'Snipcart checkout connected to Stripe infrastructure, currently in test mode.',
            shippingTitle: 'International delivery',
            shippingText: 'The cost is shown at checkout according to parcel weight.',
            supportTitle: 'Direct assistance',
            supportText: 'You can request clarification before ordering via WhatsApp or Telegram.',
            footer: '© 2026 ENERGETICA · JELENA SHIPKO',
            message: 'Hello, Elena! I would like more details about the bracelet'
        },
        ru: {
            locale: 'ru-RU',
            home: 'Главная',
            consultations: 'Консультации',
            shop: 'Магазин',
            about: 'О нас',
            contact: 'Контакт',
            back: 'Назад к коллекции «Для неё»',
            collection: 'Коллекция «Для неё»',
            videoHint: 'Включить видео',
            typeLabel: 'Тип',
            type: 'Энергетический браслет',
            intentionLabel: 'Намерение',
            availabilityLabel: 'Доступность',
            availability: 'Доступен в тестовом магазине',
            deliveryLabel: 'Доставка',
            delivery: 'Рассчитывается при оформлении',
            specs: 'Точный состав, размер, металлические элементы и рекомендации по уходу документируются и будут опубликованы до включения реальных платежей.',
            add: 'В корзину',
            ask: 'Спросить в WhatsApp',
            secureTitle: 'Безопасная оплата',
            secureText: 'Оформление Snipcart подключено к инфраструктуре Stripe и сейчас работает в тестовом режиме.',
            shippingTitle: 'Международная доставка',
            shippingText: 'Стоимость отображается при оформлении в зависимости от веса посылки.',
            supportTitle: 'Прямая поддержка',
            supportText: 'До заказа можно задать вопросы через WhatsApp или Telegram.',
            footer: '© 2026 ENERGETICA · JELENA SHIPKO',
            message: 'Здравствуйте, Елена! Я хотел(а) бы узнать больше о браслете'
        },
        lv: {
            locale: 'lv-LV',
            home: 'Sākums',
            consultations: 'Konsultācijas',
            shop: 'Veikals',
            about: 'Par mums',
            contact: 'Kontakti',
            back: 'Atpakaļ uz kolekciju “Viņai”',
            collection: 'Kolekcija “Viņai”',
            videoHint: 'Atskaņot video',
            typeLabel: 'Veids',
            type: 'Enerģētiskā aproce',
            intentionLabel: 'Nodoms',
            availabilityLabel: 'Pieejamība',
            availability: 'Pieejama testa veikalā',
            deliveryLabel: 'Piegāde',
            delivery: 'Aprēķināta norēķinoties',
            specs: 'Precīzs sastāvs, izmērs, metāla elementi un kopšanas norādījumi tiek dokumentēti un tiks publicēti pirms reālo maksājumu aktivizēšanas.',
            add: 'Pievienot grozam',
            ask: 'Jautāt WhatsApp',
            secureTitle: 'Drošs maksājums',
            secureText: 'Snipcart norēķini ir savienoti ar Stripe infrastruktūru un pašlaik darbojas testa režīmā.',
            shippingTitle: 'Starptautiska piegāde',
            shippingText: 'Izmaksas tiek parādītas norēķinos atbilstoši sūtījuma svaram.',
            supportTitle: 'Tiešs atbalsts',
            supportText: 'Pirms pasūtīšanas vari uzdot jautājumus WhatsApp vai Telegram.',
            footer: '© 2026 ENERGETICA · JELENA SHIPKO',
            message: 'Labdien, Elena! Vēlos uzzināt vairāk par aproci'
        }
    };

    const product = products[productKey];
    if (!product) return;

    const flags = {
        ro: ['RO', 'https://flagcdn.com/w20/ro.png'],
        en: ['EN', 'https://flagcdn.com/w20/gb.png'],
        ru: ['RU', 'https://flagcdn.com/w20/ru.png'],
        lv: ['LV', 'https://flagcdn.com/w20/lv.png']
    };

    const byId = id => document.getElementById(id);
    const setText = (id, value) => {
        const element = byId(id);
        if (element) element.textContent = value;
    };

    function changeLanguage(language) {
        const languageUi = ui[language] || ui.ro;
        const productText = product.translations[language] || product.translations.ro;
        const [label, flag] = flags[language] || flags.ro;

        document.documentElement.lang = language;
        document.title = `${productText.name} | The Power Boutique`;
        byId('active-flag').src = flag;
        byId('active-flag').alt = label;
        setText('active-lang', label);
        byId('lang-list').classList.remove('show');

        setText('nav-home', languageUi.home);
        setText('nav-consultations', languageUi.consultations);
        setText('nav-shop', languageUi.shop);
        setText('nav-about', languageUi.about);
        setText('nav-contact', languageUi.contact);
        setText('back-label', languageUi.back);
        setText('collection-label', languageUi.collection);
        setText('video-hint', languageUi.videoHint);
        setText('product-title', productText.name);
        setText('product-tagline', productText.tagline);
        setText('product-description', productText.description);
        setText('type-label', languageUi.typeLabel);
        setText('type-value', languageUi.type);
        setText('intention-label', languageUi.intentionLabel);
        setText('intention-value', productText.intention);
        setText('availability-label', languageUi.availabilityLabel);
        setText('availability-value', languageUi.availability);
        setText('delivery-label', languageUi.deliveryLabel);
        setText('delivery-value', languageUi.delivery);
        setText('spec-notice', languageUi.specs);
        setText('add-label', languageUi.add);
        setText('ask-label', languageUi.ask);
        setText('secure-title', languageUi.secureTitle);
        setText('secure-text', languageUi.secureText);
        setText('shipping-title', languageUi.shippingTitle);
        setText('shipping-text', languageUi.shippingText);
        setText('support-title', languageUi.supportTitle);
        setText('support-text', languageUi.supportText);
        setText('about-title', productText.aboutTitle);
        setText('about-text', productText.about);
        setText('role-title', productText.roleTitle);
        setText('role-text', productText.role);
        setText('footer-copy', languageUi.footer);

        setText(
            'product-price',
            new Intl.NumberFormat(languageUi.locale, {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 0
            }).format(Number(product.price))
        );

        const video = byId('product-video');
        video.setAttribute('aria-label', `${languageUi.videoHint}: ${productText.name}`);

        const addButton = byId('add-to-cart');
        addButton.dataset.itemName = product.canonicalName;
        addButton.setAttribute('aria-label', `${languageUi.add}: ${productText.name}`);

        const message = `${languageUi.message} „${productText.name}”.`;
        byId('whatsapp-link').href = `https://wa.me/40730685087?text=${encodeURIComponent(message)}`;
    }

    const video = byId('product-video');
    video.src = product.video;
    video.poster = product.poster;

    const addButton = byId('add-to-cart');
    addButton.dataset.itemId = product.id;
    addButton.dataset.itemPrice = product.price;
    addButton.dataset.itemWeight = '100';
    addButton.dataset.itemUrl = '/shop-ea.html';
    addButton.dataset.itemImage = `/${product.poster}`;

    document.querySelectorAll('[data-lang]').forEach(button => {
        button.addEventListener('click', () => changeLanguage(button.dataset.lang));
    });

    byId('language-button').addEventListener('click', event => {
        event.stopPropagation();
        const list = byId('lang-list');
        const isOpen = list.classList.toggle('show');
        byId('language-button').setAttribute('aria-expanded', String(isOpen));
    });

    const menuButton = byId('menu-button');
    const navigation = byId('site-navigation');
    menuButton.addEventListener('click', () => {
        const isOpen = navigation.classList.toggle('active');
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen ? 'Închide meniul' : 'Deschide meniul');
        menuButton.innerHTML = isOpen
            ? '<i class="fas fa-times" aria-hidden="true"></i>'
            : '<i class="fas fa-bars" aria-hidden="true"></i>';
    });

    document.addEventListener('click', event => {
        if (!event.target.closest('.lang-dropdown')) {
            byId('lang-list').classList.remove('show');
            byId('language-button').setAttribute('aria-expanded', 'false');
        }
    });

    const cursor = byId('cursor-dot');
    if (cursor && window.matchMedia('(pointer: fine) and (min-width: 1025px)').matches) {
        document.addEventListener('pointermove', event => {
            cursor.style.left = `${event.clientX}px`;
            cursor.style.top = `${event.clientY}px`;
        });

        document.querySelectorAll('a, button, video').forEach(element => {
            element.addEventListener('pointerenter', () => cursor.classList.add('glow'));
            element.addEventListener('pointerleave', () => cursor.classList.remove('glow'));
        });
    }

    changeLanguage('ro');
})();
