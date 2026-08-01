(() => {
    const media = id => ({
        video: `assets/videos/bracelets-2025/${id}.mp4`,
        poster: `assets/images/bracelets-2025/${id}.jpg`
    });

    const chakraMaterials = {
        1: {
            ro: ['Ochi de tigru', 'Granat', 'Turmalină pepene', 'Lavă neagră', 'Cristal austriac'],
            en: ["Tiger's eye", 'Garnet', 'Watermelon tourmaline', 'Black lava', 'Austrian crystal'],
            ru: ['Тигровый глаз', 'Гранат', 'Арбузный турмалин', 'Чёрная лава', 'Австрийский кристалл'],
            lv: ['Tīģeracs', 'Granāts', 'Arbūza turmalīns', 'Melna lava', 'Austrijas kristāls']
        },
        2: {
            ro: ['Ochi de pisică', 'Hematit', 'Carneol', 'Cristal austriac'],
            en: ["Cat's eye", 'Hematite', 'Carnelian', 'Austrian crystal'],
            ru: ['Кошачий глаз', 'Гематит', 'Сердолик', 'Австрийский кристалл'],
            lv: ['Kaķa acs', 'Hematīts', 'Karneols', 'Austrijas kristāls']
        },
        3: {
            ro: ['Pirită', 'Chihlimbar', 'Citrin', 'Cuarț rutilat', 'Cristal austriac'],
            en: ['Pyrite', 'Amber', 'Citrine', 'Rutilated quartz', 'Austrian crystal'],
            ru: ['Пирит', 'Янтарь', 'Цитрин', 'Рутиловый кварц', 'Австрийский кристалл'],
            lv: ['Pirīts', 'Dzintars', 'Citrīns', 'Rutilēts kvarcs', 'Austrijas kristāls']
        },
        4: {
            ro: ['Smarald', 'Ochi de tigru', 'Piatra lunii', 'Cristal de stâncă', 'Angelită', 'Cristal austriac'],
            en: ['Emerald', "Tiger's eye", 'Moonstone', 'Rock crystal', 'Angelite', 'Austrian crystal'],
            ru: ['Изумруд', 'Тигровый глаз', 'Лунный камень', 'Горный хрусталь', 'Ангелит', 'Австрийский кристалл'],
            lv: ['Smaragds', 'Tīģeracs', 'Mēness akmens', 'Kalnu kristāls', 'Angelīts', 'Austrijas kristāls']
        },
        5: {
            ro: ['Agat dantelat', 'Perlă', 'Lapis lazuli', 'Cristal austriac'],
            en: ['Lace agate', 'Pearl', 'Lapis lazuli', 'Austrian crystal'],
            ru: ['Кружевной агат', 'Жемчуг', 'Лазурит', 'Австрийский кристалл'],
            lv: ['Mežģīņu ahāts', 'Pērle', 'Lazurīts', 'Austrijas kristāls']
        },
        6: {
            ro: ['Ochi de pisică', 'Lapis lazuli', 'Cristal austriac'],
            en: ["Cat's eye", 'Lapis lazuli', 'Austrian crystal'],
            ru: ['Кошачий глаз', 'Лазурит', 'Австрийский кристалл'],
            lv: ['Kaķa acs', 'Lazurīts', 'Austrijas kristāls']
        },
        7: {
            ro: ['Lepidolit', 'Angelită', 'Cristal austriac'],
            en: ['Lepidolite', 'Angelite', 'Austrian crystal'],
            ru: ['Лепидолит', 'Ангелит', 'Австрийский кристалл'],
            lv: ['Lepidolīts', 'Eņģeļakmens', 'Austrijas kristāls']
        }
    };

    const chakraPrices = { 1: 130, 2: 130, 3: 135, 4: 135, 5: 145, 6: 145, 7: 222 };

    const chakraProducts = Object.keys(chakraPrices).map(value => {
        const number = Number(value);
        const id = `chakra-${number}-harmony`;
        return {
            id,
            price: chakraPrices[number],
            ...media(id),
            name: {
                ro: `Curățarea și armonizarea chakrei ${number}`,
                en: `Chakra ${number} Cleansing and Harmonization`,
                ru: `Очищение и гармонизация ${number}-й чакры`,
                lv: `${number}. čakras attīrīšana un harmonizācija`
            },
            summary: {
                ro: 'Model din seria celor șapte chakre, prezentat la Conferința Puterii 2025.',
                en: 'A design from the seven-chakra series presented at the 2025 Power Conference.',
                ru: 'Модель из серии семи чакр, представленная на Power Conference 2025.',
                lv: 'Modelis no septiņu čakru sērijas, kas prezentēta 2025. gada Spēka konferencē.'
            },
            materials: chakraMaterials[number],
            intention: {
                ro: `Reper simbolic pentru atenție, echilibru și armonie interioară în tema chakrei ${number}.`,
                en: `A symbolic reminder of attention, balance and inner harmony associated with chakra ${number}.`,
                ru: `Символическое напоминание о внимании, равновесии и внутренней гармонии в теме ${number}-й чакры.`,
                lv: `Simbolisks atgādinājums par uzmanību, līdzsvaru un iekšējo harmoniju ${number}. čakras tēmā.`
            }
        };
    });

    const lifePassion = {
        id: 'life-passion',
        price: 135,
        ...media('life-passion'),
        name: { ro: 'Pasiunea Vieții', en: 'Passion for Life', ru: 'Страсть к жизни', lv: 'Dzīves kaisle' },
        summary: {
            ro: 'Model unisex din obsidian, ochi de tigru, coral și cristal austriac.',
            en: "A unisex design combining obsidian, tiger's eye, coral and Austrian crystal.",
            ru: 'Унисекс-модель из обсидиана, тигрового глаза, коралла и австрийского кристалла.',
            lv: 'Unisex rota no obsidiāna, tīģeracs, koraļļa un Austrijas kristāla.'
        },
        materials: {
            ro: ['Obsidian', 'Ochi de tigru', 'Coral', 'Cristal austriac'],
            en: ['Obsidian', "Tiger's eye", 'Coral', 'Austrian crystal'],
            ru: ['Обсидиан', 'Тигровый глаз', 'Коралл', 'Австрийский кристалл'],
            lv: ['Obsidiāns', 'Tīģeracs', 'Korallis', 'Austrijas kristāls']
        },
        intention: {
            ro: 'Simbol al entuziasmului, vitalității și bucuriei de a trăi conștient.',
            en: 'A symbol of enthusiasm, vitality and the joy of living consciously.',
            ru: 'Символ энтузиазма, жизненной силы и радости осознанной жизни.',
            lv: 'Simbols entuziasmam, vitalitātei un apzinātam dzīves priekam.'
        }
    };

    const women = [
        ...chakraProducts,
        {
            id: 'youth-force-activation',
            price: 142,
            ...media('youth-force-activation'),
            name: { ro: 'Activarea Forței Tinereții', en: 'Youth Force Activation', ru: 'Активация силы молодости', lv: 'Jaunības spēka aktivizēšana' },
            summary: {
                ro: 'O compoziție luminoasă din lepidolit, peridot, cuarț lavandă și cristal austriac.',
                en: 'A luminous composition of lepidolite, peridot, lavender quartz and Austrian crystal.',
                ru: 'Светлая композиция из лепидолита, перидота, лавандового кварца и австрийского кристалла.',
                lv: 'Gaiša kompozīcija no lepidolīta, peridota, lavandas kvarca un Austrijas kristāla.'
            },
            materials: {
                ro: ['Lepidolit', 'Peridot', 'Cuarț lavandă', 'Cristal austriac'],
                en: ['Lepidolite', 'Peridot', 'Lavender quartz', 'Austrian crystal'],
                ru: ['Лепидолит', 'Перидот', 'Лавандовый кварц', 'Австрийский кристалл'],
                lv: ['Lepidolīts', 'Peridots', 'Lavandas kvarcs', 'Austrijas kristāls']
            },
            intention: {
                ro: 'Simbol al prospețimii, energiei creatoare și deschiderii către reînnoire.',
                en: 'A symbol of freshness, creative energy and openness to renewal.',
                ru: 'Символ свежести, творческой энергии и открытости обновлению.',
                lv: 'Simbols svaigumam, radošai enerģijai un atvērtībai atjaunotnei.'
            }
        },
        {
            id: 'miracle-new-era-woman',
            price: null,
            ...media('miracle-new-era-woman'),
            name: { ro: 'Brățara Miracolelor — Femeia Noii Ere', en: 'Miracle Bracelet — New Era Woman', ru: 'Браслет чудес — Женщина Новой Эры', lv: 'Brīnumu rota — Jaunā laikmeta sieviete' },
            summary: {
                ro: 'Piesă feminină din colecția Conferința Puterii 2025; compoziția completă se confirmă la cerere.',
                en: 'A feminine piece from the 2025 Power Conference collection; the complete composition is confirmed on request.',
                ru: 'Женское украшение из коллекции Power Conference 2025; полный состав уточняется по запросу.',
                lv: 'Sieviešu rota no 2025. gada Spēka konferences kolekcijas; pilns sastāvs tiek precizēts pēc pieprasījuma.'
            },
            intention: {
                ro: 'Simbol al deschiderii către posibilități, inspirație și începuturi noi.',
                en: 'A symbol of openness to possibility, inspiration and new beginnings.',
                ru: 'Символ открытости возможностям, вдохновению и новым начинаниям.',
                lv: 'Simbols atvērtībai iespējām, iedvesmai un jauniem sākumiem.'
            }
        },
        lifePassion,
        {
            id: 'energy-cleansing-love',
            price: 120,
            ...media('energy-cleansing-love'),
            name: { ro: 'Purificarea Energiei și Deschiderea către Iubire', en: 'Energy Cleansing and Love-Filling Bracelet', ru: 'Очищение энергии и наполнение любовью', lv: 'Enerģijas attīroša un mīlestības piepildošā rota' },
            summary: {
                ro: 'Compoziție delicată din citrin, selenit și cristal austriac.',
                en: 'A delicate composition of citrine, selenite and Austrian crystal.',
                ru: 'Нежная композиция из цитрина, селенита и австрийского кристалла.',
                lv: 'Maiga kompozīcija no citrīna, selenīta un Austrijas kristāla.'
            },
            materials: {
                ro: ['Citrin', 'Selenit', 'Cristal austriac'], en: ['Citrine', 'Selenite', 'Austrian crystal'],
                ru: ['Цитрин', 'Селенит', 'Австрийский кристалл'], lv: ['Citrīns', 'Selenīts', 'Austrijas kristāls']
            },
            intention: {
                ro: 'Simbol al clarității, blândeții și deschiderii emoționale.', en: 'A symbol of clarity, gentleness and emotional openness.',
                ru: 'Символ ясности, мягкости и эмоциональной открытости.', lv: 'Simbols skaidrībai, maigumam un emocionālai atvērtībai.'
            }
        },
        {
            id: 'light-cocoon-protection',
            price: 82,
            ...media('light-cocoon-protection'),
            name: { ro: 'Cocon de Lumină — Protecție', en: 'Cocoon of Light — Protection', ru: 'Кокон света — Защита', lv: 'Gaismas kokons — Aizsardzība' },
            summary: {
                ro: 'Design rafinat din perlă și fluorit.', en: 'A refined design combining pearl and fluorite.',
                ru: 'Изысканное сочетание жемчуга и флюорита.', lv: 'Izsmalcināts pērles un fluorīta savienojums.'
            },
            materials: { ro: ['Perlă', 'Fluorit'], en: ['Pearl', 'Fluorite'], ru: ['Жемчуг', 'Флюорит'], lv: ['Pērle', 'Fluorīts'] },
            intention: {
                ro: 'Simbol al siguranței interioare, calmului și limitelor personale.', en: 'A symbol of inner safety, calm and personal boundaries.',
                ru: 'Символ внутренней защищённости, спокойствия и личных границ.', lv: 'Simbols iekšējai drošībai, mieram un personīgajām robežām.'
            }
        },
        {
            id: 'cosmic-heart-opening',
            price: 360,
            ...media('cosmic-heart-opening'),
            name: { ro: 'Deschiderea Inimii Cosmice', en: 'Cosmic Heart Opening', ru: 'Открытие космического сердца', lv: 'Kosmiskās sirds atvēršana' },
            summary: {
                ro: 'Piesă premium din azeztulit, fluorit și cristal austriac.', en: 'A premium piece made with azeztulite, fluorite and Austrian crystal.',
                ru: 'Премиальное украшение из азезтулита, флюорита и австрийского кристалла.', lv: 'Premium klases rota no azeztulīta, fluorīta un Austrijas kristāla.'
            },
            materials: {
                ro: ['Azeztulit', 'Fluorit', 'Cristal austriac'], en: ['Azeztulite', 'Fluorite', 'Austrian crystal'],
                ru: ['Азезтулит', 'Флюорит', 'Австрийский кристалл'], lv: ['Azeztulīts', 'Fluorīts', 'Austrijas kristāls']
            },
            intention: {
                ro: 'Simbol al empatiei, deschiderii și unei perspective mai ample.', en: 'A symbol of empathy, openness and a broader perspective.',
                ru: 'Символ эмпатии, открытости и более широкого взгляда.', lv: 'Simbols empātijai, atvērtībai un plašākam skatījumam.'
            }
        },
        {
            id: 'wellbeing-bracelet',
            price: 250,
            ...media('wellbeing-bracelet'),
            name: { ro: 'Brățara Bunăstării', en: 'Wellbeing Bracelet', ru: 'Браслет благополучия', lv: 'Labklājības rota' },
            summary: {
                ro: 'Compoziție bogată din nouă minerale, cu accente verzi, aurii și violete.', en: 'A rich nine-mineral composition with green, golden and violet accents.',
                ru: 'Богатая композиция из девяти минералов с зелёными, золотистыми и фиолетовыми акцентами.', lv: 'Bagātīga deviņu minerālu kompozīcija ar zaļiem, zeltainiem un violetiem akcentiem.'
            },
            materials: {
                ro: ['Ametist', 'Moldavit', 'Ochi de tigru', 'Hematit', 'Fluorit', 'Pirită', 'Malachit', 'Citrin', 'Cristal austriac'],
                en: ['Amethyst', 'Moldavite', "Tiger's eye", 'Hematite', 'Fluorite', 'Pyrite', 'Malachite', 'Citrine', 'Austrian crystal'],
                ru: ['Аметист', 'Молдавит', 'Тигровый глаз', 'Гематит', 'Флюорит', 'Пирит', 'Малахит', 'Цитрин', 'Австрийский кристалл'],
                lv: ['Ametists', 'Moldovīts', 'Tīģeracs', 'Hematīts', 'Fluorīts', 'Pirīts', 'Malahīts', 'Citrīns', 'Austrijas kristāls']
            },
            intention: {
                ro: 'Simbol al abundenței, echilibrului și încrederii în propriul drum.', en: "A symbol of abundance, balance and confidence in one's path.",
                ru: 'Символ изобилия, равновесия и уверенности в своём пути.', lv: 'Simbols pārpilnībai, līdzsvaram un pārliecībai par savu ceļu.'
            }
        },
        {
            id: 'lemon-queen',
            price: 200,
            ...media('lemon-queen'),
            name: { ro: 'Lemon Queen', en: 'Lemon Queen', ru: 'Lemon Queen', lv: 'Lemon Queen' },
            summary: {
                ro: 'Compoziție luminoasă în tonuri calde, realizată din șapte materiale.', en: 'A luminous composition in warm tones, made from seven materials.',
                ru: 'Светлая композиция в тёплых тонах из семи материалов.', lv: 'Gaiša kompozīcija siltos toņos no septiņiem materiāliem.'
            },
            materials: {
                ro: ['Perlă', 'Ochi de tigru', 'Ochi de pisică', 'Citrin', 'Peridot', 'Lavă neagră', 'Hematit'],
                en: ['Pearl', "Tiger's eye", "Cat's eye", 'Citrine', 'Peridot', 'Black lava', 'Hematite'],
                ru: ['Жемчуг', 'Тигровый глаз', 'Кошачий глаз', 'Цитрин', 'Перидот', 'Чёрная лава', 'Гематит'],
                lv: ['Pērle', 'Tīģeracs', 'Kaķa acs', 'Citrīns', 'Peridots', 'Melna lava', 'Hematīts']
            },
            intention: {
                ro: 'Simbol al luminozității, optimismului și bucuriei personale.', en: 'A symbol of brightness, optimism and personal joy.',
                ru: 'Символ света, оптимизма и личной радости.', lv: 'Simbols gaišumam, optimismam un personīgajam priekam.'
            }
        },
        {
            id: 'abundance-financial-channels',
            price: null,
            ...media('abundance-financial-channels'),
            name: { ro: 'Brățara Abundenței — Deschiderea Canalelor Financiare', en: 'Abundance Bracelet — Opening Financial Channels', ru: 'Браслет изобилия — Открытие финансовых каналов', lv: 'Pārpilnības rota — Finansiālo kanālu atvēršanai' },
            summary: {
                ro: 'Compoziție în verde și auriu din malachit, citrin și cristal austriac.', en: 'A green-and-gold composition of malachite, citrine and Austrian crystal.',
                ru: 'Зелёно-золотистая композиция из малахита, цитрина и австрийского кристалла.', lv: 'Zaļi zeltaina kompozīcija no malahīta, citrīna un Austrijas kristāla.'
            },
            materials: {
                ro: ['Malachit', 'Citrin', 'Cristal austriac'], en: ['Malachite', 'Citrine', 'Austrian crystal'],
                ru: ['Малахит', 'Цитрин', 'Австрийский кристалл'], lv: ['Malahīts', 'Citrīns', 'Austrijas kristāls']
            },
            intention: {
                ro: 'Simbol al concentrării, prosperității și acțiunii responsabile.', en: 'A symbol of focus, prosperity and responsible action.',
                ru: 'Символ сосредоточенности, процветания и ответственных действий.', lv: 'Simbols fokusam, labklājībai un atbildīgai rīcībai.'
            }
        },
        {
            id: 'femininity-splendor',
            price: 120,
            ...media('femininity-splendor'),
            name: { ro: 'Splendoarea Feminității', en: 'The Splendour of Femininity', ru: 'Великолепие женственности', lv: 'Sievišķības greznums' },
            summary: {
                ro: 'Design feminin și delicat din perlă și piatra lunii.', en: 'A delicate feminine design combining pearl and moonstone.',
                ru: 'Нежный женственный дизайн из жемчуга и лунного камня.', lv: 'Maigs, sievišķīgs dizains no pērles un mēness akmens.'
            },
            materials: { ro: ['Perlă', 'Piatra lunii'], en: ['Pearl', 'Moonstone'], ru: ['Жемчуг', 'Лунный камень'], lv: ['Pērle', 'Mēness akmens'] },
            intention: {
                ro: 'Simbol al eleganței, blândeții și încrederii feminine.', en: 'A symbol of elegance, gentleness and feminine confidence.',
                ru: 'Символ элегантности, мягкости и женской уверенности.', lv: 'Simbols elegancei, maigumam un sievišķīgai pārliecībai.'
            }
        },
        {
            id: 'clarity',
            price: 96,
            ...media('clarity'),
            name: { ro: 'Claritate', en: 'Clarity', ru: 'Ясность', lv: 'Skaidrība' },
            summary: {
                ro: 'Design transparent și luminos din cristal de stâncă și cristal austriac.', en: 'A clear, luminous design combining rock crystal and Austrian crystal.',
                ru: 'Прозрачный светлый дизайн из горного хрусталя и австрийского кристалла.', lv: 'Dzidrs, gaišs dizains no kalnu kristāla un Austrijas kristāla.'
            },
            materials: { ro: ['Cristal de stâncă', 'Cristal austriac'], en: ['Rock crystal', 'Austrian crystal'], ru: ['Горный хрусталь', 'Австрийский кристалл'], lv: ['Kalnu kristāls', 'Austrijas kristāls'] },
            intention: {
                ro: 'Simbol al clarității, concentrării și prezenței conștiente.', en: 'A symbol of clarity, focus and conscious presence.',
                ru: 'Символ ясности, сосредоточенности и осознанного присутствия.', lv: 'Simbols skaidrībai, fokusam un apzinātai klātbūtnei.'
            }
        },
        {
            id: 'butterfly-flight',
            price: 88,
            ...media('butterfly-flight'),
            name: { ro: 'Zborul Fluturelui — Eliberarea Vechilor Energii', en: 'Butterfly Flight — Letting Go of Old Energies', ru: 'Полёт бабочки — Освобождение от старых энергий', lv: 'Taureņa lidojums — Veco enerģiju atlaišana' },
            summary: {
                ro: 'Compoziție delicată din jadeit, angelită și cristal austriac.', en: 'A delicate composition of jadeite, angelite and Austrian crystal.',
                ru: 'Нежная композиция из жадеита, ангелита и австрийского кристалла.', lv: 'Maiga kompozīcija no žadeīta, angelīta un Austrijas kristāla.'
            },
            materials: {
                ro: ['Jadeit', 'Angelită', 'Cristal austriac'], en: ['Jadeite', 'Angelite', 'Austrian crystal'],
                ru: ['Жадеит', 'Ангелит', 'Австрийский кристалл'], lv: ['Žadeīts', 'Angelīts', 'Austrijas kristāls']
            },
            intention: {
                ro: 'Simbol al transformării, eliberării și începuturilor noi.', en: 'A symbol of transformation, release and new beginnings.',
                ru: 'Символ трансформации, освобождения и новых начинаний.', lv: 'Simbols transformācijai, atlaišanai un jauniem sākumiem.'
            }
        },
        {
            id: 'earth-and-cosmos',
            price: 190,
            ...media('earth-and-cosmos'),
            name: { ro: 'Pământ și Cosmos', en: 'Earth and Cosmos', ru: 'Земля и Космос', lv: 'Zeme un Kosmoss' },
            summary: {
                ro: 'Compoziție contrastantă din opt materiale, în tonuri terestre și luminoase.', en: 'A contrasting eight-material composition in earthy and luminous tones.',
                ru: 'Контрастная композиция из восьми материалов в земных и светлых тонах.', lv: 'Kontrastaina astoņu materiālu kompozīcija zemes un gaišos toņos.'
            },
            materials: {
                ro: ['Ochi de tigru', 'Morion', 'Fluorit', 'Obsidian', 'Turmalină', 'Selenit', 'Cristal de stâncă', 'Cristal austriac'],
                en: ["Tiger's eye", 'Morion', 'Fluorite', 'Obsidian', 'Tourmaline', 'Selenite', 'Rock crystal', 'Austrian crystal'],
                ru: ['Тигровый глаз', 'Морион', 'Флюорит', 'Обсидиан', 'Турмалин', 'Селенит', 'Горный хрусталь', 'Австрийский кристалл'],
                lv: ['Tīģeracs', 'Morions', 'Fluorīts', 'Obsidiāns', 'Turmalīns', 'Selenīts', 'Kalnu kristāls', 'Austrijas kristāls']
            },
            intention: {
                ro: 'Simbol al stabilității, perspectivei și legăturii dintre concret și aspirație.', en: 'A symbol of stability, perspective and the connection between the tangible and aspiration.',
                ru: 'Символ устойчивости, перспективы и связи между земным и устремлением.', lv: 'Simbols stabilitātei, perspektīvai un saiknei starp taustāmo un tieksmi.'
            }
        }
    ];

    window.BraceletCatalogExtra = {
        women,
        men: [lifePassion]
    };
})();
