'use strict';
// ValuTime v1.5.0

// ═══════════════════════════════════════════════════════
//  CITIES DATABASE
// ═══════════════════════════════════════════════════════
const CITIES_DB = [
  {name:'Dhaka',         country:'Bangladesh',    tz:'Asia/Dhaka',                     flag:'🇧🇩'},
  {name:'London',        country:'United Kingdom', tz:'Europe/London',                  flag:'🇬🇧'},
  {name:'Rome',          country:'Italy',          tz:'Europe/Rome',                    flag:'🇮🇹'},
  {name:'New York',      country:'USA',            tz:'America/New_York',               flag:'🇺🇸'},
  {name:'Los Angeles',   country:'USA',            tz:'America/Los_Angeles',            flag:'🇺🇸'},
  {name:'Chicago',       country:'USA',            tz:'America/Chicago',                flag:'🇺🇸'},
  {name:'San Francisco', country:'USA',            tz:'America/Los_Angeles',            flag:'🇺🇸'},
  {name:'Seattle',       country:'USA',            tz:'America/Los_Angeles',            flag:'🇺🇸'},
  {name:'Miami',         country:'USA',            tz:'America/New_York',               flag:'🇺🇸'},
  {name:'Boston',        country:'USA',            tz:'America/New_York',               flag:'🇺🇸'},
  {name:'Dallas',        country:'USA',            tz:'America/Chicago',                flag:'🇺🇸'},
  {name:'Denver',        country:'USA',            tz:'America/Denver',                 flag:'🇺🇸'},
  {name:'Toronto',       country:'Canada',         tz:'America/Toronto',                flag:'🇨🇦'},
  {name:'Vancouver',     country:'Canada',         tz:'America/Vancouver',              flag:'🇨🇦'},
  {name:'Montreal',      country:'Canada',         tz:'America/Toronto',                flag:'🇨🇦'},
  {name:'Paris',         country:'France',         tz:'Europe/Paris',                   flag:'🇫🇷'},
  {name:'Berlin',        country:'Germany',        tz:'Europe/Berlin',                  flag:'🇩🇪'},
  {name:'Madrid',        country:'Spain',          tz:'Europe/Madrid',                  flag:'🇪🇸'},
  {name:'Amsterdam',     country:'Netherlands',    tz:'Europe/Amsterdam',               flag:'🇳🇱'},
  {name:'Zurich',        country:'Switzerland',    tz:'Europe/Zurich',                  flag:'🇨🇭'},
  {name:'Stockholm',     country:'Sweden',         tz:'Europe/Stockholm',               flag:'🇸🇪'},
  {name:'Oslo',          country:'Norway',         tz:'Europe/Oslo',                    flag:'🇳🇴'},
  {name:'Copenhagen',    country:'Denmark',        tz:'Europe/Copenhagen',              flag:'🇩🇰'},
  {name:'Helsinki',      country:'Finland',        tz:'Europe/Helsinki',                flag:'🇫🇮'},
  {name:'Warsaw',        country:'Poland',         tz:'Europe/Warsaw',                  flag:'🇵🇱'},
  {name:'Vienna',        country:'Austria',        tz:'Europe/Vienna',                  flag:'🇦🇹'},
  {name:'Prague',        country:'Czechia',        tz:'Europe/Prague',                  flag:'🇨🇿'},
  {name:'Budapest',      country:'Hungary',        tz:'Europe/Budapest',                flag:'🇭🇺'},
  {name:'Athens',        country:'Greece',         tz:'Europe/Athens',                  flag:'🇬🇷'},
  {name:'Istanbul',      country:'Turkey',         tz:'Europe/Istanbul',                flag:'🇹🇷'},
  {name:'Moscow',        country:'Russia',         tz:'Europe/Moscow',                  flag:'🇷🇺'},
  {name:'Kyiv',          country:'Ukraine',        tz:'Europe/Kyiv',                    flag:'🇺🇦'},
  {name:'Lisbon',        country:'Portugal',       tz:'Europe/Lisbon',                  flag:'🇵🇹'},
  {name:'Dublin',        country:'Ireland',        tz:'Europe/Dublin',                  flag:'🇮🇪'},
  {name:'Brussels',      country:'Belgium',        tz:'Europe/Brussels',                flag:'🇧🇪'},
  {name:'Dubai',         country:'UAE',            tz:'Asia/Dubai',                     flag:'🇦🇪'},
  {name:'Riyadh',        country:'Saudi Arabia',   tz:'Asia/Riyadh',                    flag:'🇸🇦'},
  {name:'Doha',          country:'Qatar',          tz:'Asia/Qatar',                     flag:'🇶🇦'},
  {name:'Kuwait City',   country:'Kuwait',         tz:'Asia/Kuwait',                    flag:'🇰🇼'},
  {name:'Beirut',        country:'Lebanon',        tz:'Asia/Beirut',                    flag:'🇱🇧'},
  {name:'Tel Aviv',      country:'Israel',         tz:'Asia/Jerusalem',                 flag:'🇮🇱'},
  {name:'Karachi',       country:'Pakistan',       tz:'Asia/Karachi',                   flag:'🇵🇰'},
  {name:'Islamabad',     country:'Pakistan',       tz:'Asia/Karachi',                   flag:'🇵🇰'},
  {name:'Kabul',         country:'Afghanistan',    tz:'Asia/Kabul',                     flag:'🇦🇫'},
  {name:'Mumbai',        country:'India',          tz:'Asia/Kolkata',                   flag:'🇮🇳'},
  {name:'Delhi',         country:'India',          tz:'Asia/Kolkata',                   flag:'🇮🇳'},
  {name:'Bangalore',     country:'India',          tz:'Asia/Kolkata',                   flag:'🇮🇳'},
  {name:'Colombo',       country:'Sri Lanka',      tz:'Asia/Colombo',                   flag:'🇱🇰'},
  {name:'Kathmandu',     country:'Nepal',          tz:'Asia/Kathmandu',                 flag:'🇳🇵'},
  {name:'Yangon',        country:'Myanmar',        tz:'Asia/Yangon',                    flag:'🇲🇲'},
  {name:'Bangkok',       country:'Thailand',       tz:'Asia/Bangkok',                   flag:'🇹🇭'},
  {name:'Ho Chi Minh',   country:'Vietnam',        tz:'Asia/Ho_Chi_Minh',               flag:'🇻🇳'},
  {name:'Jakarta',       country:'Indonesia',      tz:'Asia/Jakarta',                   flag:'🇮🇩'},
  {name:'Kuala Lumpur',  country:'Malaysia',       tz:'Asia/Kuala_Lumpur',              flag:'🇲🇾'},
  {name:'Singapore',     country:'Singapore',      tz:'Asia/Singapore',                 flag:'🇸🇬'},
  {name:'Manila',        country:'Philippines',    tz:'Asia/Manila',                    flag:'🇵🇭'},
  {name:'Taipei',        country:'Taiwan',         tz:'Asia/Taipei',                    flag:'🇹🇼'},
  {name:'Shanghai',      country:'China',          tz:'Asia/Shanghai',                  flag:'🇨🇳'},
  {name:'Hong Kong',     country:'Hong Kong',      tz:'Asia/Hong_Kong',                 flag:'🇭🇰'},
  {name:'Seoul',         country:'South Korea',    tz:'Asia/Seoul',                     flag:'🇰🇷'},
  {name:'Tokyo',         country:'Japan',          tz:'Asia/Tokyo',                     flag:'🇯🇵'},
  {name:'Almaty',        country:'Kazakhstan',     tz:'Asia/Almaty',                    flag:'🇰🇿'},
  {name:'Sydney',        country:'Australia',      tz:'Australia/Sydney',               flag:'🇦🇺'},
  {name:'Melbourne',     country:'Australia',      tz:'Australia/Melbourne',            flag:'🇦🇺'},
  {name:'Brisbane',      country:'Australia',      tz:'Australia/Brisbane',             flag:'🇦🇺'},
  {name:'Perth',         country:'Australia',      tz:'Australia/Perth',                flag:'🇦🇺'},
  {name:'Auckland',      country:'New Zealand',    tz:'Pacific/Auckland',               flag:'🇳🇿'},
  {name:'Mexico City',   country:'Mexico',         tz:'America/Mexico_City',            flag:'🇲🇽'},
  {name:'São Paulo',     country:'Brazil',         tz:'America/Sao_Paulo',              flag:'🇧🇷'},
  {name:'Buenos Aires',  country:'Argentina',      tz:'America/Argentina/Buenos_Aires', flag:'🇦🇷'},
  {name:'Bogotá',        country:'Colombia',       tz:'America/Bogota',                 flag:'🇨🇴'},
  {name:'Lima',          country:'Peru',           tz:'America/Lima',                   flag:'🇵🇪'},
  {name:'Santiago',      country:'Chile',          tz:'America/Santiago',               flag:'🇨🇱'},
  {name:'Cairo',         country:'Egypt',          tz:'Africa/Cairo',                   flag:'🇪🇬'},
  {name:'Johannesburg',  country:'South Africa',   tz:'Africa/Johannesburg',            flag:'🇿🇦'},
  {name:'Lagos',         country:'Nigeria',        tz:'Africa/Lagos',                   flag:'🇳🇬'},
  {name:'Nairobi',       country:'Kenya',          tz:'Africa/Nairobi',                 flag:'🇰🇪'},
  {name:'Accra',         country:'Ghana',          tz:'Africa/Accra',                   flag:'🇬🇭'},
];

