(() => {
    const text = {
        ro: {
            listPrice: 'Preț de listă',
            priceOnRequest: 'Preț la cerere',
            materials: 'Materiale',
            intention: 'Intenție și acordaj individual',
            confirm: 'Disponibilitatea și prețul final se confirmă pe WhatsApp.',
            detailsOnRequest: 'Materialele și detaliile complete sunt disponibile la cerere.'
        },
        en: {
            listPrice: 'List price',
            priceOnRequest: 'Price on request',
            materials: 'Materials',
            intention: 'Intention and individual attunement',
            confirm: 'Availability and final price are confirmed on WhatsApp.',
            detailsOnRequest: 'Materials and full details are available on request.'
        },
        ru: {
            listPrice: 'Цена по каталогу',
            priceOnRequest: 'Цена по запросу',
            materials: 'Материалы',
            intention: 'Намерение и индивидуальная настройка',
            confirm: 'Наличие и окончательная цена подтверждаются в WhatsApp.',
            detailsOnRequest: 'Материалы и полное описание доступны по запросу.'
        },
        lv: {
            listPrice: 'Kataloga cena',
            priceOnRequest: 'Cena pēc pieprasījuma',
            materials: 'Materiāli',
            intention: 'Nodoms un individuāla noskaņošana',
            confirm: 'Pieejamība un gala cena tiek apstiprināta WhatsApp.',
            detailsOnRequest: 'Materiāli un pilns apraksts ir pieejami pēc pieprasījuma.'
        }
    };

    const intentions = {
        'energy-activation': {
            ro: 'Reper vizual pentru vitalitate, inițiativă și un nou început.',
            en: 'A visual reminder of vitality, initiative and a fresh start.',
            ru: 'Визуальный символ жизненной силы, инициативы и нового начала.',
            lv: 'Vizuāls simbols vitalitātei, iniciatīvai un jaunam sākumam.'
        },
        'inner-core-strength-women': {
            ro: 'Simbol al centrării, intuiției și încrederii în propriile alegeri.',
            en: 'A symbol of centredness, intuition and trust in one’s own choices.',
            ru: 'Символ внутреннего центра, интуиции и доверия собственному выбору.',
            lv: 'Simbols centrētībai, intuīcijai un uzticībai savām izvēlēm.'
        },
        'self-realization-women': {
            ro: 'Simbol al exprimării autentice și al urmării direcției personale.',
            en: 'A symbol of authentic expression and following one’s personal direction.',
            ru: 'Символ подлинного самовыражения и следования личному пути.',
            lv: 'Simbols autentiskai pašizpausmei un sava virziena izvēlei.'
        },
        'heart-wish-manifestation': {
            ro: 'Simbol al deschiderii inimii, autenticității și intențiilor personale.',
            en: 'A symbol of an open heart, authenticity and personal intentions.',
            ru: 'Символ открытого сердца, искренности и личных намерений.',
            lv: 'Simbols atvērtai sirdij, autentiskumam un personīgajiem nodomiem.'
        },
        'energy-balancing': {
            ro: 'Simbol al armoniei, clarității și ritmului interior.',
            en: 'A symbol of harmony, clarity and inner rhythm.',
            ru: 'Символ гармонии, ясности и внутреннего ритма.',
            lv: 'Simbols harmonijai, skaidrībai un iekšējam ritmam.'
        },
        'woman-cat': {
            ro: 'Simbol al eleganței instinctive, independenței și curajului.',
            en: 'A symbol of instinctive elegance, independence and courage.',
            ru: 'Символ интуитивной элегантности, независимости и смелости.',
            lv: 'Simbols instinktīvai elegancei, neatkarībai un drosmei.'
        },
        'cashmere-touch': {
            ro: 'Simbol al blândeții, calmului și comunicării fluide.',
            en: 'A symbol of gentleness, calm and flowing communication.',
            ru: 'Символ мягкости, спокойствия и свободного общения.',
            lv: 'Simbols maigumam, mieram un brīvai komunikācijai.'
        },
        'mothers-love-girls': {
            ro: 'Simbol al grijii, siguranței emoționale și legăturii dintre mamă și copil.',
            en: 'A symbol of care, emotional safety and the bond between mother and child.',
            ru: 'Символ заботы, эмоциональной безопасности и связи матери с ребёнком.',
            lv: 'Simbols rūpēm, emocionālai drošībai un mātes un bērna saiknei.'
        },
        'mothers-love-boys': {
            ro: 'Simbol al grijii, siguranței emoționale și legăturii dintre mamă și copil.',
            en: 'A symbol of care, emotional safety and the bond between mother and child.',
            ru: 'Символ заботы, эмоциональной безопасности и связи матери с ребёнком.',
            lv: 'Simbols rūpēm, emocionālai drošībai un mātes un bērna saiknei.'
        },
        'angel-frequency': {
            ro: 'Simbol al protecției, inspirației și unei perspective mai înalte.',
            en: 'A symbol of protection, inspiration and a higher perspective.',
            ru: 'Символ защиты, вдохновения и более высокой перспективы.',
            lv: 'Simbols aizsardzībai, iedvesmai un plašākam skatījumam.'
        },
        'antistress-men': {
            ro: 'Reper simbolic pentru calm, echilibru și pauză conștientă.',
            en: 'A symbolic reminder of calm, balance and a conscious pause.',
            ru: 'Символическое напоминание о спокойствии, равновесии и осознанной паузе.',
            lv: 'Simbolisks atgādinājums par mieru, līdzsvaru un apzinātu pauzi.'
        },
        'courage-authentic': {
            ro: 'Simbol al autenticității, curajului și asumării propriei voci.',
            en: 'A symbol of authenticity, courage and owning one’s voice.',
            ru: 'Символ подлинности, смелости и уверенного выражения своего голоса.',
            lv: 'Simbols autentiskumam, drosmei un savas balss apzināšanai.'
        },
        'self-realization-men': {
            ro: 'Simbol al direcției personale, responsabilității și exprimării autentice.',
            en: 'A symbol of personal direction, responsibility and authentic expression.',
            ru: 'Символ личного направления, ответственности и подлинного самовыражения.',
            lv: 'Simbols personīgajam virzienam, atbildībai un autentiskai pašizpausmei.'
        },
        'heart-opening': {
            ro: 'Simbol al empatiei, sincerității și disponibilității emoționale.',
            en: 'A symbol of empathy, sincerity and emotional openness.',
            ru: 'Символ эмпатии, искренности и эмоциональной открытости.',
            lv: 'Simbols empātijai, patiesumam un emocionālai atvērtībai.'
        },
        'lions-strength': {
            ro: 'Simbol al încrederii, stabilității și responsabilității.',
            en: 'A symbol of confidence, stability and responsibility.',
            ru: 'Символ уверенности, устойчивости и ответственности.',
            lv: 'Simbols pārliecībai, stabilitātei un atbildībai.'
        },
        'frequency-rising': {
            ro: 'Simbol al evoluției conștiente, perspectivei și aspirației personale.',
            en: 'A symbol of conscious growth, perspective and personal aspiration.',
            ru: 'Символ осознанного роста, перспективы и личного стремления.',
            lv: 'Simbols apzinātai izaugsmei, perspektīvai un personīgām tieksmēm.'
        },
        'charisma': {
            ro: 'Simbol al prezenței, încrederii și exprimării personale.',
            en: 'A symbol of presence, confidence and personal expression.',
            ru: 'Символ присутствия, уверенности и личного самовыражения.',
            lv: 'Simbols klātbūtnei, pārliecībai un personīgai pašizpausmei.'
        },
        'inner-core-strength-men': {
            ro: 'Simbol al stabilității, limitelor sănătoase și forței interioare.',
            en: 'A symbol of stability, healthy boundaries and inner strength.',
            ru: 'Символ устойчивости, здоровых границ и внутренней силы.',
            lv: 'Simbols stabilitātei, veselīgām robežām un iekšējam spēkam.'
        },
        'wish-realization-men': {
            ro: 'Reper simbolic pentru concentrare, intenție și acțiune consecventă.',
            en: 'A symbolic reminder of focus, intention and consistent action.',
            ru: 'Символическое напоминание о фокусе, намерении и последовательных действиях.',
            lv: 'Simbolisks atgādinājums par fokusu, nodomu un konsekventu rīcību.'
        }
    };

    const products = {
        women: [
            {
                id: 'energy-activation',
                price: 120,
                video: 'assets/videos/bracelets-2025/energy-activation.mp4',
                poster: 'assets/images/bracelets-2025/energy-activation.jpg',
                name: { ro: 'Activarea Energiei', en: 'Energy Activation', ru: 'Активация энергии', lv: 'Enerģijas aktivizācija' },
                summary: {
                    ro: 'O compoziție amplă de nouă minerale din colecția Conferința Puterii 2025.',
                    en: 'A rich nine-mineral composition from the 2025 Power Conference collection.',
                    ru: 'Богатая композиция из девяти минералов из коллекции Power Conference 2025.',
                    lv: 'Bagātīga deviņu minerālu kompozīcija no 2025. gada Spēka konferences kolekcijas.'
                },
                materials: {
                    ro: ['Coral', 'Carneol', 'Cacoxenit', 'Fluorit', 'Kianit', 'Lapis lazuli', 'Auralit', 'Ochi de tigru', 'Granat'],
                    en: ['Coral', 'Carnelian', 'Cacoxenite', 'Fluorite', 'Kyanite', 'Lapis lazuli', 'Auralite', "Tiger's eye", 'Garnet'],
                    ru: ['Коралл', 'Сердолик', 'Какоксенит', 'Флюорит', 'Кианит', 'Лазурит', 'Ауралит', 'Тигровый глаз', 'Гранат'],
                    lv: ['Korallis', 'Karneols', 'Kakoksenīts', 'Fluorīts', 'Kianīts', 'Lazurīts', 'Auralīts', 'Tīģeracs', 'Granāts']
                }
            },
            {
                id: 'inner-core-strength-women',
                price: 145,
                video: 'assets/videos/bracelets-2025/inner-core-strength-women.mp4',
                poster: 'assets/images/bracelets-2025/inner-core-strength-women.jpg',
                name: { ro: 'Forța Nucleului Interior', en: 'Inner Core Strength', ru: 'Сила внутреннего стержня', lv: 'Noturētu savu / Iekšējā kodola spēks' },
                summary: {
                    ro: 'Temă: încredere interioară, intuiție și păstrarea centrului propriu.',
                    en: 'Theme: inner confidence, intuition and staying centred in oneself.',
                    ru: 'Тема: внутренняя уверенность, интуиция и сохранение собственного центра.',
                    lv: 'Tēma: iekšējā pārliecība, intuīcija un sava centra noturēšana.'
                },
                materials: {
                    ro: ['Lapis lazuli', 'Citrin', 'Cristal de stâncă', 'Cristal austriac'],
                    en: ['Lapis lazuli', 'Citrine', 'Rock crystal', 'Austrian crystal'],
                    ru: ['Лазурит', 'Цитрин', 'Горный хрусталь', 'Австрийский кристалл'],
                    lv: ['Lazurīts', 'Citrīns', 'Kalnu kristāls', 'Austrijas kristāls']
                }
            },
            {
                id: 'self-realization-women',
                price: 155,
                video: 'assets/videos/bracelets-2025/self-realization-women.mp4',
                poster: 'assets/images/bracelets-2025/self-realization-women.jpg',
                name: { ro: 'Autorealizare', en: 'Self-Realization', ru: 'Самореализация', lv: 'Pašrealizācija' },
                summary: {
                    ro: 'Model feminin, disponibil cu accesorii aurii sau argintii.',
                    en: 'A feminine design available with gold- or silver-tone fittings.',
                    ru: 'Женская модель с фурнитурой золотого или серебряного цвета.',
                    lv: 'Sieviešu dizains ar zelta vai sudraba krāsas furnitūru.'
                }
            },
            {
                id: 'heart-wish-manifestation',
                price: 113,
                video: 'assets/videos/bracelets-2025/heart-wish-manifestation.mp4',
                poster: 'assets/images/bracelets-2025/heart-wish-manifestation.jpg',
                name: { ro: 'Manifestarea Dorințelor Inimii', en: "Heart's Wish Manifestation", ru: 'Манифестация желаний сердца', lv: 'Sirds vēlmju manifestācijas rota' },
                summary: {
                    ro: 'Temă: inimă, autenticitate și dorințe personale.',
                    en: 'Theme: the heart, authenticity and personal wishes.',
                    ru: 'Тема: сердце, подлинность и личные желания.',
                    lv: 'Tēma: sirds, autentiskums un personīgās vēlmes.'
                },
                materials: {
                    ro: ['Rubin în zoisit', 'Malachit', 'Kunzit', 'Peridot'],
                    en: ['Ruby zoisite', 'Malachite', 'Kunzite', 'Peridot'],
                    ru: ['Рубин в цоизите', 'Малахит', 'Кунцит', 'Перидот'],
                    lv: ['Rubīns coizītā', 'Malahīts', 'Kuncīts', 'Peridots']
                }
            },
            {
                id: 'energy-balancing',
                price: 77,
                video: 'assets/videos/bracelets-2025/energy-balancing.mp4',
                poster: 'assets/images/bracelets-2025/energy-balancing.jpg',
                name: { ro: 'Echilibrarea Energiilor', en: 'Energy Balancing', ru: 'Выравнивание энергий', lv: 'Enerģiju izlīdzināšanas rota' },
                summary: {
                    ro: 'O combinație luminoasă în tonuri delicate de lavandă.',
                    en: 'A luminous combination in delicate lavender tones.',
                    ru: 'Светлая композиция в нежных лавандовых оттенках.',
                    lv: 'Gaiša kompozīcija maigos lavandas toņos.'
                },
                materials: {
                    ro: ['Fluorit', 'Cuarț lavandă'],
                    en: ['Fluorite', 'Lavender quartz'],
                    ru: ['Флюорит', 'Лавандовый кварц'],
                    lv: ['Fluorīts', 'Lavandas kvarcs']
                }
            },
            {
                id: 'woman-cat',
                price: 125,
                video: 'assets/videos/bracelets-2025/woman-cat.mp4',
                poster: 'assets/images/bracelets-2025/woman-cat.jpg',
                name: { ro: 'Femeia-Pisică', en: 'Woman-Cat', ru: 'Женщина-Кошка', lv: 'Sieviete-Kaķis' },
                summary: {
                    ro: 'Un design feminin cu accente calde, aurii și verzi.',
                    en: 'A feminine design with warm gold and green accents.',
                    ru: 'Женственный дизайн с тёплыми золотистыми и зелёными акцентами.',
                    lv: 'Sievišķīgs dizains ar siltiem zelta un zaļiem akcentiem.'
                },
                materials: {
                    ro: ['Ochi de pisică', 'Ochi de tigru', 'Piatra soarelui', 'Malachit', 'Cristal austriac'],
                    en: ["Cat's eye", "Tiger's eye", 'Sunstone', 'Malachite', 'Austrian crystal'],
                    ru: ['Кошачий глаз', 'Тигровый глаз', 'Солнечный камень', 'Малахит', 'Австрийский кристалл'],
                    lv: ['Kaķa acs', 'Tīģeracs', 'Saules akmens', 'Malahīts', 'Austrijas kristāls']
                }
            },
            {
                id: 'cashmere-touch',
                price: 92,
                video: 'assets/videos/bracelets-2025/cashmere-touch.mp4',
                poster: 'assets/images/bracelets-2025/cashmere-touch.jpg',
                name: { ro: 'Atingere de Cașmir', en: 'Cashmere Touch', ru: 'Прикосновение кашемира', lv: 'Kašmira pieskāriens' },
                summary: {
                    ro: 'O compoziție delicată, aerată, în nuanțe naturale.',
                    en: 'A delicate, airy composition in natural tones.',
                    ru: 'Нежная, воздушная композиция в природных оттенках.',
                    lv: 'Maiga, gaisīga kompozīcija dabīgos toņos.'
                },
                materials: {
                    ro: ['Pegmatit', 'Acvamarin'],
                    en: ['Pegmatite', 'Aquamarine'],
                    ru: ['Пегматит', 'Аквамарин'],
                    lv: ['Pegmatīts', 'Akvamarīns']
                }
            },
            {
                id: 'mothers-love-girls',
                price: 57,
                video: 'assets/videos/bracelets-2025/mothers-love-girls.mp4',
                poster: 'assets/images/bracelets-2025/mothers-love-girls.jpg',
                name: { ro: 'Iubirea Mamei – pentru Fete', en: "Mother's Love – for Girls", ru: 'Материнская любовь – для девочек', lv: 'Mātes mīlestība – meitenēm' },
                summary: {
                    ro: 'Model creat pentru fete; mărimea se confirmă înainte de comandă.',
                    en: 'A design created for girls; sizing is confirmed before ordering.',
                    ru: 'Модель для девочек; размер уточняется перед заказом.',
                    lv: 'Dizains meitenēm; izmērs tiek precizēts pirms pasūtīšanas.'
                },
                materials: {
                    ro: ['Piatra lunii', 'Dreamstone'],
                    en: ['Moonstone', 'Dreamstone'],
                    ru: ['Лунный камень', 'Dreamstone'],
                    lv: ['Mēness akmens', 'Dreamstone']
                }
            },
            {
                id: 'mothers-love-boys',
                price: 57,
                video: 'assets/videos/bracelets-2025/mothers-love-boys.mp4',
                poster: 'assets/images/bracelets-2025/mothers-love-boys.jpg',
                name: { ro: 'Iubirea Mamei – pentru Băieți', en: "Mother's Love – for Boys", ru: 'Материнская любовь – для мальчиков', lv: 'Mātes mīlestība – zēniem' },
                summary: {
                    ro: 'Model creat pentru băieți; mărimea se confirmă înainte de comandă.',
                    en: 'A design created for boys; sizing is confirmed before ordering.',
                    ru: 'Модель для мальчиков; размер уточняется перед заказом.',
                    lv: 'Dizains zēniem; izmērs tiek precizēts pirms pasūtīšanas.'
                },
                materials: {
                    ro: ['Piatra lunii', 'Dreamstone'],
                    en: ['Moonstone', 'Dreamstone'],
                    ru: ['Лунный камень', 'Dreamstone'],
                    lv: ['Mēness akmens', 'Dreamstone']
                }
            },
            {
                id: 'angel-frequency',
                price: 350,
                video: 'assets/videos/bracelets-2025/angel-frequency.mp4',
                poster: 'assets/images/bracelets-2025/angel-frequency.jpg',
                name: { ro: 'Angel Frequency', en: 'Angel Frequency', ru: 'Angel Frequency', lv: 'Angel Frequency' },
                summary: {
                    ro: 'Piesă în ediție limitată din colecția WOW.',
                    en: 'A limited-edition piece from the WOW collection.',
                    ru: 'Лимитированное изделие из коллекции WOW.',
                    lv: 'Ierobežota izdevuma rota no WOW kolekcijas.'
                }
            }
        ],
        men: [
            {
                id: 'antistress-men',
                price: 90,
                video: 'assets/videos/ANTISTRESS.mp4',
                poster: 'assets/images/video-posters/antistress.webp',
                name: { ro: 'Echilibru Antistres', en: 'Antistress Balance', ru: 'Антистрессовый баланс', lv: 'Antistress' },
                summary: {
                    ro: 'Design masculin centrat pe calm și echilibru.',
                    en: 'A masculine design centred on calm and balance.',
                    ru: 'Мужской дизайн, посвящённый спокойствию и равновесию.',
                    lv: 'Vīriešu dizains mieram un līdzsvaram.'
                },
                materials: {
                    ro: ['Howlit', 'Obsidian', 'Ametist'],
                    en: ['Howlite', 'Obsidian', 'Amethyst'],
                    ru: ['Говлит', 'Обсидиан', 'Аметист'],
                    lv: ['Hovlīts', 'Obsidiāns', 'Ametists']
                }
            },
            {
                id: 'courage-authentic',
                price: 130,
                video: 'assets/videos/bracelets-2025/courage-authentic.mp4',
                poster: 'assets/images/bracelets-2025/courage-authentic.jpg',
                name: { ro: 'Curajul de a Fi Autentic', en: 'Courage to Be Authentic', ru: 'Смелость быть собой', lv: 'Drosme būt īstam' },
                summary: {
                    ro: 'O compoziție masculină în tonuri profunde, construită în jurul autenticității.',
                    en: 'A masculine composition in deep tones, built around authenticity.',
                    ru: 'Мужская композиция глубоких оттенков, посвящённая подлинности.',
                    lv: 'Vīrišķīga kompozīcija dziļos toņos, veidota ap autentiskuma tēmu.'
                },
                materials: {
                    ro: ['Hematit', 'Ametist', 'Obsidian', 'Cristal de stâncă'],
                    en: ['Hematite', 'Amethyst', 'Obsidian', 'Rock crystal'],
                    ru: ['Гематит', 'Аметист', 'Обсидиан', 'Горный хрусталь'],
                    lv: ['Hematīts', 'Ametists', 'Obsidiāns', 'Kalnu kristāls']
                }
            },
            {
                id: 'self-realization-men',
                price: 155,
                video: 'assets/videos/bracelets-2025/self-realization-men.mp4',
                poster: 'assets/images/bracelets-2025/self-realization-men.jpg',
                name: { ro: 'Autorealizare', en: 'Self-Realization', ru: 'Самореализация', lv: 'Pašrealizācija' },
                summary: {
                    ro: 'Model masculin din colecția Conferința Puterii 2025.',
                    en: 'A masculine design from the 2025 Power Conference collection.',
                    ru: 'Мужская модель из коллекции Power Conference 2025.',
                    lv: 'Vīriešu dizains no 2025. gada Spēka konferences kolekcijas.'
                }
            },
            {
                id: 'heart-opening',
                price: 113,
                video: 'assets/videos/bracelets-2025/heart-opening.mp4',
                poster: 'assets/images/bracelets-2025/heart-opening.jpg',
                name: { ro: 'Deschiderea Inimii', en: 'Heart Opening', ru: 'Открытие сердца', lv: 'Sirds atvēršana' },
                summary: {
                    ro: 'O compoziție mixtă de opt minerale în tonuri naturale.',
                    en: 'An eight-mineral composition in natural tones.',
                    ru: 'Композиция из восьми минералов в природных оттенках.',
                    lv: 'Astoņu minerālu kompozīcija dabīgos toņos.'
                },
                materials: {
                    ro: ['Cuarț fumuriu', 'Cuarț roz', 'Ametist', 'Cristal de stâncă', 'Citrin', 'Unakit', 'Howlit', 'Cuarț rutilat'],
                    en: ['Smoky quartz', 'Rose quartz', 'Amethyst', 'Rock crystal', 'Citrine', 'Unakite', 'Howlite', 'Rutilated quartz'],
                    ru: ['Дымчатый кварц', 'Розовый кварц', 'Аметист', 'Горный хрусталь', 'Цитрин', 'Унакит', 'Говлит', 'Рутиловый кварц'],
                    lv: ['Dūmu kvarcs', 'Rozā kvarcs', 'Ametists', 'Kalnu kristāls', 'Citrīns', 'Unakīts', 'Hovlīts', 'Rutilēts kvarcs']
                }
            },
            {
                id: 'lions-strength',
                price: 150,
                video: 'assets/videos/bracelets-2025/lions-strength.mp4',
                poster: 'assets/images/bracelets-2025/lions-strength.jpg',
                name: { ro: 'Forța Leului', en: "Lion's Strength", ru: 'Сила льва', lv: 'Lauvas spēks' },
                summary: {
                    ro: 'Temă: încredere, stabilitate și forță interioară.',
                    en: 'Theme: confidence, stability and inner strength.',
                    ru: 'Тема: уверенность, устойчивость и внутренняя сила.',
                    lv: 'Tēma: pārliecība, stabilitāte un iekšējais spēks.'
                }
            },
            {
                id: 'frequency-rising',
                price: 87,
                video: 'assets/videos/bracelets-2025/frequency-rising.mp4',
                poster: 'assets/images/bracelets-2025/frequency-rising.jpg',
                name: { ro: 'Ridicarea Frecvenței', en: 'Frequency Rising', ru: 'Повышение частоты', lv: 'Frekvences paaugstināšanai' },
                summary: {
                    ro: 'Model masculin disponibil la comandă după confirmare.',
                    en: 'A masculine design available to order after confirmation.',
                    ru: 'Мужская модель доступна к заказу после подтверждения.',
                    lv: 'Vīriešu dizains pieejams pasūtīšanai pēc apstiprinājuma.'
                }
            },
            {
                id: 'charisma',
                price: 89,
                video: 'assets/videos/bracelets-2025/charisma.mp4',
                poster: 'assets/images/bracelets-2025/charisma.jpg',
                name: { ro: 'Carismă', en: 'Charisma', ru: 'Харизма', lv: 'Harizmas rota' },
                summary: {
                    ro: 'Model masculin cu prezență vizuală puternică și finisaj elegant.',
                    en: 'A masculine design with strong visual presence and an elegant finish.',
                    ru: 'Мужская модель с выразительным обликом и элегантной отделкой.',
                    lv: 'Vīriešu dizains ar izteiksmīgu vizuālo klātbūtni un elegantu apdari.'
                }
            },
            {
                id: 'inner-core-strength-men',
                price: 170,
                video: 'assets/videos/bracelets-2025/inner-core-strength-men.mp4',
                poster: 'assets/images/bracelets-2025/inner-core-strength-men.jpg',
                name: { ro: 'Forța Nucleului Interior', en: 'Inner Core Strength', ru: 'Сила внутреннего стержня', lv: 'Iekšējā kodola spēks' },
                summary: {
                    ro: 'Model masculin din colecția Conferința Puterii 2025.',
                    en: 'A masculine design from the 2025 Power Conference collection.',
                    ru: 'Мужская модель из коллекции Power Conference 2025.',
                    lv: 'Vīriešu dizains no 2025. gada Spēka konferences kolekcijas.'
                }
            },
            {
                id: 'wish-realization-men',
                price: 89,
                video: 'assets/videos/bracelets-2025/wish-realization-men.mp4',
                poster: 'assets/images/bracelets-2025/wish-realization-men.jpg',
                name: { ro: 'Realizarea Dorințelor', en: 'Wish Realization', ru: 'Исполнение желаний', lv: 'Vēlmju realizēšanas rota' },
                summary: {
                    ro: 'O combinație masculină, contrastantă, din trei materiale.',
                    en: 'A contrasting masculine combination of three materials.',
                    ru: 'Контрастная мужская композиция из трёх материалов.',
                    lv: 'Kontrastaina vīriešu kompozīcija no trim materiāliem.'
                },
                materials: {
                    ro: ['Malachit', 'Howlit', 'Lavă neagră'],
                    en: ['Malachite', 'Howlite', 'Black lava'],
                    ru: ['Малахит', 'Говлит', 'Чёрная лава'],
                    lv: ['Malahīts', 'Hovlīts', 'Melna lava']
                }
            }
        ]
    };

    function localize(product, lang) {
        const locale = text[lang] ? lang : 'ro';
        const materials = product.materials?.[locale] || [];
        const hasPrice = Number.isFinite(product.price);

        return {
            id: product.id,
            n: product.name[locale] || product.name.ro,
            pDisplay: hasPrice ? `${product.price}€` : text[locale].priceOnRequest,
            pVal: hasPrice ? product.price.toFixed(2) : '',
            v: product.video,
            poster: product.poster,
            summary: product.summary?.[locale] || text[locale].detailsOnRequest,
            materials,
            materialsLabel: text[locale].materials,
            intention: product.intention?.[locale] || intentions[product.id]?.[locale] || '',
            intentionLabel: text[locale].intention,
            priceLabel: hasPrice ? text[locale].listPrice : '',
            availabilityNote: text[locale].confirm,
            isCart: Boolean(product.isCart && hasPrice),
            isCatalogItem: true
        };
    }

    window.BraceletCatalog = {
        getItems(collection, lang) {
            const extraProducts = window.BraceletCatalogExtra?.[collection] || [];
            return [...(products[collection] || []), ...extraProducts]
                .map(product => localize(product, lang));
        }
    };
})();
