const LANGS = ['tg', 'ru', 'en'];
const STORAGE_KEY = 'kuen-lang';

const translations = {
    tg: {
        'meta.title': 'Kuen Barbershop | Мӯйтарошии мардона дар Хоруғ',
        'meta.adminTitle': 'Панели усто | Kuen Barbershop',
        'lang.group': 'Забон',
        'logo.alt': 'Нишони кӯҳии Kuen Barbershop',
        'nav.home': 'Асосӣ',
        'nav.price': 'Нарх',
        'nav.book': 'Сабт',
        'hero.subtitle': 'Мӯйтарошии касбии мардона • шаҳри Хоруғ',
        'hero.cta': 'Вақт гирифтан',
        'service.haircutTitle': 'Мӯйтарошии мардона',
        'service.haircutDesc': 'Мӯйтарошӣ ва ороиши пурра. Аз душанбе то шанбе.',
        'service.haircutPrice': '80 сомонӣ',
        'service.beardTitle': 'Тарошидани риш',
        'service.beardDesc': 'Тарошидан ва рост кардани хати риш. Аз душанбе то шанбе.',
        'service.beardPrice': '20 сомонӣ',
        'service.haircutOption': 'Мӯйтарошии мардона (90 дақиқа) — 80 сомонӣ',
        'service.beardOption': 'Тарошидани риш (30 дақиқа) — 20 сомонӣ',
        'service.haircut': 'Мӯйтарошӣ',
        'service.beard': 'Тарошидани риш',
        'form.title': 'Сабтро пурра кунед',
        'form.name': 'Номи шумо',
        'form.namePlaceholder': 'Номи пурраро ворид кунед',
        'form.phone': 'Рақами телефон',
        'form.service': 'Хизматро интихоб кунед',
        'form.date': 'Санаро интихоб кунед',
        'form.time': 'Вақтро интихоб кунед',
        'form.payment': 'Тарзи пардохт',
        'form.bankAlif': 'Алиф (Тоҷикистон)',
        'form.submit': 'Идомаи дархости сабт',
        'form.note': '* Пас аз фиристодан барои тафсилоти пардохти Алиф бо мо дар WhatsApp тамос гиред. Сабти шумо пас аз тасдиқи пардохт тасдиқ мешавад.',
        'footer.hours': 'шаҳри Хоруғ • Душанбе–Шанбе, 10:00–17:00 • Якшанбе пӯшида',
        'footer.phone': 'Телефон:',
        'footer.emailLabel': 'Почта:',
        'footer.email': 'Почта',
        'modal.title': 'Фиристодани дархости сабт',
        'modal.summary': '{service} {amount} сомонӣ арзиш дорад. Барои тафсилоти пардохти Алиф бо мо дар WhatsApp тамос гиред. Мо сабти шуморо пас аз санҷидани пардохт тасдиқ мекунем.',
        'modal.cancel': 'Бекор кардан',
        'modal.submit': 'Фиристодани дархост',
        'status.submittedTitle': 'Дархости сабт фиристода шуд',
        'status.submittedDesc': 'Усто дархости сабт ва пардохти шуморо баррасӣ мекунад.',
        'status.keepOpen': 'Ин саҳифаро кушода нигоҳ доред, то мо ҳолати сабтро санҷем.',
        'status.paymentReceived': 'Пардохт қабул шуд!',
        'status.confirmedRedirect': 'Сабти шумо тасдиқ шуд. Гузариш...',
        'status.confirmedAlert': 'Сабти шумо тасдиқ шуд. То дидор!',
        'status.paymentMissing': 'Пардохт қабул нашуд',
        'status.paymentMissingDesc': 'Мо пардохти шуморо тасдиқ карда натавонистем. Лутфан бо мо дар WhatsApp тамос гиред: +992 100080400.',
        'status.close': 'Пӯшидан',
        'status.processing': 'Коркард...',
        'shop.closedBanner': 'Сартарошхонаи Kuen рӯзҳои якшанбе пӯшида аст. Лутфан рӯзеро аз душанбе то шанбе интихоб кунед.',
        'shop.closedButton': 'ПӮШИДА',
        'shop.statusOpen': 'Сартарошхона ҳоло кушода аст',
        'shop.statusClosed': 'Сартарошхона ҳоло пӯшида аст',
        'slots.loading': 'Боркунии вақтҳо...',
        'slots.pickDate': 'Аввал санаро интихоб кунед.',
        'slots.sundayClosed': 'Якшанбе пӯшида аст.',
        'slots.sundayHint': 'Лутфан рӯзеро аз душанбе то шанбе интихоб кунед.',
        'slots.booked': 'Аллакай банд аст',
        'slots.passed': 'Вақт гузашт',
        'slots.full': 'Ҳамаи вақтҳои ин рӯз банд ё гузаштаанд. Санаи дигарро интихоб кунед.',
        'slots.serverError': 'Пайвастшавӣ ба сервер муяссар нашуд. Лутфан дертар кӯшиш кунед.',
        'slots.pickTime': 'Лутфан вақтро интихоб кунед!',
        'errors.connection': 'Пайвастшавӣ ба сервер муяссар нашуд. Лутфан санҷед, ки сервер кор мекунад.',
        'errors.fields': 'Ҳамаи майдонҳоро пур кунед',
        'errors.date': 'Лутфан санаи дурусти сабтро ворид кунед',
        'errors.sunday': 'Сартарошхонаи Kuen рӯзи якшанбе пӯшида аст. Аз душанбе то шанбе сабт шавед.',
        'errors.service': 'Лутфан хизмати дурустро интихоб кунед',
        'errors.taken': 'Ин вақт аллакай банд аст',
        'errors.notFound': 'Сабт ёфт нашуд',
        'errors.unauthorized': 'Дастрасӣ рад шуд: пароли нодуруст',
        'admin.title': 'Панели усто',
        'admin.subtitle': 'Дархостҳои сабт ва пардохтҳои Алифро дар ин ҷо санҷед.',
        'admin.customer': 'Мизоҷ',
        'admin.service': 'Хизмат',
        'admin.datetime': 'Сана ва вақт',
        'admin.bank': 'Бонк',
        'admin.status': 'Ҳолат',
        'admin.actions': 'Амалҳо',
        'admin.pending': 'ИНТИЗОР',
        'admin.confirmed': 'ТАСДИҚ ШУД',
        'admin.rejected': 'РАД ШУД',
        'admin.confirm': 'Тасдиқи пардохт',
        'admin.reject': 'Нарасид',
        'admin.at': 'соати',
        'admin.passwordPrompt': 'Лутфан пароли усторо ворид кунед:',
        'admin.invalidPassword': 'Пароли нодуруст! Дастрасӣ рад шуд.',
        'admin.session': 'Сессия ба охир расид ё парол нодуруст аст.',
        'admin.link': 'Панели маъмур'
    },
    ru: {
        'meta.title': 'Kuen Barbershop | Мужские стрижки в Хороге',
        'meta.adminTitle': 'Панель мастера | Kuen Barbershop',
        'lang.group': 'Язык',
        'logo.alt': 'Горный логотип Kuen Barbershop',
        'nav.home': 'Главная',
        'nav.price': 'Цены',
        'nav.book': 'Запись',
        'hero.subtitle': 'Профессиональные мужские стрижки • город Хорог',
        'hero.cta': 'Записаться',
        'service.haircutTitle': 'Мужская стрижка',
        'service.haircutDesc': 'Полная мужская стрижка и укладка. С понедельника по субботу.',
        'service.haircutPrice': '80 сомони',
        'service.beardTitle': 'Стрижка бороды',
        'service.beardDesc': 'Стрижка и оформление бороды. С понедельника по субботу.',
        'service.beardPrice': '20 сомони',
        'service.haircutOption': 'Мужская стрижка (90 мин) — 80 сомони',
        'service.beardOption': 'Стрижка бороды (30 мин) — 20 сомони',
        'service.haircut': 'стрижка',
        'service.beard': 'стрижка бороды',
        'form.title': 'Завершите запись',
        'form.name': 'Ваше имя',
        'form.namePlaceholder': 'Введите полное имя',
        'form.phone': 'Номер телефона',
        'form.service': 'Выберите услугу',
        'form.date': 'Выберите дату',
        'form.time': 'Выберите время',
        'form.payment': 'Способ оплаты',
        'form.bankAlif': 'Alif (Таджикистан)',
        'form.submit': 'Перейти к заявке',
        'form.note': '* После отправки свяжитесь с нами в WhatsApp, чтобы получить реквизиты оплаты Alif. Запись подтверждается после проверки оплаты.',
        'footer.hours': 'город Хорог • Понедельник–Суббота, 10:00–17:00 • Воскресенье выходной',
        'footer.phone': 'Телефон:',
        'footer.emailLabel': 'Почта:',
        'footer.email': 'Почта',
        'modal.title': 'Отправить заявку',
        'modal.summary': 'Услуга «{service}» стоит {amount} сомони. Свяжитесь с нами в WhatsApp, чтобы получить реквизиты оплаты Alif. Мы подтвердим запись после проверки оплаты.',
        'modal.cancel': 'Отмена',
        'modal.submit': 'Отправить заявку',
        'status.submittedTitle': 'Заявка отправлена',
        'status.submittedDesc': 'Мастер проверит вашу заявку и оплату.',
        'status.keepOpen': 'Не закрывайте эту страницу, пока мы проверяем статус записи.',
        'status.paymentReceived': 'Оплата получена!',
        'status.confirmedRedirect': 'Ваша запись подтверждена. Перенаправление...',
        'status.confirmedAlert': 'Ваша запись подтверждена. До встречи!',
        'status.paymentMissing': 'Оплата не получена',
        'status.paymentMissingDesc': 'Мы не смогли подтвердить оплату. Свяжитесь с нами в WhatsApp: +992 100080400.',
        'status.close': 'Закрыть',
        'status.processing': 'Обработка...',
        'shop.closedBanner': 'Kuen Barbershop по воскресеньям закрыт. Выберите день с понедельника по субботу.',
        'shop.closedButton': 'ЗАКРЫТО',
        'shop.statusOpen': 'Салон сейчас открыт',
        'shop.statusClosed': 'Салон сейчас закрыт',
        'slots.loading': 'Загрузка времени...',
        'slots.pickDate': 'Сначала выберите дату.',
        'slots.sundayClosed': 'По воскресеньям закрыто.',
        'slots.sundayHint': 'Выберите день с понедельника по субботу.',
        'slots.booked': 'Уже занято',
        'slots.passed': 'Время прошло',
        'slots.full': 'Все слоты на этот день заняты или уже прошли. Выберите другую дату.',
        'slots.serverError': 'Ошибка соединения с сервером. Попробуйте позже.',
        'slots.pickTime': 'Пожалуйста, выберите время!',
        'errors.connection': 'Не удалось связаться с сервером. Проверьте, что сервер запущен.',
        'errors.fields': 'Заполните все поля',
        'errors.date': 'Укажите корректную дату записи',
        'errors.sunday': 'Kuen Barbershop по воскресеньям закрыт. Запишитесь с понедельника по субботу.',
        'errors.service': 'Выберите корректную услугу',
        'errors.taken': 'Это время уже занято',
        'errors.notFound': 'Запись не найдена',
        'errors.unauthorized': 'Доступ запрещён: неверный пароль',
        'admin.title': 'Панель мастера',
        'admin.subtitle': 'Проверяйте заявки и подтверждайте оплату Alif.',
        'admin.customer': 'Клиент',
        'admin.service': 'Услуга',
        'admin.datetime': 'Дата и время',
        'admin.bank': 'Банк',
        'admin.status': 'Статус',
        'admin.actions': 'Действия',
        'admin.pending': 'ОЖИДАНИЕ',
        'admin.confirmed': 'ПОДТВЕРЖДЕНО',
        'admin.rejected': 'ОТКЛОНЕНО',
        'admin.confirm': 'Подтвердить оплату',
        'admin.reject': 'Не получено',
        'admin.at': 'в',
        'admin.passwordPrompt': 'Введите пароль мастера:',
        'admin.invalidPassword': 'Неверный пароль. Доступ запрещён.',
        'admin.session': 'Сессия истекла или пароль неверный.',
        'admin.link': 'Панель администратора'
    },
    en: {
        'meta.title': "Kuen Barbershop | Men's Grooming in Khorog",
        'meta.adminTitle': 'Admin Dashboard | Kuen Barbershop',
        'lang.group': 'Language',
        'logo.alt': 'Kuen Barbershop mountain logo',
        'nav.home': 'Home',
        'nav.price': 'Price',
        'nav.book': 'Book',
        'hero.subtitle': "Professional Men's Haircuts • Khorog City",
        'hero.cta': 'Book Appointment',
        'service.haircutTitle': "Men's Haircut",
        'service.haircutDesc': "Full men's haircut and styling. Available Monday through Saturday.",
        'service.haircutPrice': '80 сомони',
        'service.beardTitle': 'Beard Trim',
        'service.beardDesc': 'Beard trim and line-up. Available Monday through Saturday.',
        'service.beardPrice': '20 сомони',
        'service.haircutOption': "Men's Haircut (90 min) - 80 сомони",
        'service.beardOption': 'Beard Trim (30 min) - 20 сомони',
        'service.haircut': 'Haircut',
        'service.beard': 'Beard Trim',
        'form.title': 'Complete Your Booking',
        'form.name': 'Your Name',
        'form.namePlaceholder': 'Enter full name',
        'form.phone': 'Phone Number',
        'form.service': 'Select Service',
        'form.date': 'Select Date',
        'form.time': 'Select Time Slot',
        'form.payment': 'Payment Method',
        'form.bankAlif': 'Alif (Tajikistan)',
        'form.submit': 'Continue to Booking Request',
        'form.note': '* After submitting, contact us on WhatsApp for Alif payment details. Your booking is confirmed after payment is verified.',
        'footer.hours': 'Khorog City • Monday–Saturday, 10:00–17:00 • Sunday closed',
        'footer.phone': 'Phone:',
        'footer.emailLabel': 'Email:',
        'footer.email': 'Email',
        'modal.title': 'Submit Booking Request',
        'modal.summary': 'Your {service} costs {amount} сомони. Contact us on WhatsApp for Alif payment details. We will confirm your booking after payment is verified.',
        'modal.cancel': 'Cancel',
        'modal.submit': 'Submit Request',
        'status.submittedTitle': 'Booking Request Submitted',
        'status.submittedDesc': 'The master will review your booking request and payment.',
        'status.keepOpen': 'Keep this page open while we check your booking status.',
        'status.paymentReceived': 'Payment Received!',
        'status.confirmedRedirect': 'Your booking is confirmed. Redirecting...',
        'status.confirmedAlert': 'Your booking is confirmed. See you soon!',
        'status.paymentMissing': 'Payment Not Received',
        'status.paymentMissingDesc': 'We could not confirm your payment. Please contact us on WhatsApp at +992 100080400.',
        'status.close': 'Close',
        'status.processing': 'Processing...',
        'shop.closedBanner': 'Kuen Barbershop is closed on Sundays. Please choose Monday through Saturday.',
        'shop.closedButton': 'SHOP CLOSED',
        'shop.statusOpen': 'Shop is now OPEN',
        'shop.statusClosed': 'Shop is now CLOSED',
        'slots.loading': 'Loading slots...',
        'slots.pickDate': 'Please select a date first.',
        'slots.sundayClosed': 'Closed on Sundays.',
        'slots.sundayHint': 'Please select a day from Monday to Saturday.',
        'slots.booked': 'Already booked',
        'slots.passed': 'Time passed',
        'slots.full': 'All slots for this day are fully booked or past. Try another date!',
        'slots.serverError': 'Error connecting to server. Please try again later.',
        'slots.pickTime': 'Please select a time slot!',
        'errors.connection': 'Something went wrong connection to the server. Please check if backend is running.',
        'errors.fields': 'All fields are required',
        'errors.date': 'Please provide a valid booking date',
        'errors.sunday': 'Kuen Barbershop is closed on Sunday. Book Monday through Saturday.',
        'errors.service': 'Please select a valid service',
        'errors.taken': 'This slot is already booked',
        'errors.notFound': 'Booking not found',
        'errors.unauthorized': 'Unauthorized: Invalid admin password',
        'admin.title': 'Master Admin Dashboard',
        'admin.subtitle': 'Review booking requests and confirm Alif payments here.',
        'admin.customer': 'Customer',
        'admin.service': 'Service',
        'admin.datetime': 'Date & Time',
        'admin.bank': 'Bank',
        'admin.status': 'Status',
        'admin.actions': 'Actions',
        'admin.pending': 'PENDING',
        'admin.confirmed': 'CONFIRMED',
        'admin.rejected': 'REJECTED',
        'admin.confirm': 'Confirm Payment',
        'admin.reject': 'Not Received',
        'admin.at': 'at',
        'admin.passwordPrompt': 'Please enter the master admin password:',
        'admin.invalidPassword': 'Invalid password! Access denied.',
        'admin.session': 'Session expired or invalid password.',
        'admin.link': 'Admin Dashboard'
    }
};