// ═══════════════════════════════════════════════════════
//  CURRENCIES DATABASE
// ═══════════════════════════════════════════════════════
const CURRENCIES_DB = {
  USD:{name:'US Dollar',         symbol:'$',   flag:'🇺🇸'},
  EUR:{name:'Euro',              symbol:'€',   flag:'🇪🇺'},
  GBP:{name:'British Pound',     symbol:'£',   flag:'🇬🇧'},
  JPY:{name:'Japanese Yen',      symbol:'¥',   flag:'🇯🇵'},
  CAD:{name:'Canadian Dollar',   symbol:'C$',  flag:'🇨🇦'},
  AUD:{name:'Australian Dollar', symbol:'A$',  flag:'🇦🇺'},
  CHF:{name:'Swiss Franc',       symbol:'Fr',  flag:'🇨🇭'},
  CNY:{name:'Chinese Yuan',      symbol:'¥',   flag:'🇨🇳'},
  INR:{name:'Indian Rupee',      symbol:'₹',   flag:'🇮🇳'},
  BDT:{name:'Bangladeshi Taka',  symbol:'৳',   flag:'🇧🇩'},
  PKR:{name:'Pakistani Rupee',   symbol:'₨',   flag:'🇵🇰'},
  SGD:{name:'Singapore Dollar',  symbol:'S$',  flag:'🇸🇬'},
  HKD:{name:'Hong Kong Dollar',  symbol:'HK$', flag:'🇭🇰'},
  KRW:{name:'South Korean Won',  symbol:'₩',   flag:'🇰🇷'},
  NOK:{name:'Norwegian Krone',   symbol:'kr',  flag:'🇳🇴'},
  SEK:{name:'Swedish Krona',     symbol:'kr',  flag:'🇸🇪'},
  DKK:{name:'Danish Krone',      symbol:'kr',  flag:'🇩🇰'},
  NZD:{name:'New Zealand Dollar',symbol:'NZ$', flag:'🇳🇿'},
  MXN:{name:'Mexican Peso',      symbol:'$',   flag:'🇲🇽'},
  BRL:{name:'Brazilian Real',    symbol:'R$',  flag:'🇧🇷'},
  AED:{name:'UAE Dirham',        symbol:'د.إ', flag:'🇦🇪'},
  SAR:{name:'Saudi Riyal',       symbol:'SR',  flag:'🇸🇦'},
  QAR:{name:'Qatari Riyal',      symbol:'QR',  flag:'🇶🇦'},
  KWD:{name:'Kuwaiti Dinar',     symbol:'KD',  flag:'🇰🇼'},
  OMR:{name:'Omani Rial',        symbol:'﷼',   flag:'🇴🇲'},
  ZAR:{name:'South African Rand',symbol:'R',   flag:'🇿🇦'},
  NGN:{name:'Nigerian Naira',    symbol:'₦',   flag:'🇳🇬'},
  KES:{name:'Kenyan Shilling',   symbol:'KSh', flag:'🇰🇪'},
  PHP:{name:'Philippine Peso',   symbol:'₱',   flag:'🇵🇭'},
  MYR:{name:'Malaysian Ringgit', symbol:'RM',  flag:'🇲🇾'},
  IDR:{name:'Indonesian Rupiah', symbol:'Rp',  flag:'🇮🇩'},
  THB:{name:'Thai Baht',         symbol:'฿',   flag:'🇹🇭'},
  TRY:{name:'Turkish Lira',      symbol:'₺',   flag:'🇹🇷'},
  PLN:{name:'Polish Zloty',      symbol:'zł',  flag:'🇵🇱'},
  CZK:{name:'Czech Koruna',      symbol:'Kč',  flag:'🇨🇿'},
  HUF:{name:'Hungarian Forint',  symbol:'Ft',  flag:'🇭🇺'},
  ILS:{name:'Israeli Shekel',    symbol:'₪',   flag:'🇮🇱'},
  RON:{name:'Romanian Leu',      symbol:'lei', flag:'🇷🇴'},
  UAH:{name:'Ukrainian Hryvnia', symbol:'₴',   flag:'🇺🇦'},
  EGP:{name:'Egyptian Pound',    symbol:'E£',  flag:'🇪🇬'},
  LKR:{name:'Sri Lankan Rupee',  symbol:'Rs',  flag:'🇱🇰'},
  NPR:{name:'Nepalese Rupee',    symbol:'Rs',  flag:'🇳🇵'},
  MMK:{name:'Myanmar Kyat',      symbol:'K',   flag:'🇲🇲'},
  VND:{name:'Vietnamese Dong',   symbol:'₫',   flag:'🇻🇳'},
  TWD:{name:'Taiwan Dollar',     symbol:'NT$', flag:'🇹🇼'},
  CLP:{name:'Chilean Peso',      symbol:'$',   flag:'🇨🇱'},
  COP:{name:'Colombian Peso',    symbol:'$',   flag:'🇨🇴'},
  PEN:{name:'Peruvian Sol',      symbol:'S/',  flag:'🇵🇪'},
  ARS:{name:'Argentine Peso',    symbol:'$',   flag:'🇦🇷'},
  RUB:{name:'Russian Ruble',     symbol:'₽',   flag:'🇷🇺'},
  AFN:{name:'Afghan Afghani',    symbol:'؋',   flag:'🇦🇫'},
  BGN:{name:'Bulgarian Lev',     symbol:'лв',  flag:'🇧🇬'},
};
const NO_DECIMAL = new Set(['JPY','KRW','VND','IDR','MMK','CLP','HUF','RWF','UGX']);

const LOCALE_CURRENCY = {
  'en-us':'USD','en-ca':'CAD','en-gb':'GBP','en-au':'AUD','en-nz':'NZD','en-sg':'SGD',
  'en-ie':'EUR','en-za':'ZAR','en-ng':'NGN','en-ke':'KES','de':'EUR','de-at':'EUR',
  'de-ch':'CHF','fr':'EUR','fr-ca':'CAD','fr-ch':'CHF','it':'EUR','es':'EUR',
  'es-mx':'MXN','es-ar':'ARS','es-cl':'CLP','es-co':'COP','es-pe':'PEN','nl':'EUR',
  'pt':'EUR','pt-br':'BRL','pl':'PLN','cs':'CZK','hu':'HUF','ro':'RON','sv':'SEK',
  'da':'DKK','nb':'NOK','fi':'EUR','el':'EUR','tr':'TRY','ru':'RUB','uk':'UAH',
  'zh-cn':'CNY','zh-tw':'TWD','zh-hk':'HKD','zh':'CNY','ja':'JPY','ko':'KRW',
  'hi':'INR','bn':'BDT','bn-bd':'BDT','ur':'PKR','ur-pk':'PKR','ms':'MYR',
  'id':'IDR','th':'THB','vi':'VND','tl':'PHP','ar-ae':'AED','ar-sa':'SAR',
  'ar-qa':'QAR','ar-kw':'KWD','ar-eg':'EGP','he':'ILS','si':'LKR','ne':'NPR','my':'MMK',
};

// Fee providers config
const FEE_PROVIDERS = [
  {id:'wise',         name:'Wise',          emoji:'🟢', defaultPct:0.6,  description:'~0.35–2.85% by route'},
  {id:'payoneer',     name:'Payoneer',      emoji:'🟠', defaultPct:3.0,  description:'1% P2P · 3.99% card'},
  {id:'paypal',       name:'PayPal',        emoji:'🔵', defaultPct:4.4,  description:'~4.4% international'},
  {id:'remitly',      name:'Remitly',       emoji:'🟣', defaultPct:1.99, description:'Economy ~1.49–3.99%'},
  {id:'westernunion', name:'Western Union', emoji:'🟡', defaultPct:3.0,  description:'~1–5% varies by route'},
  {id:'skrill',       name:'Skrill',        emoji:'🩷', defaultPct:1.45, description:'~1.45% + small fixed'},
  {id:'revolut',      name:'Revolut',       emoji:'⬛', defaultPct:0.5,  description:'0% weekdays (limited)'},
];

// ═══════════════════════════════════════════════════════
//  ABOUT
// ═══════════════════════════════════════════════════════
const ABOUT_BIO = "I am a landscape illustrator and motion designer working independently with clients across different markets. My work demands both creative depth and operational discipline. Deadlines, revisions, time tracking, and income management are part of everyday reality, not exceptions. Over time, I realized that most productivity tools are built in isolation. One app for tasks, another for time, another for money. For freelancers like me and many peers I work alongside, this fragmentation creates friction, breaks focus, and reduces the real value of our time. This app exists because of that problem. It is built from direct, daily freelance experience, not theory. I needed a system that respects creative flow while still providing structure, clarity, and accountability. Instead of adapting my workflow to existing tools, I chose to build something aligned with how freelancers actually work. I approach both design and product building with the same mindset: keep it practical, intentional, and user-focused. The goal is not complexity. The goal is control, clarity, and better decision-making so creators can focus on meaningful work. This product is a living system, refined continuously through real use, real constraints, and real freelance challenges.";

// ═══════════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════════
const DEFAULT_SETTINGS = {
  clockFormat:'12h', showSeconds:true,
  baseCurrency:'USD', currencyAmount:100,
  feeProviders: FEE_PROVIDERS.map(p => ({id:p.id, pct:p.defaultPct, enabled:false})),
  theme:'ocean', displayMode:'auto', fontSize:'normal', layout:'default',
  highContrast:false, reduceMotion:false, pomoSound:'bell',
};
const DEFAULT_POMO = {
  phase:'idle',          // idle | work | break | longBreak | paused
  endTime:null,
  remainSecs:null,       // when paused
  sessions:0,
  settings:{
    workMins:25, breakMins:5, longBreakMins:15, sessionsBeforeLong:4,
    blockingEnabled:false,
    blockedSites:['facebook.com','twitter.com','x.com','instagram.com','tiktok.com','reddit.com','youtube.com','netflix.com'],
  },
};

let S = {
  cities:[], currencies:[], alarms:[], settings:{...DEFAULT_SETTINGS},
  rates:null, ratesBase:'USD', ratesTimestamp:null,
  pomo:{...DEFAULT_POMO, settings:{...DEFAULT_POMO.settings}},
  todos:[],
};

let currentTab  = 'time';
let clockInterval = null;
let pomoInterval  = null;
let sliderMins    = null;
let customDate    = null;   // 'YYYY-MM-DD' when a custom calendar date is set
let todoFilter    = 'all';

// ═══════════════════════════════════════════════════════
//  STORAGE
// ═══════════════════════════════════════════════════════
function loadState() {
  return new Promise(resolve => {
    chrome.storage.local.get(
      ['cities','currencies','alarms','settings','rates','ratesBase','ratesTimestamp','pomo','todos'], data => {
        if (data.cities)         S.cities         = data.cities;
        if (data.currencies)     S.currencies     = data.currencies;
        if (data.alarms)         S.alarms         = data.alarms;
        if (data.settings)       S.settings       = {...DEFAULT_SETTINGS, ...data.settings,
          feeProviders: data.settings.feeProviders || DEFAULT_SETTINGS.feeProviders};
        if (data.rates)          S.rates          = data.rates;
        if (data.ratesBase)      S.ratesBase      = data.ratesBase;
        if (data.ratesTimestamp) S.ratesTimestamp = data.ratesTimestamp;
        if (data.todos)          S.todos          = data.todos;
        if (data.pomo)           S.pomo           = {...DEFAULT_POMO, ...data.pomo,
          settings:{...DEFAULT_POMO.settings, ...(data.pomo.settings||{})}};
        resolve();
      });
  });
}
function saveState() {
  return new Promise(resolve => {
    chrome.storage.local.set({
      cities:S.cities, currencies:S.currencies, alarms:S.alarms, settings:S.settings,
      rates:S.rates, ratesBase:S.ratesBase, ratesTimestamp:S.ratesTimestamp, pomo:S.pomo, todos:S.todos,
    }, resolve);
  });
}

// ═══════════════════════════════════════════════════════
//  FIRST-RUN DEFAULTS
// ═══════════════════════════════════════════════════════
function initDefaults() {
  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let localCity = CITIES_DB.find(c => c.tz === localTz)
    || {name:localTz.split('/').pop().replace(/_/g,' '), country:'Local', tz:localTz, flag:'📍'};
  localCity = {...localCity, isLocal:true};
  const extras = ['London','New York']
    .map(n => CITIES_DB.find(c => c.name === n))
    .filter(c => c && c.tz !== localTz);
  S.cities = [localCity, ...extras];

  const locale = (navigator.language||'en-US').toLowerCase();
  const detected = LOCALE_CURRENCY[locale]||LOCALE_CURRENCY[locale.split('-')[0]]||'USD';
  S.settings.baseCurrency = detected;
  S.currencies = ['USD','EUR','GBP']
    .filter(c => c !== detected).slice(0,2)
    .map(code=>({code}));
  S.currencies.unshift({code:detected});
}

// ═══════════════════════════════════════════════════════
//  TIME UTILITIES
// ═══════════════════════════════════════════════════════
function getTimeParts(date, tz) {
  const f12  = new Intl.DateTimeFormat('en-US',{timeZone:tz,hour:'numeric',minute:'2-digit',second:'2-digit',hour12:true});
  const f24  = new Intl.DateTimeFormat('en-US',{timeZone:tz,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
  const fD   = new Intl.DateTimeFormat('en-US',{timeZone:tz,weekday:'short',month:'short',day:'numeric'});
  const fAb  = new Intl.DateTimeFormat('en-US',{timeZone:tz,timeZoneName:'short'});
  const fOff = new Intl.DateTimeFormat('en-US',{timeZone:tz,timeZoneName:'longOffset'});
  const abbr = fAb.formatToParts(date).find(p=>p.type==='timeZoneName')?.value||'';
  const gmtOffset = (fOff.formatToParts(date).find(p=>p.type==='timeZoneName')?.value||'').replace('GMT+00:00','GMT+0');
  return {str12:f12.format(date), str24:f24.format(date), dateStr:fD.format(date), abbr, gmtOffset};
}
function getDayProgress(date, tz) {
  const parts = new Intl.DateTimeFormat('en-US',{timeZone:tz,hour:'numeric',minute:'numeric',second:'numeric',hour12:false}).formatToParts(date);
  const p={}; parts.forEach(x=>{p[x.type]=parseInt(x.value)||0});
  return (p.hour*3600+p.minute*60+p.second)/86400;
}
function isNight(progress){return progress<0.25||progress>=0.875}
function buildTimeStr(parts, settings) {
  if (settings.clockFormat==='24h') return settings.showSeconds ? parts.str24 : parts.str24.slice(0,5);
  const m = parts.str12.match(/^(\d+:\d+)(:\d+)?\s*(AM|PM)$/i);
  if (!m) return parts.str12;
  return settings.showSeconds ? `${m[1]}${m[2]||''} ${m[3]}` : `${m[1]} ${m[3]}`;
}

// Reference date (for slider)
function getRefDate() {
  if (sliderMins === null && !customDate) return new Date();
  const now = new Date();
  let y = now.getFullYear(), mo = now.getMonth(), d = now.getDate();
  if (customDate) {
    const p = customDate.split('-');
    y = +p[0]; mo = +p[1] - 1; d = +p[2];
  }
  const mins = sliderMins === null ? localMinsNow() : sliderMins;
  return new Date(y, mo, d, Math.floor(mins/60), mins%60, 0, 0);
}
function isCustomMode() { return sliderMins !== null || customDate !== null; }
function localMinsNow() {
  const now = new Date();
  return now.getHours()*60 + now.getMinutes();
}
function minsToLabel(m) {
  const h  = Math.floor(m/60) % 24;
  const mm = m % 60;
  const ampm = h>=12 ? 'PM':'AM';
  const h12  = h===0?12:h>12?h-12:h;
  return `${h12}:${String(mm).padStart(2,'0')} ${ampm}`;
}

// ═══════════════════════════════════════════════════════
//  CLOCK — ticks every second
// ═══════════════════════════════════════════════════════
function startClock() {
  if (clockInterval) clearInterval(clockInterval);
  tick();
  clockInterval = setInterval(tick, 1000);
}
function tick() {
  const now     = new Date();
  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const lp      = getTimeParts(now, localTz);
  const hcEl    = document.getElementById('hc-time');
  const hdEl    = document.getElementById('hc-date');
  if (hcEl) hcEl.textContent = buildTimeStr(lp, S.settings);
  if (hdEl) hdEl.textContent = lp.dateStr;

  if (currentTab === 'time') {
    const ref = getRefDate();
    S.cities.forEach((city, i) => {
      const tp       = getTimeParts(ref, city.tz);
      const timeEl   = document.getElementById(`ct-${i}`);
      const dateEl   = document.getElementById(`cd-${i}`);
      const sliderEl = document.getElementById(`cs-${i}`);
      if (timeEl) timeEl.textContent = buildTimeStr(tp, S.settings);
      if (dateEl) dateEl.textContent = tp.dateStr;
      // Sync slider only in live mode (don't fight user dragging)
      if (sliderEl && sliderMins === null) {
        const arr = new Intl.DateTimeFormat('en-US', {
          timeZone: city.tz, hour: 'numeric', minute: 'numeric', hour12: false
        }).formatToParts(ref);
        const cp = {}; arr.forEach(x => { cp[x.type] = parseInt(x.value) || 0; });
        sliderEl.value = (cp.hour === 24 ? 0 : cp.hour) * 60 + cp.minute;
      }
    });
  }
}

// ═══════════════════════════════════════════════════════
//  TABS
// ═══════════════════════════════════════════════════════
function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn =>
    btn.addEventListener('click', ()=>switchTab(btn.dataset.tab)));

  document.getElementById('tab-time').addEventListener('click',     onTimeClick);
  document.getElementById('tab-time').addEventListener('input',     onTimeInput);
  document.getElementById('tab-time').addEventListener('change',    onTimeChange);
  // Stop slider mousedown from triggering card drag
  document.getElementById('tab-time').addEventListener('mousedown', e=>{
    if(e.target.closest('.city-slider-wrap')){
      const cards=document.querySelectorAll('#cities-list [data-drag-index]');
      cards.forEach(c=>c.setAttribute('draggable','false'));
      const restore=()=>{cards.forEach(c=>c.setAttribute('draggable','true'));document.removeEventListener('mouseup',restore);};
      document.addEventListener('mouseup',restore);
    }
  },{passive:true});
  document.getElementById('tab-currency').addEventListener('click', onCurrencyClick);
  document.getElementById('tab-currency').addEventListener('input', onCurrencyInput);
  document.getElementById('tab-currency').addEventListener('change',onCurrencyChange);
  document.getElementById('tab-pomo').addEventListener('click',     onPomoClick);
  document.getElementById('tab-pomo').addEventListener('change',    onPomoChange);
  document.getElementById('tab-pomo').addEventListener('input',     onPomoInput);
  document.getElementById('tab-todo').addEventListener('click',     onTodoClick);
  document.getElementById('tab-todo').addEventListener('input',     onTodoInput);
  document.getElementById('tab-settings').addEventListener('click', onSettingsClick);
  document.getElementById('tab-settings').addEventListener('change',onSettingsChange);
  document.getElementById('tab-settings').addEventListener('input', onSettingsInput);
}
function switchTab(tab) {
  currentTab = tab;
  if (pomoInterval && tab!=='pomo') { clearInterval(pomoInterval); pomoInterval=null; }
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  document.querySelectorAll('.tab-content').forEach(c=>c.classList.toggle('active',c.id===`tab-${tab}`));
  renderCurrentTab();
}
function renderCurrentTab() {
  if (currentTab==='time')     renderTimeTab();
  if (currentTab==='currency') renderCurrencyTab();
  if (currentTab==='pomo')     renderPomoTab();
  if (currentTab==='todo')     renderTodoTab();
  if (currentTab==='settings') renderSettingsTab();
}

// ═══════════════════════════════════════════════════════
//  TIME TAB
// ═══════════════════════════════════════════════════════

// ─── City slider helpers ──────────────────────────────
function cityTimeToRefDate(tz, cityMins) {
  const h   = Math.floor(cityMins / 60) % 24;
  const m   = cityMins % 60;
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz, year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', hour12: false,
  }).formatToParts(now);
  const p = {}; parts.forEach(x => { p[x.type] = x.value; });
  const tzH   = parseInt(p.hour) === 24 ? 0 : parseInt(p.hour);
  const tzMin  = parseInt(p.minute);
  const midnight = Date.UTC(parseInt(p.year), parseInt(p.month) - 1, parseInt(p.day), 0, 0, 0);
  const offMins  = (tzH * 60 + tzMin) - (now.getUTCHours() * 60 + now.getUTCMinutes());
  return new Date(midnight + (h * 60 + m - offMins) * 60000);
}