const SERVER_ERROR_KEYS = {
    'All fields are required': 'errors.fields',
    'Date is required': 'errors.date',
    'Please provide a valid booking date': 'errors.date',
    'Kuen Barbershop is closed on Sunday. Book Monday through Saturday.': 'errors.sunday',
    'Please select a valid service': 'errors.service',
    'This slot is already booked': 'errors.taken',
    'Booking not found': 'errors.notFound',
    'Unauthorized: Invalid admin password': 'errors.unauthorized',
    'ID and status required': 'errors.fields'
};

function getLang() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (LANGS.includes(saved)) return saved;
    } catch (err) {
        /* private mode */
    }
    return 'tg';
}

function t(key, vars) {
    const lang = getLang();
    const table = translations[lang] || translations.tg;
    let str = table[key] || translations.en[key] || key;
    if (vars) {
        Object.keys(vars).forEach((name) => {
            str = str.split('{' + name + '}').join(String(vars[name]));
        });
    }
    return str;
}

function serviceLabel(service) {
    if (service === 'haircut') return t('service.haircut');
    if (service === 'beard') return t('service.beard');
    return service;
}

function localizeError(message) {
    const key = SERVER_ERROR_KEYS[message];
    return key ? t(key) : message;
}

function applyI18n() {
    const lang = getLang();
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
        el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
        el.alt = t(el.dataset.i18nAlt);
    });

    const titleKey = document.body.dataset.i18nTitle;
    if (titleKey) document.title = t(titleKey);

    document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
        const active = btn.dataset.lang === lang;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    const dateInput = document.getElementById('date');
    if (dateInput) dateInput.lang = lang;

    document.dispatchEvent(new CustomEvent('languagechange'));
}

function setLanguage(lang) {
    if (!LANGS.includes(lang)) return;
    try {
        localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
        /* ignore */
    }
    applyI18n();
}

document.addEventListener('click', (event) => {
    const btn = event.target.closest('.lang-switch [data-lang]');
    if (!btn) return;
    setLanguage(btn.dataset.lang);
});

window.t = t;
window.getLang = getLang;
window.setLanguage = setLanguage;
window.applyI18n = applyI18n;
window.serviceLabel = serviceLabel;
window.localizeError = localizeError;

applyI18n();