function handleCitySlider(cityIndex, cityMins) {
  const city    = S.cities[cityIndex];
  if (!city) return;
  const refDate = cityTimeToRefDate(city.tz, cityMins);
  sliderMins    = refDate.getHours() * 60 + refDate.getMinutes();

  // Update all city cards
  S.cities.forEach((c, i) => {
    const tp = getTimeParts(refDate, c.tz);
    const tEl = document.getElementById(`ct-${i}`);
    const dEl = document.getElementById(`cd-${i}`);
    const sEl = document.getElementById(`cs-${i}`);
    if (tEl) tEl.textContent = buildTimeStr(tp, S.settings);
    if (dEl) dEl.textContent = tp.dateStr;
    if (sEl) {
      const arr = new Intl.DateTimeFormat('en-US', {
        timeZone: c.tz, hour: 'numeric', minute: 'numeric', hour12: false,
      }).formatToParts(refDate);
      const cp = {}; arr.forEach(x => { cp[x.type] = parseInt(x.value) || 0; });
      sEl.value = (cp.hour === 24 ? 0 : cp.hour) * 60 + cp.minute;
    }
  });

  // Show / update live hint
  let hint = document.querySelector('.live-hint');
  if (!hint) {
    hint = document.createElement('div');
    hint.className = 'live-hint';
    const sectionHd = document.querySelector('#tab-time .section-hd');
    if (sectionHd) sectionHd.parentNode.insertBefore(hint, sectionHd);
  }
  if (hint) {
    hint.innerHTML = `&#128336; ${minsToLabel(sliderMins)} local &nbsp;
      <button class="live-btn" data-action="slider-live">&#8635; Live</button>`;
  }
}

function renderTimeTab() {
  const now     = new Date();
  const ref     = getRefDate();
  const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const lp      = getTimeParts(isCustomMode() ? ref : now, localTz);

  const pad      = n => String(n).padStart(2, '0');
  const timeVal  = `${pad(ref.getHours())}:${pad(ref.getMinutes())}`;
  const dateVal  = `${ref.getFullYear()}-${pad(ref.getMonth()+1)}-${pad(ref.getDate())}`;
  const custom   = isCustomMode();
  const customCard = `
    <div class="custom-time-card">
      <span class="ctc-label">&#128336; Compare at a custom time
        ${custom ? '<span class="ctc-badge">CUSTOM</span>' : ''}</span>
      <input type="date" id="custom-date" value="${dateVal}" aria-label="Custom date">
      <input type="time" id="custom-time" value="${timeVal}" aria-label="Custom time">
      ${custom ? '<button class="ctc-live" data-action="slider-live">&#8635; Back to live</button>' : ''}
    </div>`;

  let citiesHtml = '';
  if (S.cities.length === 0) {
    citiesHtml = `<div class="no-items"><div class="no-items-icon">&#127757;</div><div>No cities added yet.</div></div>`;
  } else {
    S.cities.forEach((city, i) => {
      const tp    = getTimeParts(ref, city.tz);
      const cpArr = new Intl.DateTimeFormat('en-US', {
        timeZone: city.tz, hour: 'numeric', minute: 'numeric', hour12: false
      }).formatToParts(ref);
      const cp = {}; cpArr.forEach(x => { cp[x.type] = parseInt(x.value) || 0; });
      const cityMins = (cp.hour === 24 ? 0 : cp.hour) * 60 + cp.minute;
      citiesHtml += `
        <div class="card city-card" data-drop-index="${i}">
          <div class="city-main">
            <div class="drag-handle-area" draggable="true" data-drag-index="${i}" role="button" tabindex="0" aria-label="Drag to reorder"><span aria-hidden="true">&#x2807;</span></div>
            <div class="city-info">
              <div class="city-name"><span>${city.flag || '&#127758;'}</span>${esc(city.name)}
                ${city.isLocal ? '<span style="font-size:9px;color:var(--accent);font-weight:700;margin-left:3px">YOU</span>' : ''}
              </div>
              <div class="city-sub">${esc(city.country)} &middot; ${tp.abbr} &middot; ${tp.gmtOffset}</div>
            </div>
            <div class="city-time-block">
              <div class="city-time" id="ct-${i}">${buildTimeStr(tp, S.settings)}</div>
              <div class="city-date"  id="cd-${i}">${tp.dateStr}</div>
            </div>
            <button class="icon-btn" data-action="remove-city" data-index="${i}">&#215;</button>
          </div>
          <div class="city-slider-wrap" draggable="false">
            <input type="range" class="city-slider" id="cs-${i}" data-city-index="${i}" draggable="false" aria-label="Time slider for ${esc(city.name)}"
              min="0" max="1439" value="${cityMins}">
            <div class="slider-ticks-sm">
              <span>12a</span><span>6a</span><span>12p</span><span>6p</span><span>12a</span>
            </div>
          </div>
        </div>`;
    });
  }

  document.getElementById('tab-time').innerHTML = `
    <div class="local-block">
      <div class="local-label">Your Local Time${custom ? ' &middot; Custom' : ''}</div>
      <div class="local-time">${buildTimeStr(lp, S.settings)}</div>
      <div class="local-date">${lp.dateStr}</div>
      <div class="local-tz">${lp.abbr} &middot; ${lp.gmtOffset}</div>
    </div>
    ${customCard}
    <div class="section-hd">
      <span class="section-title">Time Zones</span>
      <button class="add-btn" data-action="add-city">+ Add City</button>
    </div>
    <div id="cities-list">${citiesHtml}</div>
  `;
  setupDragDrop(document.getElementById('cities-list'), 'city');
}

function onTimeClick(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  if (btn.dataset.action==='add-city')    showAddCityModal();
  if (btn.dataset.action==='remove-city') {
    S.cities.splice(+btn.dataset.index,1);
    saveState().then(()=>renderTimeTab());
  }
  if (btn.dataset.action==='slider-live') {
    sliderMins = null;
    customDate = null;
    renderTimeTab();
  }
}
function onTimeInput(e) {
  if (e.target.classList.contains('city-slider')) {
    handleCitySlider(+e.target.dataset.cityIndex, +e.target.value);
  }
}
function onTimeChange(e) {
  if (e.target.id === 'custom-time') {
    const v = e.target.value;            // "HH:MM"
    if (v) {
      const [h, m] = v.split(':').map(Number);
      if (!isNaN(h) && !isNaN(m)) { sliderMins = h * 60 + m; renderTimeTab(); }
    }
    return;
  }
  if (e.target.id === 'custom-date') {
    customDate = e.target.value || null;
    renderTimeTab();
    return;
  }
}

// ─── Add City Modal ──────────────────────────────────
function showAddCityModal() {
  const addedKeys = new Set(S.cities.map(c=>c.tz+'|'+c.name));
  const listHtml = q => CITIES_DB
    .filter(c=>!q||c.name.toLowerCase().includes(q)||c.country.toLowerCase().includes(q))
    .map(city=>{
      const added = addedKeys.has(city.tz+'|'+city.name);
      return `<div class="modal-item" data-action="pick-city"
        data-tz="${esc(city.tz)}" data-name="${esc(city.name)}"
        data-country="${esc(city.country)}" data-flag="${city.flag}" ${added?'data-added=1':''}>
        <span class="modal-item-flag">${city.flag}</span>
        <div class="modal-item-main">
          <div class="modal-item-name">${esc(city.name)}</div>
          <div class="modal-item-sub">${esc(city.country)}</div>
        </div>
        ${added?'<span class="modal-item-check">✓</span>':''}
      </div>`;
    }).join('');

  showModal('Add City',`
    <input class="modal-search" id="city-q" placeholder="Search city or country…" autocomplete="off">
    <div class="modal-list" id="city-list">${listHtml('')}</div>
  `, sheet=>{
    const q=sheet.querySelector('#city-q'), list=sheet.querySelector('#city-list');
    q.focus();
    q.addEventListener('input',()=>{list.innerHTML=listHtml(q.value.toLowerCase())});
    list.addEventListener('click',e=>{
      const item=e.target.closest('[data-action="pick-city"]');
      if(!item||item.dataset.added) return;
      S.cities.push({name:item.dataset.name,country:item.dataset.country,tz:item.dataset.tz,flag:item.dataset.flag});
      saveState().then(()=>{hideModal();renderTimeTab();});
    });
  });
}

// ═══════════════════════════════════════════════════════
//  CURRENCY TAB
// ═══════════════════════════════════════════════════════
function renderCurrencyTab() {
  const s    = S.settings;
  const base = s.baseCurrency;
  const bInfo= CURRENCIES_DB[base]||{name:base,symbol:'',flag:'💰'};
  const amt  = s.currencyAmount??100;
  const fps  = s.feeProviders||[];

  const baseOpts = Object.entries(CURRENCIES_DB).map(([code,info])=>
    `<option value="${code}"${code===base?' selected':''}>${info.flag} ${code}</option>`).join('');

  // Fee chips
  const chipsHtml = FEE_PROVIDERS.map(p=>{
    const fp = fps.find(f=>f.id===p.id)||{pct:p.defaultPct,enabled:false};
    return `<div class="fee-chip${fp.enabled?' on':''}" data-action="toggle-fee" data-fee="${p.id}">
      ${p.emoji} ${p.name} ${fp.pct}%
    </div>`;
  }).join('');

  // Currency rows
  let rowsHtml='';
  if (S.currencies.length===0) {
    rowsHtml=`<div class="no-items" style="padding:20px"><div class="no-items-icon">💱</div><div>Add currencies below</div></div>`;
  } else {
    S.currencies.forEach((curr,i)=>{
      const code = curr.code;
      const info = CURRENCIES_DB[code]||{name:code,symbol:'',flag:'🌐'};
      const conv = convertCurrency(amt,base,code);
      const mainVal = conv!==null ? `${info.symbol}${fmtNum(conv,code)}` : (S.rates?'—':'…');

      // Fee rows
      const enabledFees = fps.filter(f=>f.enabled);
      let feesHtml='';
      if (enabledFees.length && conv!==null) {
        feesHtml='<div class="curr-fees-inline">';
        enabledFees.forEach(fp=>{
          const prov = FEE_PROVIDERS.find(p=>p.id===fp.id);
          if (!prov) return;
          const net = conv*(1 - fp.pct/100);
          feesHtml+=`<span class="curr-fee-item ${fp.id}">${prov.emoji} ${info.symbol}${fmtNum(net,code)}</span>`;
        });
        feesHtml+='</div>';
      }

      rowsHtml+=`
        <div class="curr-row" data-drop-index="${i}">
          <div class="drag-handle-area" draggable="true" data-drag-index="${i}" role="button" tabindex="0" aria-label="Drag to reorder"><span aria-hidden="true">&#x2807;</span></div>
          <div class="curr-row-left">
            <div class="curr-conv-val">${mainVal}</div>
            ${feesHtml}
          </div>
          <div class="curr-row-right">
            <div class="curr-code-lbl">${code}</div>
            <div class="curr-flag-ball">${info.flag}</div>
          </div>
          <button class="curr-del" data-action="remove-currency" data-index="${i}">×</button>
        </div>`;
    });
  }

  const ratesLine = S.ratesTimestamp
    ? `<div class="rates-line">Rates: ${new Date(S.ratesTimestamp).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}
       · <a href="#" data-action="refresh-rates" style="color:var(--accent)">Refresh</a></div>`
    : `<div class="rates-line" style="color:var(--warn)">⚠ Fetching rates…</div>`;

  document.getElementById('tab-currency').innerHTML = `
    <div class="curr-input-row">
      <div class="curr-input-wrap">
        <span class="sym">${bInfo.symbol}</span>
        <input type="number" id="cur-amt" value="${amt}" min="0" step="any">
      </div>
      <select class="base-sel" id="cur-base">${baseOpts}</select>
    </div>
    <div class="fee-chips-row">${chipsHtml}</div>
    ${ratesLine}
    <div class="curr-list-wrap">
      <div id="currencies-list">${rowsHtml}</div>
      <button class="green-add-btn" data-action="add-currency">+ Add Currency</button>
    </div>
  `;

  setupDragDrop(document.getElementById('currencies-list'), 'currency');
}

function onCurrencyClick(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const a = btn.dataset.action;
  if (a==='add-currency') showAddCurrencyModal();
  if (a==='remove-currency') {
    S.currencies.splice(+btn.dataset.index,1);
    saveState().then(()=>renderCurrencyTab());
  }
  if (a==='toggle-fee') {
    const id=btn.dataset.fee;
    const fp=S.settings.feeProviders.find(f=>f.id===id);
    if (fp) { fp.enabled=!fp.enabled; saveState().then(()=>renderCurrencyTab()); }
  }
  if (a==='refresh-rates') { e.preventDefault(); fetchRates().then(ok=>{if(ok)renderCurrencyTab();}); }
}
function onCurrencyInput(e) {
  if (e.target.id==='cur-amt') {
    S.settings.currencyAmount = parseFloat(e.target.value)||0;
    renderCurrencyTab();
  }
}
function onCurrencyChange(e) {
  if (e.target.id==='cur-base') {
    S.settings.baseCurrency=e.target.value;
    saveState().then(()=>renderCurrencyTab());
  }
  if (e.target.id==='cur-amt') {
    S.settings.currencyAmount=parseFloat(e.target.value)||0;
    saveState();
  }
}

// ─── Currency helpers ────────────────────────────────
function convertCurrency(amount, fromCode, toCode) {
  if (fromCode===toCode) return amount;
  if (!S.rates) return null;
  const fr=S.rates[fromCode], tr=S.rates[toCode];
  if (!fr||!tr) return null;
  return amount*(tr/fr);
}
function fmtNum(n,code){
  if (n===null||n===undefined) return '—';
  const dec=NO_DECIMAL.has(code)?0:2;
  return n.toLocaleString(undefined,{minimumFractionDigits:dec,maximumFractionDigits:dec});
}
async function fetchRates() {
  try {
    const r=await fetch('https://open.er-api.com/v6/latest/USD');
    const d=await r.json();
    if (d.result!=='success') throw new Error('fail');
    S.rates={...d.rates,USD:1}; S.ratesBase='USD'; S.ratesTimestamp=Date.now();
    await saveState(); return true;
  } catch(e){console.warn('Rate fetch:',e);return false;}
}
function fetchRatesIfNeeded(){
  const age=S.ratesTimestamp?(Date.now()-S.ratesTimestamp)/3600000:Infinity;
  if(age>6||!S.rates) fetchRates().then(ok=>{if(ok&&currentTab==='currency')renderCurrencyTab();});
}

// ─── Add Currency Modal ──────────────────────────────
function showAddCurrencyModal(){
  const added=new Set(S.currencies.map(c=>c.code));
  const listHtml=q=>Object.entries(CURRENCIES_DB)
    .filter(([code,info])=>!q||code.toLowerCase().includes(q)||info.name.toLowerCase().includes(q))
    .map(([code,info])=>{
      const isAdded=added.has(code);
      return `<div class="modal-item" data-action="pick-currency" data-code="${code}" ${isAdded?'data-added=1':''}>
        <span class="modal-item-flag">${info.flag}</span>
        <div class="modal-item-main">
          <div class="modal-item-name">${code} · ${esc(info.name)}</div>
          <div class="modal-item-sub">${info.symbol}</div>
        </div>
        ${isAdded?'<span class="modal-item-check">✓</span>':''}
      </div>`;
    }).join('');

  showModal('Add Currency',`
    <input class="modal-search" id="cur-q" placeholder="Search currency…" autocomplete="off">
    <div class="modal-list" id="cur-list">${listHtml('')}</div>
  `,sheet=>{
    const q=sheet.querySelector('#cur-q'),list=sheet.querySelector('#cur-list');
    q.focus();
    q.addEventListener('input',()=>{list.innerHTML=listHtml(q.value.toLowerCase())});
    list.addEventListener('click',e=>{
      const item=e.target.closest('[data-action="pick-currency"]');
      if(!item||item.dataset.added) return;
      S.currencies.push({code:item.dataset.code});
      saveState().then(()=>{hideModal();renderCurrencyTab();});
    });
  });
}

// ═══════════════════════════════════════════════════════

//  POMODORO TAB
// ═══════════════════════════════════════════════════════
function fmtPomoTime(secs){
  const m=Math.floor(secs/60), s=secs%60;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}
function getPomoRemaining(){
  if (S.pomo.phase==='idle')   return S.pomo.settings.workMins*60;
  if (S.pomo.phase==='paused') return S.pomo.remainSecs||0;
  return Math.max(0, Math.floor((S.pomo.endTime-Date.now())/1000));
}
function getPomoPhaseLabel(){
  const ph=S.pomo.phase;
  if (ph==='work')      return {text:'FOCUS TIME',cls:'work'};
  if (ph==='break')     return {text:'SHORT BREAK',cls:'brk'};
  if (ph==='longBreak') return {text:'LONG BREAK',cls:'long'};
  if (ph==='paused')    return {text:'PAUSED',cls:''};
  return {text:'READY',cls:''};
}
function renderPomoTab(){
  const ps   = S.pomo.settings;
  const total = ps.sessionsBeforeLong||4;
  const done  = S.pomo.sessions||0;
  const rem   = getPomoRemaining();
  const lbl   = getPomoPhaseLabel();
  const ph    = S.pomo.phase;
  const isRunning = ph==='work'||ph==='break'||ph==='longBreak';

  // Session dots
  const dots = Array.from({length:total},(_,i)=>`
    <div class="pomo-dot ${i<done?'done':i===done&&isRunning?'active':''}"></div>`).join('');

  // Blocked sites chips
  const siteChips=(ps.blockedSites||[]).map((site,i)=>
    `<div class="site-chip">${esc(site)}<span class="site-chip-x" data-action="remove-site" data-index="${i}">×</span></div>`).join('');

  document.getElementById('tab-pomo').innerHTML=`
    <div class="pomo-ring-wrap">
      <div class="pomo-phase-lbl ${lbl.cls}">${lbl.text}</div>
      <div class="pomo-timer-disp" id="pomo-timer">${fmtPomoTime(rem)}</div>
      <div class="pomo-dots">${dots}</div>
      <div class="pomo-ctrls">
        <button class="pomo-start ${isRunning?'running':ph==='paused'?'paused':''}" data-action="pomo-toggle">
          ${isRunning?'⏸ Pause':ph==='paused'?'▶ Resume':'▶ Start'}
        </button>
        <button class="pomo-reset" data-action="pomo-reset">↺ Reset</button>
      </div>
    </div>

    <div class="pomo-divider"></div>

    <div class="pomo-grid">
      <div class="pomo-setting-box">
        <label>Focus</label>
        <div class="pomo-num-row">
          <input class="pomo-num" type="number" id="pomo-work" value="${ps.workMins}" min="1" max="120">
          <span class="pomo-unit">min</span>
        </div>
      </div>
      <div class="pomo-setting-box">
        <label>Short Break</label>
        <div class="pomo-num-row">
          <input class="pomo-num" type="number" id="pomo-break" value="${ps.breakMins}" min="1" max="60">
          <span class="pomo-unit">min</span>
        </div>
      </div>
      <div class="pomo-setting-box">
        <label>Long Break</label>
        <div class="pomo-num-row">
          <input class="pomo-num" type="number" id="pomo-lbreak" value="${ps.longBreakMins}" min="1" max="60">
          <span class="pomo-unit">min</span>
        </div>
      </div>
      <div class="pomo-setting-box">
        <label>Long break after</label>
        <div class="pomo-num-row">
          <input class="pomo-num" type="number" id="pomo-sessions" value="${ps.sessionsBeforeLong}" min="2" max="10">
          <span class="pomo-unit">sessions</span>
        </div>
      </div>
    </div>

    <div class="pomo-block-section">
      <div class="pomo-block-header">
        <div>
          <div class="pomo-block-title">🚫 Block distracting sites</div>
          <div class="pomo-block-sub">Active only during Focus sessions</div>
        </div>
        <label class="alarm-toggle">
          <input type="checkbox" data-action="pomo-blocking" ${ps.blockingEnabled?'checked':''}>
          <span class="toggle-track"></span>
        </label>
      </div>
      <div class="blocked-sites-chips" id="blocked-sites">${siteChips}</div>
      <div class="add-site-row">
        <input class="add-site-inp" id="site-inp" placeholder="e.g. tiktok.com" autocomplete="off">
        <button class="add-site-btn-sm" data-action="add-site">Add</button>
      </div>
    </div>
  `;

  // Show pending notification if any
  if (S.pomo.pendingNotif) {
    setTimeout(() => showPomoNotif(S.pomo.pendingNotif), 150);
  }

  // Start live countdown if running
  if (isRunning && !pomoInterval) {
    pomoInterval = setInterval(()=>{
      const r=getPomoRemaining();
      const el=document.getElementById('pomo-timer');
      if(el) el.textContent=fmtPomoTime(r);
      if(r===0){clearInterval(pomoInterval);pomoInterval=null;}
    },1000);
  }
}


// ─── Pomodoro in-popup notification ──────────────────
function showPomoNotif(notif) {
  document.querySelectorAll('.pomo-notif-overlay').forEach(el => el.remove());
  if (!notif) return;
  const icons = { work: '&#x1F345;', break: '&#x2615;', longBreak: '&#x1F389;' };
  const overlay = document.createElement('div');
  overlay.className = 'pomo-notif-overlay';
  overlay.innerHTML = `
    <div class="pomo-notif-box">
      <div class="pomo-notif-icon">${icons[notif.phase] || '&#x23F0;'}</div>
      <div class="pomo-notif-title">${esc(notif.title || '')}</div>
      <div class="pomo-notif-msg">${esc(notif.message || '')}</div>
      <button class="pomo-notif-ok">Got it!</button>
    </div>`;
  document.body.appendChild(overlay);
  overlay.querySelector('.pomo-notif-ok').addEventListener('click', () => {
    overlay.remove();
    S.pomo.pendingNotif = null;
    saveState();
    try { chrome.action.setBadgeText({ text: '' }); } catch (_) {}
  });
}

function onPomoClick(e){
  const btn=e.target.closest('[data-action]');
  if(!btn||btn.tagName==='INPUT') return;
  const a=btn.dataset.action;

  if(a==='pomo-toggle'){
    const ph=S.pomo.phase;
    if(ph==='idle'||ph==='paused'){
      // Start or resume
      const secs = ph==='paused' ? (S.pomo.remainSecs||S.pomo.settings.workMins*60)
                                 : S.pomo.settings.workMins*60;
      S.pomo.phase='work';
      S.pomo.endTime=Date.now()+secs*1000;
      S.pomo.remainSecs=null;
      chrome.alarms.create('pomo_end',{when:S.pomo.endTime});
      if(S.pomo.settings.blockingEnabled) enableSiteBlocking(S.pomo.settings.blockedSites);
      saveState().then(()=>renderPomoTab());
    } else {
      // Pause
      S.pomo.remainSecs=getPomoRemaining();
      S.pomo.phase='paused';
      chrome.alarms.clear('pomo_end');
      if(pomoInterval){clearInterval(pomoInterval);pomoInterval=null;}
      disableSiteBlocking();
      saveState().then(()=>renderPomoTab());
    }
  }

  if(a==='pomo-reset'){
    chrome.alarms.clear('pomo_end');
    if(pomoInterval){clearInterval(pomoInterval);pomoInterval=null;}
    disableSiteBlocking();
    S.pomo.phase='idle';S.pomo.endTime=null;S.pomo.remainSecs=null;S.pomo.sessions=0;
    saveState().then(()=>renderPomoTab());
  }

  if(a==='add-site'){
    const inp=document.getElementById('site-inp');
    const site=(inp?.value||'').trim().toLowerCase().replace(/^https?:\/\//,'').replace(/\/.*$/,'');
    if(site&&!S.pomo.settings.blockedSites.includes(site)){
      S.pomo.settings.blockedSites.push(site);
      saveState().then(()=>renderPomoTab());
    } else if(inp) inp.value='';
  }

  if(a==='remove-site'){
    S.pomo.settings.blockedSites.splice(+btn.dataset.index,1);
    saveState().then(()=>renderPomoTab());
  }
}
function onPomoChange(e){
  if(e.target.dataset.action==='pomo-blocking'){
    S.pomo.settings.blockingEnabled=e.target.checked;
    if(S.pomo.phase==='work'&&e.target.checked) enableSiteBlocking(S.pomo.settings.blockedSites);
    else if(!e.target.checked) disableSiteBlocking();
    saveState();
  }
}
function onPomoInput(e){
  const id=e.target.id;
  if(id==='pomo-work')     {S.pomo.settings.workMins=+e.target.value||25;saveState();}
  if(id==='pomo-break')    {S.pomo.settings.breakMins=+e.target.value||5;saveState();}
  if(id==='pomo-lbreak')   {S.pomo.settings.longBreakMins=+e.target.value||15;saveState();}
  if(id==='pomo-sessions') {S.pomo.settings.sessionsBeforeLong=+e.target.value||4;saveState();}
}

// ─── Site blocking via declarativeNetRequest ─────────
async function enableSiteBlocking(sites){
  try {
    const rules=sites.map((site,idx)=>({
      id:idx+100, priority:1,
      action:{type:'block'},
      condition:{urlFilter:`||${site}^`,resourceTypes:['main_frame','sub_frame']},
    }));
    const existing=await chrome.declarativeNetRequest.getDynamicRules();
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds:existing.map(r=>r.id), addRules:rules,
    });
  } catch(e){console.warn('Block enable:',e);}
}
async function disableSiteBlocking(){
  try {
    const existing=await chrome.declarativeNetRequest.getDynamicRules();
    if(existing.length) await chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds:existing.map(r=>r.id)});
  } catch(e){console.warn('Block disable:',e);}
}

// ═══════════════════════════════════════════════════════
// ═══════════════════════════════════════════════════════
//  SETTINGS TAB
// ═══════════════════════════════════════════════════════
function setupDragDrop(container,type){
  if(!container)return;
  let src=null;
  // Only drag from the dedicated handle area — never from the slider
  container.addEventListener('dragstart',e=>{
    const handle=e.target.closest('.drag-handle-area');
    if(!handle){e.preventDefault();return;}
    src=+handle.dataset.dragIndex;
    e.dataTransfer.effectAllowed='move';
    setTimeout(()=>{
      const card=handle.closest('[data-drop-index]');
      if(card) card.classList.add('dragging');
    },0);
  });
  container.addEventListener('dragend',()=>{
    container.querySelectorAll('.dragging,.drag-over').forEach(el=>el.classList.remove('dragging','drag-over'));
  });
  container.addEventListener('dragover',e=>{
    e.preventDefault();
    const card=e.target.closest('[data-drop-index]');if(!card)return;
    container.querySelectorAll('.drag-over').forEach(el=>el.classList.remove('drag-over'));
    card.classList.add('drag-over');
  });
  container.addEventListener('drop',e=>{
    e.preventDefault();
    const card=e.target.closest('[data-drop-index]');if(!card||src===null)return;
    const dst=+card.dataset.dropIndex;if(src===dst){src=null;return;}
    const arr=type==='city'?S.cities:S.currencies;
    const[moved]=arr.splice(src,1);arr.splice(dst,0,moved);src=null;
    saveState().then(()=>type==='city'?renderTimeTab():renderCurrencyTab());
  });
}

// ═══════════════════════════════════════════════════════
//  THEME & ACCESSIBILITY
// ═══════════════════════════════════════════════════════
function applyTheme() {
  const s = S.settings;
  const b = document.body;
  // Strip all managed classes
  b.className = b.className.split(' ')
    .filter(c => !['theme-ocean','theme-emerald','theme-amber','theme-violet',
                    'mode-auto','mode-light','mode-dark',
                    'font-normal','font-medium','font-large','font-xl',
                    'layout-default','layout-adhd','layout-ocd',
                    'high-contrast','reduce-motion'].includes(c))
    .join(' ');
  b.classList.add('theme-'  + (s.theme       || 'ocean'));
  b.classList.add('mode-'   + (s.displayMode  || 'auto'));
  b.classList.add('font-'   + (s.fontSize     || 'normal'));
  b.classList.add('layout-' + (s.layout       || 'default'));
  if (s.highContrast)  b.classList.add('high-contrast');
  if (s.reduceMotion)  b.classList.add('reduce-motion');
}

// ═══════════════════════════════════════════════════════
//  TODO TAB
// ═══════════════════════════════════════════════════════
const PRIORITY = { high:{emoji:'🔴',label:'High'}, medium:{emoji:'🟡',label:'Medium'}, low:{emoji:'🟢',label:'Low'} };

function renderTodoTab() {
  const todos = S.todos || [];
  const filtered = todos.filter(t =>
    todoFilter === 'all' ? true : todoFilter === 'done' ? t.done : !t.done);
  const remaining = todos.filter(t => !t.done).length;
  const doneCount = todos.length - remaining;
  const pctDone   = todos.length ? Math.round((doneCount / todos.length) * 100) : 0;

  const itemsHtml = filtered.length === 0
    ? `<div class="todo-empty">
         <div class="todo-empty-icon">${todoFilter==='done'?'&#x2705;':'&#x1F4DD;'}</div>
         <div>${todoFilter==='done'?'No completed tasks yet':'No tasks yet. Add one above!'}</div>
       </div>`
    : filtered.map(todo => {
        const idx = S.todos.indexOf(todo);
        const pr  = PRIORITY[todo.priority] || PRIORITY.medium;
        return `<div class="todo-item${todo.done?' done':''}" role="listitem">
          <button class="todo-check${todo.done?' checked':''}"
            data-action="toggle-todo" data-index="${idx}"
            aria-label="${todo.done?'Mark incomplete':'Mark complete'}"
            aria-pressed="${todo.done}">
            ${todo.done?'&#x2713;':''}
          </button>
          <span class="todo-text">${esc(todo.text)}</span>
          <span class="todo-priority" aria-label="${pr.label} priority" title="${pr.label}">${pr.emoji}</span>
          <button class="todo-del" data-action="delete-todo" data-index="${idx}"
            aria-label="Delete task">&#215;</button>
        </div>`;
      }).join('');

  document.getElementById('tab-todo').innerHTML = `
    <div class="todo-add-row">
      <input class="todo-inp" id="todo-inp" type="text"
        placeholder="Add a task&#x2026;" maxlength="200" autocomplete="off"
        aria-label="New task description">
      <select class="todo-priority-sel" id="todo-pri" aria-label="Task priority">
        <option value="medium">&#x1F7E1; Med</option>
        <option value="high">&#x1F534; High</option>
        <option value="low">&#x1F7E2; Low</option>
      </select>
      <button class="todo-add-btn" data-action="add-todo" aria-label="Add task">Add</button>
    </div>
    <div class="todo-filters" role="group" aria-label="Filter tasks">
      <button class="todo-filter-btn${todoFilter==='all'?' active':''}" data-filter="all">
        All <span class="todo-count">${todos.length}</span>
      </button>
      <button class="todo-filter-btn${todoFilter==='active'?' active':''}" data-filter="active">
        Active <span class="todo-count">${todos.filter(t=>!t.done).length}</span>
      </button>
      <button class="todo-filter-btn${todoFilter==='done'?' active':''}" data-filter="done">
        Done <span class="todo-count">${todos.filter(t=>t.done).length}</span>
      </button>
      ${todos.some(t=>t.done)?`<button class="todo-filter-btn todo-clear-btn" data-action="clear-done" style="margin-left:auto;color:var(--danger)">Clear done</button>`:''}
    </div>
    <div class="todo-progress-wrap" role="progressbar" aria-valuenow="${pctDone}" aria-valuemin="0" aria-valuemax="100" aria-label="Tasks completed">
      <div class="todo-progress-track"><div class="todo-progress-fill" style="width:${pctDone}%"></div></div>
      <span class="todo-progress-pct">${pctDone}%</span>
    </div>
    <div id="todo-list" role="list">${itemsHtml}</div>
    ${remaining>0?`<div class="todo-stats">${remaining} task${remaining!==1?'s':''} remaining</div>`:''}
  `;
}

function onTodoClick(e) {
  const btn = e.target.closest('[data-action],[data-filter]');
  if (!btn) return;
  const a = btn.dataset.action || ('filter:' + btn.dataset.filter);
  if (a === 'add-todo') {
    const inp = document.getElementById('todo-inp');
    const pri = document.getElementById('todo-pri');
    const text = (inp?.value || '').trim();
    if (!text) { inp?.focus(); return; }
    S.todos.push({ id: `t${Date.now()}`, text, done: false, priority: pri?.value || 'medium', createdAt: Date.now() });
    inp.value = '';
    saveState().then(() => renderTodoTab());
  }
  if (a === 'toggle-todo') {
    const i = +btn.dataset.index;
    if (S.todos[i]) { S.todos[i].done = !S.todos[i].done; saveState().then(() => renderTodoTab()); }
  }
  if (a === 'delete-todo') {
    S.todos.splice(+btn.dataset.index, 1);
    saveState().then(() => renderTodoTab());
  }
  if (a === 'clear-done') {
    S.todos = S.todos.filter(t => !t.done);
    saveState().then(() => renderTodoTab());
  }
  if (btn.dataset.filter) {
    todoFilter = btn.dataset.filter;
    renderTodoTab();
  }
}
function onTodoInput(e) {
  if (e.target.id === 'todo-inp' && e.key === 'Enter') {
    document.querySelector('[data-action="add-todo"]')?.click();
  }
}

// ═══════════════════════════════════════════════════════
//  POMODORO SOUND PREVIEW
// ═══════════════════════════════════════════════════════
function previewPomoSound(soundId) {
  // Generate preview in-popup using AudioContext
  try {
    const ctx = new AudioContext();
    playWebAudioSound(ctx, soundId);
  } catch(e) { console.warn('Sound preview:', e); }
}
function playWebAudioSound(ctx, type) {
  if (type === 'none') return;
  const now = ctx.currentTime;
  const gain = ctx.createGain();
  gain.connect(ctx.destination);
  if (type === 'bell') {
    const notes = [523.25, 659.25, 783.99, 1046.5, 783.99];
    notes.forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = ctx.createGain(); o.connect(g); g.connect(ctx.destination);
      const t = now + i * 0.22;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.35, t + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.7);
      o.start(t); o.stop(t + 0.8);
    });
  } else if (type === 'chime') {
    [1046.5, 1318.5, 1568, 2093].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
      const g = ctx.createGain(); o.connect(g); g.connect(ctx.destination);
      const t = now + i * 0.15;
      g.gain.setValueAtTime(0.3, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
      o.start(t); o.stop(t + 1.0);
    });
  } else if (type === 'digital') {
    [880, 1760, 880].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f;
      const g = ctx.createGain(); o.connect(g); g.connect(ctx.destination);
      const t = now + i * 0.12;
      g.gain.setValueAtTime(0.15, t); g.gain.setValueAtTime(0, t + 0.09);
      o.start(t); o.stop(t + 0.1);
    });
  } else if (type === 'gentle') {
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 440;
    const g = ctx.createGain(); o.connect(g); g.connect(ctx.destination);
    g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.2, now + 0.3);
    g.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
    o.start(now); o.stop(now + 2.0);
  }
}

// ═══════════════════════════════════════════════════════
//  SETTINGS TAB (full replacement)
// ═══════════════════════════════════════════════════════
function renderSettingsTab() {
  const s = S.settings;
  const fp = s.feeProviders || [];
  const baseOpts = Object.entries(CURRENCIES_DB).map(([code, info]) =>
    `<option value="${code}"${code === s.baseCurrency ? ' selected' : ''}>${info.flag} ${code}</option>`).join('');

  const feeRows = FEE_PROVIDERS.map(p => {
    const f = fp.find(x => x.id === p.id) || { pct: p.defaultPct };
    return `<div class="setting-row">
      <div><div class="setting-label">${p.emoji} ${p.name}</div><div class="setting-desc">${p.description}</div></div>
      <div style="display:flex;align-items:center;gap:6px">
        <input class="setting-input" type="number" data-fee-id="${p.id}" value="${f.pct}" min="0" max="20" step="0.05" aria-label="${p.name} fee percentage">
        <span class="input-suffix">%</span>
      </div>
    </div>`;
  }).join('');

  const sounds = [
    {id:'bell',   label:'&#x1F514; Bell'},
    {id:'chime',  label:'&#x1F3B5; Chime'},
    {id:'digital',label:'&#x1F4DF; Digital'},
    {id:'gentle', label:'&#x1F30A; Gentle'},
    {id:'none',   label:'&#x1F507; Silent'},
  ];

  document.getElementById('tab-settings').innerHTML = `
    <!-- Appearance -->
    <div class="settings-group">
      <div class="settings-group-title">&#x1F3A8; Appearance</div>
      <div class="setting-row" style="flex-wrap:wrap;gap:10px">
        <div><div class="setting-label">Theme Color</div><div class="setting-desc">All themes meet WCAG AA contrast</div></div>
        <div class="theme-selector" role="group" aria-label="Theme color">
          <button class="theme-swatch${s.theme==='ocean'?' active':''}" data-theme="ocean" style="background:#2563eb" aria-label="Ocean Blue" title="Ocean Blue"></button>
          <button class="theme-swatch${s.theme==='emerald'?' active':''}" data-theme="emerald" style="background:#059669" aria-label="Emerald Green" title="Emerald"></button>
          <button class="theme-swatch${s.theme==='amber'?' active':''}" data-theme="amber" style="background:#b45309" aria-label="Amber" title="Amber"></button>
          <button class="theme-swatch${s.theme==='violet'?' active':''}" data-theme="violet" style="background:#7c3aed" aria-label="Violet" title="Violet"></button>
        </div>
      </div>
      <div class="setting-row">
        <div><div class="setting-label">Display Mode</div></div>
        <div class="seg-control" role="group" aria-label="Display mode">
          <button class="seg-btn${s.displayMode==='auto'?' active':''}" data-setting="displayMode" data-val="auto">Auto</button>
          <button class="seg-btn${s.displayMode==='light'?' active':''}" data-setting="displayMode" data-val="light">&#x2600; Light</button>
          <button class="seg-btn${s.displayMode==='dark'?' active':''}" data-setting="displayMode" data-val="dark">&#x1F319; Dark</button>
        </div>
      </div>
    </div>

    <!-- Layout -->
    <div class="settings-group">
      <div class="settings-group-title">&#x1F9E9; Layout</div>
      <div class="layout-selector" role="group" aria-label="Layout mode">
        <button class="layout-opt${(s.layout||'default')==='default'?' active':''}" data-layout="default" aria-pressed="${(s.layout||'default')==='default'}">
          <span class="layout-opt-emoji" aria-hidden="true">&#x1F4D0;</span>
          <span class="layout-opt-main">
            <span class="layout-opt-name">Default</span>
            <span class="layout-opt-desc">Balanced spacing and density &mdash; the standard ValuTime look.</span>
          </span>
          <span class="layout-opt-check" aria-hidden="true">&#x2713;</span>
        </button>
        <button class="layout-opt${s.layout==='adhd'?' active':''}" data-layout="adhd" aria-pressed="${s.layout==='adhd'}">
          <span class="layout-opt-emoji" aria-hidden="true">&#x1F9E0;</span>
          <span class="layout-opt-main">
            <span class="layout-opt-name">ADHD &middot; Focus</span>
            <span class="layout-opt-desc">Calm and roomy. Bigger targets, larger text, fewer distractions, quieter animations &mdash; one thing at a time.</span>
          </span>
          <span class="layout-opt-check" aria-hidden="true">&#x2713;</span>
        </button>
        <button class="layout-opt${s.layout==='ocd'?' active':''}" data-layout="ocd" aria-pressed="${s.layout==='ocd'}">
          <span class="layout-opt-emoji" aria-hidden="true">&#x1F4CF;</span>
          <span class="layout-opt-main">
            <span class="layout-opt-name">OCD &middot; Structured</span>
            <span class="layout-opt-desc">Tight, aligned grids with uniform spacing, boxed sections, crisp dividers and a clear task-completion bar.</span>
          </span>
          <span class="layout-opt-check" aria-hidden="true">&#x2713;</span>
        </button>
      </div>
    </div>

    <!-- Accessibility -->
    <div class="settings-group">
      <div class="settings-group-title">&#x267F; Accessibility (ADA)</div>
      <div class="setting-row">
        <div><div class="setting-label">Text Size</div><div class="setting-desc">Larger text for readability</div></div>
        <div class="seg-control" role="group" aria-label="Text size">
          <button class="seg-btn${s.fontSize==='normal'?' active':''}" data-setting="fontSize" data-val="normal">A</button>
          <button class="seg-btn${s.fontSize==='medium'?' active':''}" data-setting="fontSize" data-val="medium" style="font-size:15px">A</button>
          <button class="seg-btn${s.fontSize==='large'?' active':''}" data-setting="fontSize" data-val="large" style="font-size:17px">A</button>
          <button class="seg-btn${s.fontSize==='xl'?' active':''}" data-setting="fontSize" data-val="xl" style="font-size:19px">A</button>
        </div>
      </div>
      <div class="setting-row">
        <div><div class="setting-label">High Contrast</div><div class="setting-desc">Maximum contrast for low vision</div></div>
        <label class="alarm-toggle" aria-label="High contrast mode">
          <input type="checkbox" data-setting="highContrast" ${s.highContrast?'checked':''}>
          <span class="toggle-track"></span>
        </label>
      </div>
      <div class="setting-row">
        <div><div class="setting-label">Reduce Motion</div><div class="setting-desc">Disable animations &amp; transitions</div></div>
        <label class="alarm-toggle" aria-label="Reduce motion">
          <input type="checkbox" data-setting="reduceMotion" ${s.reduceMotion?'checked':''}>
          <span class="toggle-track"></span>
        </label>
      </div>
    </div>

    <!-- Clock -->
    <div class="settings-group">
      <div class="settings-group-title">&#x1F553; Clock</div>
      <div class="setting-row">
        <div class="setting-label">Time Format</div>
        <div class="seg-control">
          <button class="seg-btn${s.clockFormat==='12h'?' active':''}" data-setting="clockFormat" data-val="12h">12h</button>
          <button class="seg-btn${s.clockFormat==='24h'?' active':''}" data-setting="clockFormat" data-val="24h">24h</button>
        </div>
      </div>
      <div class="setting-row">
        <div class="setting-label">Show Seconds</div>
        <div class="seg-control">
          <button class="seg-btn${s.showSeconds?' active':''}" data-setting="showSeconds" data-val="true">On</button>
          <button class="seg-btn${!s.showSeconds?' active':''}" data-setting="showSeconds" data-val="false">Off</button>
        </div>
      </div>
    </div>

    <!-- Currency -->
    <div class="settings-group">
      <div class="settings-group-title">&#x1F4B1; Currency</div>
      <div class="setting-row">
        <div><div class="setting-label">Base Currency</div></div>
        <select class="base-sel" data-setting="baseCurrency" aria-label="Base currency">${baseOpts}</select>
      </div>
    </div>

    <!-- Fee Rates -->
    <div class="settings-group">
      <div class="settings-group-title">&#x1F4B3; Fee Provider Rates</div>
      ${feeRows}
    </div>

    <!-- Pomodoro Sound -->
    <div class="settings-group">
      <div class="settings-group-title">&#x1F345; Pomodoro Sound</div>
      <div class="setting-row" style="flex-direction:column;align-items:flex-start;gap:8px">
        <div class="setting-desc">Select the alert sound when a session ends</div>
        <div class="sound-selector" role="group" aria-label="Alarm sound">
          ${sounds.map(snd => `
            <button class="sound-btn${s.pomoSound===snd.id?' active':''}"
              data-sound="${snd.id}" aria-pressed="${s.pomoSound===snd.id}">${snd.label}</button>
          `).join('')}
        </div>
        <button class="sound-preview-btn" data-action="preview-sound" aria-label="Preview selected sound">&#x25B6; Preview sound</button>
      </div>
    </div>

    <!-- About -->
    <div class="settings-group">
      <div class="settings-group-title">&#x1F464; About ValuTime</div>
      <div class="about-section" role="complementary" aria-label="About ValuTime">
        <div class="about-avatar" aria-hidden="true">VT</div>
        <div class="about-name">ValuTime</div>
        <div class="about-desc">${esc(ABOUT_BIO)}</div>
        <div class="about-links">
          <button class="about-link linkedin" data-action="open-url"
             data-url="https://www.linkedin.com/in/muhammad-said-8995a2171/"
             aria-label="ValuTime on LinkedIn">&#x1F4BC; LinkedIn</button>
          <button class="about-link youtube" data-action="open-url"
             data-url="https://www.youtube.com/@MuhammadSaid01"
             aria-label="ValuTime on YouTube">&#x1F4FA; YouTube</button>
        </div>
        <button class="coffee-btn" disabled aria-disabled="true" title="Coming soon">
          &#x2615; Buy me a coffee <span class="coffee-soon">coming soon</span>
        </button>
      </div>
      <div class="setting-row" style="flex-direction:column;align-items:flex-start;gap:4px">
        <div class="setting-label">ValuTime v1.5.0</div>
        <div class="setting-desc">Rates: open.er-api.com &middot; Fees are estimates &mdash; always verify before sending.</div>
        <button class="add-btn" data-action="refresh-rates" style="margin-top:6px">&#8635; Refresh Rates</button>
      </div>
    </div>
  `;
}

function onSettingsClick(e) {
  // External links (LinkedIn, YouTube)
  const urlBtn = e.target.closest('[data-action="open-url"]');
  if (urlBtn) { try { chrome.tabs.create({ url: urlBtn.dataset.url }); } catch(_) { window.open(urlBtn.dataset.url); } return; }
  // Theme swatches
  const swatch = e.target.closest('.theme-swatch');
  if (swatch) {
    S.settings.theme = swatch.dataset.theme;
    saveState().then(() => { applyTheme(); renderSettingsTab(); });
    return;
  }
  // Layout option cards
  const layoutBtn = e.target.closest('.layout-opt');
  if (layoutBtn) {
    S.settings.layout = layoutBtn.dataset.layout;
    saveState().then(() => { applyTheme(); renderSettingsTab(); });
    return;
  }
  // Sound buttons
  const soundBtn = e.target.closest('.sound-btn');
  if (soundBtn) {
    S.settings.pomoSound = soundBtn.dataset.sound;
    saveState().then(() => renderSettingsTab());
    return;
  }
  // Preview sound
  if (e.target.closest('[data-action="preview-sound"]')) {
    previewPomoSound(S.settings.pomoSound || 'bell');
    return;
  }
  // Seg-control buttons (clockFormat, showSeconds, fontSize, displayMode)
  const btn = e.target.closest('[data-setting]');
  if (btn && btn.tagName === 'BUTTON') {
    let val = btn.dataset.val;
    if (val === 'true') val = true;
    if (val === 'false') val = false;
    S.settings[btn.dataset.setting] = val;
    saveState().then(() => { applyTheme(); renderSettingsTab(); if (btn.dataset.setting.includes('clock') || btn.dataset.setting === 'showSeconds') tick(); });
    return;
  }
  // Refresh rates
  if (e.target.closest('[data-action="refresh-rates"]')) {
    fetchRates().then(ok => { if (ok) { renderSettingsTab(); if (currentTab === 'currency') renderCurrencyTab(); } });
  }
}
function onSettingsChange(e) {
  // Base currency select
  if (e.target.dataset.setting === 'baseCurrency') {
    S.settings.baseCurrency = e.target.value; saveState();
  }
  // Checkbox toggles (highContrast, reduceMotion)
  if (e.target.type === 'checkbox' && e.target.dataset.setting) {
    S.settings[e.target.dataset.setting] = e.target.checked;
    saveState().then(() => { applyTheme(); renderSettingsTab(); });
  }
}
function onSettingsInput(e) {
  const fid = e.target.dataset.feeId;
  if (fid) {
    const fp = (S.settings.feeProviders || []).find(f => f.id === fid);
    if (fp) { fp.pct = parseFloat(e.target.value) || 0; saveState(); }
  }
}

// ═══════════════════════════════════════════════════════
//  MODAL
// ═══════════════════════════════════════════════════════
function showModal(title, bodyHtml, onReady) {
  const backdrop = document.getElementById('modal-backdrop');
  const sheet    = document.getElementById('modal-sheet');
  sheet.innerHTML = `
    <div class="modal-header">
      <span class="modal-title">${title}</span>
      <button class="modal-close" data-action="close-modal" aria-label="Close">&#x2715;</button>
    </div>
    <div class="modal-body">${bodyHtml}</div>`;
  backdrop.classList.remove('hidden');
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop || e.target.closest('[data-action="close-modal"]')) hideModal();
  }, { once: true });
  if (onReady) onReady(sheet);
}
function hideModal() { document.getElementById('modal-backdrop').classList.add('hidden'); }

// ═══════════════════════════════════════════════════════
//  DRAG AND DROP (already updated above)
// ═══════════════════════════════════════════════════════
function esc(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', async () => {
  await loadState();
  if (S.cities.length === 0) initDefaults();
  applyTheme();
  setupTabs();
  renderCurrentTab();
  startClock();
  fetchRatesIfNeeded();
});
