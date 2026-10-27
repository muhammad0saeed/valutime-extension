'use strict';
// ValuTime v1.7.0

// ═══════════════════════════════════════════════════════
//  CITIES DATABASE
// ═══════════════════════════════════════════════════════
const CITIES_DB = [
  // ─── North America ───────────────────────────────────
  {name:'New York',      country:'USA',            tz:'America/New_York',               flag:'🇺🇸'},
  {name:'Washington DC', country:'USA',            tz:'America/New_York',               flag:'🇺🇸'},
  {name:'Boston',        country:'USA',            tz:'America/New_York',               flag:'🇺🇸'},
  {name:'Philadelphia',  country:'USA',            tz:'America/New_York',               flag:'🇺🇸'},
  {name:'Miami',         country:'USA',            tz:'America/New_York',               flag:'🇺🇸'},
  {name:'Atlanta',       country:'USA',            tz:'America/New_York',               flag:'🇺🇸'},
  {name:'Detroit',       country:'USA',            tz:'America/Detroit',                flag:'🇺🇸'},
  {name:'Chicago',       country:'USA',            tz:'America/Chicago',                flag:'🇺🇸'},
  {name:'Houston',       country:'USA',            tz:'America/Chicago',                flag:'🇺🇸'},
  {name:'Dallas',        country:'USA',            tz:'America/Chicago',                flag:'🇺🇸'},
  {name:'Austin',        country:'USA',            tz:'America/Chicago',                flag:'🇺🇸'},
  {name:'San Antonio',   country:'USA',            tz:'America/Chicago',                flag:'🇺🇸'},
  {name:'Minneapolis',   country:'USA',            tz:'America/Chicago',                flag:'🇺🇸'},
  {name:'New Orleans',   country:'USA',            tz:'America/Chicago',                flag:'🇺🇸'},
  {name:'Denver',        country:'USA',            tz:'America/Denver',                 flag:'🇺🇸'},
  {name:'Salt Lake City',country:'USA',            tz:'America/Denver',                 flag:'🇺🇸'},
  {name:'Phoenix',       country:'USA',            tz:'America/Phoenix',                flag:'🇺🇸'},
  {name:'Los Angeles',   country:'USA',            tz:'America/Los_Angeles',            flag:'🇺🇸'},
  {name:'San Francisco', country:'USA',            tz:'America/Los_Angeles',            flag:'🇺🇸'},
  {name:'San Diego',     country:'USA',            tz:'America/Los_Angeles',            flag:'🇺🇸'},
  {name:'San Jose',      country:'USA',            tz:'America/Los_Angeles',            flag:'🇺🇸'},
  {name:'Seattle',       country:'USA',            tz:'America/Los_Angeles',            flag:'🇺🇸'},
  {name:'Portland',      country:'USA',            tz:'America/Los_Angeles',            flag:'🇺🇸'},
  {name:'Las Vegas',     country:'USA',            tz:'America/Los_Angeles',            flag:'🇺🇸'},
  {name:'Anchorage',     country:'USA',            tz:'America/Anchorage',              flag:'🇺🇸'},
  {name:'Honolulu',      country:'USA',            tz:'Pacific/Honolulu',               flag:'🇺🇸'},
  {name:'Toronto',       country:'Canada',         tz:'America/Toronto',                flag:'🇨🇦'},
  {name:'Ottawa',        country:'Canada',         tz:'America/Toronto',                flag:'🇨🇦'},
  {name:'Montreal',      country:'Canada',         tz:'America/Toronto',                flag:'🇨🇦'},
  {name:'Quebec City',   country:'Canada',         tz:'America/Toronto',                flag:'🇨🇦'},
  {name:'Winnipeg',      country:'Canada',         tz:'America/Winnipeg',               flag:'🇨🇦'},
  {name:'Calgary',       country:'Canada',         tz:'America/Edmonton',               flag:'🇨🇦'},
  {name:'Edmonton',      country:'Canada',         tz:'America/Edmonton',               flag:'🇨🇦'},
  {name:'Vancouver',     country:'Canada',         tz:'America/Vancouver',              flag:'🇨🇦'},
  {name:'Halifax',       country:'Canada',         tz:'America/Halifax',                flag:'🇨🇦'},
  {name:"St. John's",    country:'Canada',         tz:'America/St_Johns',               flag:'🇨🇦'},
  {name:'Mexico City',   country:'Mexico',         tz:'America/Mexico_City',            flag:'🇲🇽'},
  {name:'Guadalajara',   country:'Mexico',         tz:'America/Mexico_City',            flag:'🇲🇽'},
  {name:'Monterrey',     country:'Mexico',         tz:'America/Monterrey',              flag:'🇲🇽'},
  {name:'Cancún',        country:'Mexico',         tz:'America/Cancun',                 flag:'🇲🇽'},
  {name:'Tijuana',       country:'Mexico',         tz:'America/Tijuana',                flag:'🇲🇽'},

  // ─── Central America & Caribbean ─────────────────────
  {name:'Guatemala City',country:'Guatemala',      tz:'America/Guatemala',              flag:'🇬🇹'},
  {name:'San Salvador',  country:'El Salvador',    tz:'America/El_Salvador',            flag:'🇸🇻'},
  {name:'Tegucigalpa',   country:'Honduras',       tz:'America/Tegucigalpa',            flag:'🇭🇳'},
  {name:'Managua',       country:'Nicaragua',      tz:'America/Managua',                flag:'🇳🇮'},
  {name:'San José',      country:'Costa Rica',     tz:'America/Costa_Rica',             flag:'🇨🇷'},
  {name:'Panama City',   country:'Panama',         tz:'America/Panama',                 flag:'🇵🇦'},
  {name:'Havana',        country:'Cuba',           tz:'America/Havana',                 flag:'🇨🇺'},
  {name:'Santo Domingo', country:'Dominican Rep.', tz:'America/Santo_Domingo',          flag:'🇩🇴'},
  {name:'San Juan',      country:'Puerto Rico',    tz:'America/Puerto_Rico',            flag:'🇵🇷'},
  {name:'Kingston',      country:'Jamaica',        tz:'America/Jamaica',                flag:'🇯🇲'},
  {name:'Port-au-Prince',country:'Haiti',          tz:'America/Port-au-Prince',         flag:'🇭🇹'},
  {name:'Nassau',        country:'Bahamas',        tz:'America/Nassau',                 flag:'🇧🇸'},

  // ─── South America ───────────────────────────────────
  {name:'São Paulo',     country:'Brazil',         tz:'America/Sao_Paulo',              flag:'🇧🇷'},
  {name:'Rio de Janeiro',country:'Brazil',         tz:'America/Sao_Paulo',              flag:'🇧🇷'},
  {name:'Brasília',      country:'Brazil',         tz:'America/Sao_Paulo',              flag:'🇧🇷'},
  {name:'Manaus',        country:'Brazil',         tz:'America/Manaus',                 flag:'🇧🇷'},
  {name:'Buenos Aires',  country:'Argentina',      tz:'America/Argentina/Buenos_Aires', flag:'🇦🇷'},
  {name:'Córdoba',       country:'Argentina',      tz:'America/Argentina/Cordoba',      flag:'🇦🇷'},
  {name:'Bogotá',        country:'Colombia',       tz:'America/Bogota',                 flag:'🇨🇴'},
  {name:'Medellín',      country:'Colombia',       tz:'America/Bogota',                 flag:'🇨🇴'},
  {name:'Lima',          country:'Peru',           tz:'America/Lima',                   flag:'🇵🇪'},
  {name:'Santiago',      country:'Chile',          tz:'America/Santiago',               flag:'🇨🇱'},
  {name:'Caracas',       country:'Venezuela',      tz:'America/Caracas',                flag:'🇻🇪'},
  {name:'Quito',         country:'Ecuador',        tz:'America/Guayaquil',              flag:'🇪🇨'},
  {name:'La Paz',        country:'Bolivia',        tz:'America/La_Paz',                 flag:'🇧🇴'},
  {name:'Asunción',      country:'Paraguay',       tz:'America/Asuncion',               flag:'🇵🇾'},
  {name:'Montevideo',    country:'Uruguay',        tz:'America/Montevideo',             flag:'🇺🇾'},
  {name:'Georgetown',    country:'Guyana',         tz:'America/Guyana',                 flag:'🇬🇾'},
  {name:'Paramaribo',    country:'Suriname',       tz:'America/Paramaribo',             flag:'🇸🇷'},

  // ─── Europe ──────────────────────────────────────────
  {name:'London',        country:'United Kingdom', tz:'Europe/London',                  flag:'🇬🇧'},
  {name:'Manchester',    country:'United Kingdom', tz:'Europe/London',                  flag:'🇬🇧'},
  {name:'Edinburgh',     country:'United Kingdom', tz:'Europe/London',                  flag:'🇬🇧'},
  {name:'Dublin',        country:'Ireland',        tz:'Europe/Dublin',                  flag:'🇮🇪'},
  {name:'Lisbon',        country:'Portugal',       tz:'Europe/Lisbon',                  flag:'🇵🇹'},
  {name:'Porto',         country:'Portugal',       tz:'Europe/Lisbon',                  flag:'🇵🇹'},
  {name:'Reykjavik',     country:'Iceland',        tz:'Atlantic/Reykjavik',             flag:'🇮🇸'},
  {name:'Paris',         country:'France',         tz:'Europe/Paris',                   flag:'🇫🇷'},
  {name:'Madrid',        country:'Spain',          tz:'Europe/Madrid',                  flag:'🇪🇸'},
  {name:'Barcelona',     country:'Spain',          tz:'Europe/Madrid',                  flag:'🇪🇸'},
  {name:'Berlin',        country:'Germany',        tz:'Europe/Berlin',                  flag:'🇩🇪'},
  {name:'Munich',        country:'Germany',        tz:'Europe/Berlin',                  flag:'🇩🇪'},
  {name:'Frankfurt',     country:'Germany',        tz:'Europe/Berlin',                  flag:'🇩🇪'},
  {name:'Hamburg',       country:'Germany',        tz:'Europe/Berlin',                  flag:'🇩🇪'},
  {name:'Rome',          country:'Italy',          tz:'Europe/Rome',                    flag:'🇮🇹'},
  {name:'Milan',         country:'Italy',          tz:'Europe/Rome',                    flag:'🇮🇹'},
  {name:'Amsterdam',     country:'Netherlands',    tz:'Europe/Amsterdam',               flag:'🇳🇱'},
  {name:'Rotterdam',     country:'Netherlands',    tz:'Europe/Amsterdam',               flag:'🇳🇱'},
  {name:'Brussels',      country:'Belgium',        tz:'Europe/Brussels',                flag:'🇧🇪'},
  {name:'Luxembourg',    country:'Luxembourg',     tz:'Europe/Luxembourg',              flag:'🇱🇺'},
  {name:'Zurich',        country:'Switzerland',    tz:'Europe/Zurich',                  flag:'🇨🇭'},
  {name:'Geneva',        country:'Switzerland',    tz:'Europe/Zurich',                  flag:'🇨🇭'},
  {name:'Vienna',        country:'Austria',        tz:'Europe/Vienna',                  flag:'🇦🇹'},
  {name:'Monaco',        country:'Monaco',         tz:'Europe/Monaco',                  flag:'🇲🇨'},
  {name:'Andorra la Vella',country:'Andorra',      tz:'Europe/Andorra',                 flag:'🇦🇩'},
  {name:'Stockholm',     country:'Sweden',         tz:'Europe/Stockholm',               flag:'🇸🇪'},
  {name:'Oslo',          country:'Norway',         tz:'Europe/Oslo',                    flag:'🇳🇴'},
  {name:'Copenhagen',    country:'Denmark',        tz:'Europe/Copenhagen',              flag:'🇩🇰'},
  {name:'Helsinki',      country:'Finland',        tz:'Europe/Helsinki',                flag:'🇫🇮'},
  {name:'Warsaw',        country:'Poland',         tz:'Europe/Warsaw',                  flag:'🇵🇱'},
  {name:'Prague',        country:'Czechia',        tz:'Europe/Prague',                  flag:'🇨🇿'},
  {name:'Bratislava',    country:'Slovakia',       tz:'Europe/Bratislava',              flag:'🇸🇰'},
  {name:'Budapest',      country:'Hungary',        tz:'Europe/Budapest',                flag:'🇭🇺'},
  {name:'Ljubljana',     country:'Slovenia',       tz:'Europe/Ljubljana',               flag:'🇸🇮'},
  {name:'Zagreb',        country:'Croatia',        tz:'Europe/Zagreb',                  flag:'🇭🇷'},
  {name:'Sarajevo',      country:'Bosnia',         tz:'Europe/Sarajevo',                flag:'🇧🇦'},
  {name:'Belgrade',      country:'Serbia',         tz:'Europe/Belgrade',                flag:'🇷🇸'},
  {name:'Podgorica',     country:'Montenegro',     tz:'Europe/Podgorica',               flag:'🇲🇪'},
  {name:'Skopje',        country:'North Macedonia',tz:'Europe/Skopje',                  flag:'🇲🇰'},
  {name:'Tirana',        country:'Albania',        tz:'Europe/Tirane',                  flag:'🇦🇱'},
  {name:'Bucharest',     country:'Romania',        tz:'Europe/Bucharest',               flag:'🇷🇴'},
  {name:'Sofia',         country:'Bulgaria',       tz:'Europe/Sofia',                   flag:'🇧🇬'},
  {name:'Athens',        country:'Greece',         tz:'Europe/Athens',                  flag:'🇬🇷'},
  {name:'Valletta',      country:'Malta',          tz:'Europe/Malta',                   flag:'🇲🇹'},
  {name:'Nicosia',       country:'Cyprus',         tz:'Asia/Nicosia',                   flag:'🇨🇾'},
  {name:'Chisinau',      country:'Moldova',        tz:'Europe/Chisinau',                flag:'🇲🇩'},
  {name:'Kyiv',          country:'Ukraine',        tz:'Europe/Kyiv',                    flag:'🇺🇦'},
  {name:'Minsk',         country:'Belarus',        tz:'Europe/Minsk',                   flag:'🇧🇾'},
  {name:'Vilnius',       country:'Lithuania',      tz:'Europe/Vilnius',                 flag:'🇱🇹'},
  {name:'Riga',          country:'Latvia',         tz:'Europe/Riga',                    flag:'🇱🇻'},
  {name:'Tallinn',       country:'Estonia',        tz:'Europe/Tallinn',                 flag:'🇪🇪'},
  {name:'Istanbul',      country:'Turkey',         tz:'Europe/Istanbul',                flag:'🇹🇷'},
  {name:'Ankara',        country:'Turkey',         tz:'Europe/Istanbul',                flag:'🇹🇷'},
  {name:'Moscow',        country:'Russia',         tz:'Europe/Moscow',                  flag:'🇷🇺'},
  {name:'Saint Petersburg',country:'Russia',       tz:'Europe/Moscow',                  flag:'🇷🇺'},
  {name:'Yekaterinburg', country:'Russia',         tz:'Asia/Yekaterinburg',             flag:'🇷🇺'},
  {name:'Novosibirsk',   country:'Russia',         tz:'Asia/Novosibirsk',               flag:'🇷🇺'},
  {name:'Vladivostok',   country:'Russia',         tz:'Asia/Vladivostok',               flag:'🇷🇺'},

  // ─── Middle East ─────────────────────────────────────
  {name:'Dubai',         country:'UAE',            tz:'Asia/Dubai',                     flag:'🇦🇪'},
  {name:'Abu Dhabi',     country:'UAE',            tz:'Asia/Dubai',                     flag:'🇦🇪'},
  {name:'Riyadh',        country:'Saudi Arabia',   tz:'Asia/Riyadh',                    flag:'🇸🇦'},
  {name:'Jeddah',        country:'Saudi Arabia',   tz:'Asia/Riyadh',                    flag:'🇸🇦'},
  {name:'Doha',          country:'Qatar',          tz:'Asia/Qatar',                     flag:'🇶🇦'},
  {name:'Kuwait City',   country:'Kuwait',         tz:'Asia/Kuwait',                    flag:'🇰🇼'},
  {name:'Manama',        country:'Bahrain',        tz:'Asia/Bahrain',                   flag:'🇧🇭'},
  {name:'Muscat',        country:'Oman',           tz:'Asia/Muscat',                    flag:'🇴🇲'},
  {name:'Beirut',        country:'Lebanon',        tz:'Asia/Beirut',                    flag:'🇱🇧'},
  {name:'Amman',         country:'Jordan',         tz:'Asia/Amman',                     flag:'🇯🇴'},
  {name:'Damascus',      country:'Syria',          tz:'Asia/Damascus',                  flag:'🇸🇾'},
  {name:'Baghdad',       country:'Iraq',           tz:'Asia/Baghdad',                   flag:'🇮🇶'},
  {name:'Tehran',        country:'Iran',           tz:'Asia/Tehran',                    flag:'🇮🇷'},
  {name:'Jerusalem',     country:'Israel',         tz:'Asia/Jerusalem',                 flag:'🇮🇱'},
  {name:'Tel Aviv',      country:'Israel',         tz:'Asia/Jerusalem',                 flag:'🇮🇱'},
  {name:"Sana'a",        country:'Yemen',          tz:'Asia/Aden',                      flag:'🇾🇪'},

  // ─── Africa ──────────────────────────────────────────
  {name:'Cairo',         country:'Egypt',          tz:'Africa/Cairo',                   flag:'🇪🇬'},
  {name:'Alexandria',    country:'Egypt',          tz:'Africa/Cairo',                   flag:'🇪🇬'},
  {name:'Casablanca',    country:'Morocco',        tz:'Africa/Casablanca',              flag:'🇲🇦'},
  {name:'Rabat',         country:'Morocco',        tz:'Africa/Casablanca',              flag:'🇲🇦'},
  {name:'Algiers',       country:'Algeria',        tz:'Africa/Algiers',                 flag:'🇩🇿'},
  {name:'Tunis',         country:'Tunisia',        tz:'Africa/Tunis',                   flag:'🇹🇳'},
  {name:'Tripoli',       country:'Libya',          tz:'Africa/Tripoli',                 flag:'🇱🇾'},
  {name:'Khartoum',      country:'Sudan',          tz:'Africa/Khartoum',                flag:'🇸🇩'},
  {name:'Lagos',         country:'Nigeria',        tz:'Africa/Lagos',                   flag:'🇳🇬'},
  {name:'Abuja',         country:'Nigeria',        tz:'Africa/Lagos',                   flag:'🇳🇬'},
  {name:'Accra',         country:'Ghana',          tz:'Africa/Accra',                   flag:'🇬🇭'},
  {name:'Dakar',         country:'Senegal',        tz:'Africa/Dakar',                   flag:'🇸🇳'},
  {name:'Abidjan',       country:"Côte d'Ivoire",  tz:'Africa/Abidjan',                 flag:'🇨🇮'},
  {name:'Bamako',        country:'Mali',           tz:'Africa/Bamako',                  flag:'🇲🇱'},
  {name:'Yaoundé',       country:'Cameroon',       tz:'Africa/Douala',                  flag:'🇨🇲'},
  {name:'Kinshasa',      country:'DR Congo',       tz:'Africa/Kinshasa',                flag:'🇨🇩'},
  {name:'Luanda',        country:'Angola',         tz:'Africa/Luanda',                  flag:'🇦🇴'},
  {name:'Nairobi',       country:'Kenya',          tz:'Africa/Nairobi',                 flag:'🇰🇪'},
  {name:'Addis Ababa',   country:'Ethiopia',       tz:'Africa/Addis_Ababa',             flag:'🇪🇹'},
  {name:'Dar es Salaam', country:'Tanzania',       tz:'Africa/Dar_es_Salaam',           flag:'🇹🇿'},
  {name:'Kampala',       country:'Uganda',         tz:'Africa/Kampala',                 flag:'🇺🇬'},
  {name:'Kigali',        country:'Rwanda',         tz:'Africa/Kigali',                  flag:'🇷🇼'},
  {name:'Johannesburg',  country:'South Africa',   tz:'Africa/Johannesburg',            flag:'🇿🇦'},
  {name:'Cape Town',     country:'South Africa',   tz:'Africa/Johannesburg',            flag:'🇿🇦'},
  {name:'Durban',        country:'South Africa',   tz:'Africa/Johannesburg',            flag:'🇿🇦'},
  {name:'Harare',        country:'Zimbabwe',       tz:'Africa/Harare',                  flag:'🇿🇼'},
  {name:'Lusaka',        country:'Zambia',         tz:'Africa/Lusaka',                  flag:'🇿🇲'},
  {name:'Maputo',        country:'Mozambique',     tz:'Africa/Maputo',                  flag:'🇲🇿'},
  {name:'Windhoek',      country:'Namibia',        tz:'Africa/Windhoek',                flag:'🇳🇦'},
  {name:'Gaborone',      country:'Botswana',       tz:'Africa/Gaborone',                flag:'🇧🇼'},
  {name:'Antananarivo',  country:'Madagascar',     tz:'Indian/Antananarivo',            flag:'🇲🇬'},
  {name:'Port Louis',    country:'Mauritius',      tz:'Indian/Mauritius',               flag:'🇲🇺'},

  // ─── Central & South Asia ────────────────────────────
  {name:'Kabul',         country:'Afghanistan',    tz:'Asia/Kabul',                     flag:'🇦🇫'},
  {name:'Karachi',       country:'Pakistan',       tz:'Asia/Karachi',                   flag:'🇵🇰'},
  {name:'Lahore',        country:'Pakistan',       tz:'Asia/Karachi',                   flag:'🇵🇰'},
  {name:'Islamabad',     country:'Pakistan',       tz:'Asia/Karachi',                   flag:'🇵🇰'},
  {name:'Mumbai',        country:'India',          tz:'Asia/Kolkata',                   flag:'🇮🇳'},
  {name:'Delhi',         country:'India',          tz:'Asia/Kolkata',                   flag:'🇮🇳'},
  {name:'Bangalore',     country:'India',          tz:'Asia/Kolkata',                   flag:'🇮🇳'},
  {name:'Kolkata',       country:'India',          tz:'Asia/Kolkata',                   flag:'🇮🇳'},
  {name:'Chennai',       country:'India',          tz:'Asia/Kolkata',                   flag:'🇮🇳'},
  {name:'Hyderabad',     country:'India',          tz:'Asia/Kolkata',                   flag:'🇮🇳'},
  {name:'Dhaka',         country:'Bangladesh',     tz:'Asia/Dhaka',                     flag:'🇧🇩'},
  {name:'Chittagong',    country:'Bangladesh',     tz:'Asia/Dhaka',                     flag:'🇧🇩'},
  {name:'Colombo',       country:'Sri Lanka',      tz:'Asia/Colombo',                   flag:'🇱🇰'},
  {name:'Kathmandu',     country:'Nepal',          tz:'Asia/Kathmandu',                 flag:'🇳🇵'},
  {name:'Thimphu',       country:'Bhutan',         tz:'Asia/Thimphu',                   flag:'🇧🇹'},
  {name:'Malé',          country:'Maldives',       tz:'Indian/Maldives',                flag:'🇲🇻'},
  {name:'Tashkent',      country:'Uzbekistan',     tz:'Asia/Tashkent',                  flag:'🇺🇿'},
  {name:'Almaty',        country:'Kazakhstan',     tz:'Asia/Almaty',                    flag:'🇰🇿'},
  {name:'Astana',        country:'Kazakhstan',     tz:'Asia/Almaty',                    flag:'🇰🇿'},
  {name:'Bishkek',       country:'Kyrgyzstan',     tz:'Asia/Bishkek',                   flag:'🇰🇬'},
  {name:'Dushanbe',      country:'Tajikistan',     tz:'Asia/Dushanbe',                  flag:'🇹🇯'},
  {name:'Ashgabat',      country:'Turkmenistan',   tz:'Asia/Ashgabat',                  flag:'🇹🇲'},
  {name:'Baku',          country:'Azerbaijan',     tz:'Asia/Baku',                      flag:'🇦🇿'},
  {name:'Tbilisi',       country:'Georgia',        tz:'Asia/Tbilisi',                   flag:'🇬🇪'},
  {name:'Yerevan',       country:'Armenia',        tz:'Asia/Yerevan',                   flag:'🇦🇲'},

  // ─── East & Southeast Asia ───────────────────────────
  {name:'Yangon',        country:'Myanmar',        tz:'Asia/Yangon',                    flag:'🇲🇲'},
  {name:'Bangkok',       country:'Thailand',       tz:'Asia/Bangkok',                   flag:'🇹🇭'},
  {name:'Hanoi',         country:'Vietnam',        tz:'Asia/Ho_Chi_Minh',               flag:'🇻🇳'},
  {name:'Ho Chi Minh',   country:'Vietnam',        tz:'Asia/Ho_Chi_Minh',               flag:'🇻🇳'},
  {name:'Phnom Penh',    country:'Cambodia',       tz:'Asia/Phnom_Penh',                flag:'🇰🇭'},
  {name:'Vientiane',     country:'Laos',           tz:'Asia/Vientiane',                 flag:'🇱🇦'},
  {name:'Jakarta',       country:'Indonesia',      tz:'Asia/Jakarta',                   flag:'🇮🇩'},
  {name:'Surabaya',      country:'Indonesia',      tz:'Asia/Jakarta',                   flag:'🇮🇩'},
  {name:'Denpasar',      country:'Indonesia',      tz:'Asia/Makassar',                  flag:'🇮🇩'},
  {name:'Kuala Lumpur',  country:'Malaysia',       tz:'Asia/Kuala_Lumpur',              flag:'🇲🇾'},
  {name:'Singapore',     country:'Singapore',      tz:'Asia/Singapore',                 flag:'🇸🇬'},
  {name:'Bandar Seri Begawan',country:'Brunei',    tz:'Asia/Brunei',                    flag:'🇧🇳'},
  {name:'Manila',        country:'Philippines',    tz:'Asia/Manila',                    flag:'🇵🇭'},
  {name:'Cebu',          country:'Philippines',    tz:'Asia/Manila',                    flag:'🇵🇭'},
  {name:'Dili',          country:'Timor-Leste',    tz:'Asia/Dili',                      flag:'🇹🇱'},
  {name:'Shanghai',      country:'China',          tz:'Asia/Shanghai',                  flag:'🇨🇳'},
  {name:'Beijing',       country:'China',          tz:'Asia/Shanghai',                  flag:'🇨🇳'},
  {name:'Guangzhou',     country:'China',          tz:'Asia/Shanghai',                  flag:'🇨🇳'},
  {name:'Shenzhen',      country:'China',          tz:'Asia/Shanghai',                  flag:'🇨🇳'},
  {name:'Chengdu',       country:'China',          tz:'Asia/Shanghai',                  flag:'🇨🇳'},
  {name:'Hong Kong',     country:'Hong Kong',      tz:'Asia/Hong_Kong',                 flag:'🇭🇰'},
  {name:'Macau',         country:'Macau',          tz:'Asia/Macau',                     flag:'🇲🇴'},
  {name:'Taipei',        country:'Taiwan',         tz:'Asia/Taipei',                    flag:'🇹🇼'},
  {name:'Seoul',         country:'South Korea',    tz:'Asia/Seoul',                     flag:'🇰🇷'},
  {name:'Busan',         country:'South Korea',    tz:'Asia/Seoul',                     flag:'🇰🇷'},
  {name:'Pyongyang',     country:'North Korea',    tz:'Asia/Pyongyang',                 flag:'🇰🇵'},
  {name:'Tokyo',         country:'Japan',          tz:'Asia/Tokyo',                     flag:'🇯🇵'},
  {name:'Osaka',         country:'Japan',          tz:'Asia/Tokyo',                     flag:'🇯🇵'},
  {name:'Ulaanbaatar',   country:'Mongolia',       tz:'Asia/Ulaanbaatar',               flag:'🇲🇳'},

  // ─── Oceania ─────────────────────────────────────────
  {name:'Sydney',        country:'Australia',      tz:'Australia/Sydney',               flag:'🇦🇺'},
  {name:'Canberra',      country:'Australia',      tz:'Australia/Sydney',               flag:'🇦🇺'},
  {name:'Melbourne',     country:'Australia',      tz:'Australia/Melbourne',            flag:'🇦🇺'},
  {name:'Brisbane',      country:'Australia',      tz:'Australia/Brisbane',             flag:'🇦🇺'},
  {name:'Adelaide',      country:'Australia',      tz:'Australia/Adelaide',             flag:'🇦🇺'},
  {name:'Perth',         country:'Australia',      tz:'Australia/Perth',                flag:'🇦🇺'},
  {name:'Darwin',        country:'Australia',      tz:'Australia/Darwin',               flag:'🇦🇺'},
  {name:'Hobart',        country:'Australia',      tz:'Australia/Hobart',               flag:'🇦🇺'},
  {name:'Auckland',      country:'New Zealand',    tz:'Pacific/Auckland',               flag:'🇳🇿'},
  {name:'Wellington',    country:'New Zealand',    tz:'Pacific/Auckland',               flag:'🇳🇿'},
  {name:'Suva',          country:'Fiji',           tz:'Pacific/Fiji',                   flag:'🇫🇯'},
  {name:'Port Moresby',  country:'Papua New Guinea',tz:'Pacific/Port_Moresby',          flag:'🇵🇬'},
  {name:'Nouméa',        country:'New Caledonia',  tz:'Pacific/Noumea',                 flag:'🇳🇨'},
  {name:'Papeete',       country:'French Polynesia',tz:'Pacific/Tahiti',                flag:'🇵🇫'},
  {name:'Hagåtña',       country:'Guam',           tz:'Pacific/Guam',                   flag:'🇬🇺'},
  {name:'Apia',          country:'Samoa',          tz:'Pacific/Apia',                   flag:'🇼🇸'},
  {name:"Nuku'alofa",    country:'Tonga',          tz:'Pacific/Tongatapu',              flag:'🇹🇴'},
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
  workStart:9, workEnd:18,   // working hours (local to each city) used by status badges + meeting planner
  showPlanner:true,
};
const SUPPORT_URL = 'https://www.supportkori.com/thecreade';
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
let refTime       = null;   // ms timestamp being previewed with a city slider; null = live
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

// "GMT+0 · GMT+0" reads badly, so only show the abbreviation when it's a real name (EST, CET…)
function tzLabel(tp) {
  return tp.abbr && !tp.abbr.startsWith('GMT') ? `${tp.abbr} &middot; ${tp.gmtOffset}` : tp.gmtOffset;
}

// Calendar/clock fields of `date` as seen in timezone `tz` (formatters cached: the planner calls this hundreds of times)
const zonedFmtCache = new Map();
function zonedParts(date, tz) {
  let fmt = zonedFmtCache.get(tz);
  if (!fmt) {
    fmt = new Intl.DateTimeFormat('en-US', {
      timeZone: tz, hourCycle: 'h23', weekday: 'short',
      year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric',
    });
    zonedFmtCache.set(tz, fmt);
  }
  const p = {};
  fmt.formatToParts(date).forEach(x => { p[x.type] = x.value; });
  return { y: +p.year, mo: +p.month, d: +p.day, h: +p.hour % 24, mi: +p.minute, wd: p.weekday };
}
// Minutes the timezone is ahead of UTC at that instant (handles DST)
function tzOffsetMins(tz, date) {
  const p = zonedParts(date, tz);
  const asUtc = Date.UTC(p.y, p.mo - 1, p.d, p.h, p.mi);
  return Math.round((asUtc - Math.floor(date.getTime() / 60000) * 60000) / 60000);
}
// Minutes since midnight on the clock in `tz`
function getCityMins(date, tz) {
  const p = zonedParts(date, tz);
  return p.h * 60 + p.mi;
}

// Reference date: the previewed time from a city slider, or now
function getRefDate() { return refTime === null ? new Date() : new Date(refTime); }
function isCustomMode() { return refTime !== null; }

// Working / off-hours / asleep status of a city at `date`
function getCityStatus(date, tz) {
  const p = zonedParts(date, tz);
  const mins = p.h * 60 + p.mi;
  const s = S.settings;
  const weekend = p.wd === 'Sat' || p.wd === 'Sun';
  const night   = mins < 7 * 60 || mins >= 22 * 60;
  if (!weekend && mins >= s.workStart * 60 && mins < s.workEnd * 60)
                return { cls: 'working', icon: '🟢', text: 'Working' };
  if (night)    return { cls: 'asleep',  icon: '🌙', text: 'Asleep' };
  if (weekend)  return { cls: 'weekend', icon: '🏖️', text: 'Weekend' };
  return { cls: 'off', icon: '🟡', text: mins < s.workStart * 60 ? 'Early' : 'Evening' };
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
    // Keep the big "Your Local Time" clock ticking (it lives outside the city loop).
    const localDate = isCustomMode() ? ref : now;
    const llp   = getTimeParts(localDate, localTz);
    const ltEl  = document.getElementById('local-time');
    const ldEl  = document.getElementById('local-date');
    if (ltEl) ltEl.textContent = buildTimeStr(llp, S.settings);
    if (ldEl) ldEl.textContent = llp.dateStr;
    // Sync sliders only in live mode (don't fight the user dragging)
    updateCityCards(ref, !isCustomMode());
    updatePlannerMarker();
  }
}

// Refresh every city card's time, date, status badge and (optionally) slider position
function updateCityCards(ref, syncSliders) {
  S.cities.forEach((city, i) => {
    const tp = getTimeParts(ref, city.tz);
    const timeEl = document.getElementById(`ct-${i}`);
    const dateEl = document.getElementById(`cd-${i}`);
    const stEl   = document.getElementById(`cst-${i}`);
    if (timeEl) timeEl.textContent = buildTimeStr(tp, S.settings);
    if (dateEl) dateEl.textContent = tp.dateStr;
    if (stEl) {
      const st = getCityStatus(ref, city.tz);
      stEl.className = `city-status ${st.cls}`;
      stEl.textContent = `${st.icon} ${st.text}`;
    }
    const sliderEl = document.getElementById(`cs-${i}`);
    if (sliderEl && syncSliders) sliderEl.value = getCityMins(ref, city.tz);
  });
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
  document.getElementById('tab-todo').addEventListener('keydown',   onTodoKeydown);
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

const LOCAL_TZ = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

// "6:30 PM" / "18:30" for minutes since midnight, following the 12h/24h setting
function fmtMins(m) {
  const h = Math.floor(m / 60) % 24, mm = String(m % 60).padStart(2, '0');
  if (S.settings.clockFormat === '24h') return `${String(h).padStart(2, '0')}:${mm}`;
  return `${h % 12 || 12}:${mm} ${h < 12 ? 'AM' : 'PM'}`;
}
// "9 AM" / "09:00" for whole hours (0–24)
function fmtHour(h) { return fmtMins((h % 24) * 60).replace(':00 ', ' '); }

// ─── City slider helpers ──────────────────────────────
// The instant when the clock in `tz` shows `cityMins`, on the calendar day it shows at `base`
function cityTimeToRefDate(tz, cityMins, base = new Date()) {
  const p = zonedParts(base, tz);
  const wall = Date.UTC(p.y, p.mo - 1, p.d, Math.floor(cityMins / 60), cityMins % 60);
  const off = t => tzOffsetMins(tz, new Date(t)) * 60000;
  // Candidates: two-pass estimate, plus the offsets in force half a day either side (covers DST changes)
  const est = wall - off(wall);
  const cands = [wall - off(est), wall - off(wall - 43200000), wall - off(wall + 43200000)];
  const sameDay = q => q.y === p.y && q.mo === p.mo && q.d === p.d;
  const exact = cands.find(t => { const q = zonedParts(new Date(t), tz); return sameDay(q) && q.h * 60 + q.mi === cityMins; });
  if (exact !== undefined) return new Date(exact);
  // The wall time was skipped by a DST jump (e.g. 00:00 → 01:00): land just after the jump, same day
  const later = cands.filter(t => sameDay(zonedParts(new Date(t), tz))).sort((a, b) => b - a)[0];
  return new Date(later ?? cands[0]);
}

function handleCitySlider(cityIndex, cityMins) {
  const city = S.cities[cityIndex];
  if (!city) return;
  refTime = cityTimeToRefDate(city.tz, cityMins, getRefDate()).getTime();
  tick();
  updateCityCards(getRefDate(), true);
  renderLiveHint();
}

// Banner shown while previewing another time
function liveHintHtml() {
  if (!isCustomMode()) return '';
  const tp = getTimeParts(getRefDate(), LOCAL_TZ());
  const t  = buildTimeStr(tp, { ...S.settings, showSeconds: false });
  return `<div class="live-hint">&#128336; Previewing ${tp.dateStr}, ${t} your time
    <button class="live-btn" data-action="slider-live">&#8635; Back to live</button></div>`;
}
function renderLiveHint() {
  const slot = document.getElementById('live-hint-slot');
  if (slot) slot.innerHTML = liveHintHtml();
  const lbl = document.getElementById('local-label');
  if (lbl) lbl.innerHTML = `Your Local Time${isCustomMode() ? ' &middot; Preview' : ''}`;
}

// ─── Meeting planner ──────────────────────────────────
// 48 half-hour slots across *your* day; for each city, is it inside working hours?
const PLANNER_SLOTS = 48;
function plannerStartMs() { return cityTimeToRefDate(LOCAL_TZ(), 0).getTime(); }   // your local midnight today
function plannerData() {
  const start = plannerStartMs();
  const { workStart, workEnd } = S.settings;
  const inHours = (tz, slot) => {
    const m = getCityMins(new Date(start + slot * 1800000 + 900000), tz);   // middle of the slot
    return m >= workStart * 60 && m < workEnd * 60;
  };
  const localTz = LOCAL_TZ();
  const you = S.cities.find(c => c.isLocal);
  const rows = [{ label: 'You', flag: you?.flag || '📍', tz: localTz, you: true }]
    .concat(S.cities.filter(c => !c.isLocal).map(c => ({ label: c.label || c.name, flag: c.flag, tz: c.tz })));
  rows.forEach(r => { r.slots = Array.from({ length: PLANNER_SLOTS }, (_, i) => inHours(r.tz, i)); });
  const clients = rows.filter(r => !r.you);
  const counts  = Array.from({ length: PLANNER_SLOTS }, (_, i) => clients.filter(r => r.slots[i]).length);
  const best    = Math.max(0, ...counts);
  return { rows, clients, counts, best };
}
// Turn the best slots into "6:00 PM – 8:00 PM" ranges
function plannerRanges(counts, best) {
  const out = [];
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] !== best || best === 0) continue;
    let j = i; while (j + 1 < counts.length && counts[j + 1] === best) j++;
    out.push(`${fmtMins(i * 30)} – ${fmtMins(((j + 1) * 30) % 1440)}`);
    i = j;
  }
  return out;
}
function plannerHtml() {
  const s = S.settings;
  const open = s.showPlanner !== false;
  const hd = `<button class="planner-hd" data-action="toggle-planner" aria-expanded="${open}">
      <span class="section-title">&#129309; Best time to meet</span>
      <span class="planner-hours">${fmtHour(s.workStart)}–${fmtHour(s.workEnd)} · weekdays</span>
      <span class="planner-chev" aria-hidden="true">${open ? '&#9662;' : '&#9656;'}</span>
    </button>`;
  if (!open) return `<div class="card planner">${hd}</div>`;

  const { rows, clients, counts, best } = plannerData();
  let summary;
  if (!clients.length) {
    summary = `<div class="planner-summary muted">Add a client's city to see when you can meet.</div>`;
  } else {
    const ranges = plannerRanges(counts, best).join(', ');
    summary = best === clients.length
      ? `<div class="planner-summary good">&#9989; ${clients.length > 1 ? 'All clients' : esc(clients[0].label)} working: <b>${ranges}</b> your time</div>`
      : best === 0
        ? `<div class="planner-summary warn">&#9888;&#65039; No overlap with working hours today.</div>`
        : `<div class="planner-summary warn">&#9888;&#65039; No time when all ${clients.length} are working. Best (${best} of ${clients.length}): <b>${ranges}</b></div>`;
  }
  const rowsHtml = rows.map(r => `
    <div class="planner-row${r.you ? ' you' : ''}">
      <span class="planner-lbl" title="${esc(r.label)}">${r.flag || ''} ${esc(r.label)}</span>
      <div class="planner-bar">${r.slots.map((on, i) =>
        `<span class="pc${on ? ' on' : ''}${clients.length && counts[i] === best && best > 0 ? ' best' : ''}" data-action="planner-pick" data-slot="${i}" title="${fmtMins(i * 30)}"></span>`).join('')}
      </div>
    </div>`).join('');
  return `<div class="card planner">${hd}
    ${summary}
    <div class="planner-grid">
      ${rowsHtml}
      <div class="planner-row axis"><span class="planner-lbl"></span>
        <div class="planner-axis"><span>12a</span><span>6a</span><span>12p</span><span>6p</span><span>12a</span></div>
      </div>
      <div class="planner-now" id="planner-now" aria-hidden="true"></div>
    </div>
    <div class="planner-tip">Bars are in your time. Tap a bar to preview that time.</div>
  </div>`;
}
// Vertical line showing the current (or previewed) time on the planner
function updatePlannerMarker() {
  const el = document.getElementById('planner-now');
  const bar = document.querySelector('.planner-bar');
  if (!el || !bar) return;
  const frac = (getRefDate().getTime() - plannerStartMs()) / 86400000;
  if (frac < 0 || frac >= 1) { el.style.display = 'none'; return; }
  const grid = el.parentElement.getBoundingClientRect(), b = bar.getBoundingClientRect();
  el.style.display = '';
  el.style.left = `${b.left - grid.left + frac * b.width}px`;
}

function renderTimeTab() {
  const ref     = getRefDate();
  const lp      = getTimeParts(ref, LOCAL_TZ());

  let citiesHtml = '';
  if (S.cities.length === 0) {
    citiesHtml = `<div class="no-items"><div class="no-items-icon">&#127757;</div><div>No cities added yet.</div></div>`;
  } else {
    S.cities.forEach((city, i) => {
      const tp = getTimeParts(ref, city.tz);
      const st = getCityStatus(ref, city.tz);
      const title = city.label || city.name;
      const sub   = city.label ? `${esc(city.name)}, ${esc(city.country)}` : esc(city.country);
      citiesHtml += `
        <div class="card city-card" data-drop-index="${i}">
          <div class="city-main">
            <div class="drag-handle-area" draggable="true" data-drag-index="${i}" role="button" tabindex="0" aria-label="Drag to reorder"><span aria-hidden="true">&#x2807;</span></div>
            <div class="city-info">
              <div class="city-name"><span>${city.flag || '&#127758;'}</span><span class="city-title">${esc(title)}</span>
                ${city.isLocal ? '<span class="you-badge">YOU</span>' : ''}
              </div>
              <div class="city-sub">${sub} &middot; ${tzLabel(tp)}</div>
              <span class="city-status ${st.cls}" id="cst-${i}">${st.icon} ${st.text}</span>
            </div>
            <div class="city-time-block">
              <div class="city-time" id="ct-${i}">${buildTimeStr(tp, S.settings)}</div>
              <div class="city-date"  id="cd-${i}">${tp.dateStr}</div>
            </div>
            <div class="city-actions">
              <button class="icon-btn" data-action="edit-city" data-index="${i}" aria-label="Rename ${esc(title)}" title="Rename (e.g. client name)">&#9998;</button>
              <button class="icon-btn" data-action="remove-city" data-index="${i}" aria-label="Remove ${esc(title)}" title="Remove">&#215;</button>
            </div>
          </div>
          <div class="city-slider-wrap" draggable="false">
            <input type="range" class="city-slider" id="cs-${i}" data-city-index="${i}" draggable="false" aria-label="Time slider for ${esc(title)}"
              min="0" max="1439" value="${getCityMins(ref, city.tz)}">
            <div class="slider-ticks-sm">
              <span>12a</span><span>6a</span><span>12p</span><span>6p</span><span>12a</span>
            </div>
          </div>
        </div>`;
    });
  }

  document.getElementById('tab-time').innerHTML = `
    <div class="local-block">
      <div class="local-label" id="local-label">Your Local Time${isCustomMode() ? ' &middot; Preview' : ''}</div>
      <div class="local-time" id="local-time">${buildTimeStr(lp, S.settings)}</div>
      <div class="local-date" id="local-date">${lp.dateStr}</div>
      <div class="local-tz">${tzLabel(lp)}</div>
    </div>
    <div id="live-hint-slot">${liveHintHtml()}</div>
    <div class="section-hd">
      <span class="section-title">Time Zones</span>
      <button class="add-btn" data-action="add-city">+ Add City</button>
    </div>
    <div id="cities-list">${citiesHtml}</div>
    ${plannerHtml()}
  `;
  setupDragDrop(document.getElementById('cities-list'), 'city');
  updatePlannerMarker();
}

function onTimeClick(e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const a = btn.dataset.action;
  if (a === 'add-city') showAddCityModal();
  if (a === 'edit-city') showRenameCityModal(+btn.dataset.index);
  if (a === 'remove-city') {
    S.cities.splice(+btn.dataset.index, 1);
    saveState().then(() => renderTimeTab());
  }
  if (a === 'slider-live') {
    refTime = null;
    renderTimeTab();
  }
  if (a === 'toggle-planner') {
    S.settings.showPlanner = S.settings.showPlanner === false;
    saveState().then(() => renderTimeTab());
  }
  if (a === 'planner-pick') {
    refTime = plannerStartMs() + (+btn.dataset.slot) * 1800000;
    renderTimeTab();
  }
}
function onTimeInput(e) {
  if (e.target.classList.contains('city-slider')) {
    handleCitySlider(+e.target.dataset.cityIndex, +e.target.value);
  }
}
function onTimeChange(e) {
  // Per-city sliders are handled in onTimeInput; nothing to do on change.
}

// ─── Rename City Modal (client names) ────────────────
function showRenameCityModal(index) {
  const city = S.cities[index];
  if (!city) return;
  showModal('Rename city', `
    <div class="setting-desc" style="margin-bottom:8px">Give ${esc(city.name)} a name you'll recognise, like a client's name. Leave it empty to show the city name.</div>
    <input class="modal-search" id="city-label" maxlength="32" placeholder="e.g. Shawn (Minneapolis)" value="${esc(city.label || '')}" autocomplete="off">
    <button class="modal-save-btn" data-action="save-label">Save</button>
  `, sheet => {
    const inp = sheet.querySelector('#city-label');
    inp.focus(); inp.select();
    const save = () => {
      const v = inp.value.trim();
      if (v) city.label = v; else delete city.label;
      saveState().then(() => { hideModal(); renderTimeTab(); });
    };
    sheet.querySelector('[data-action="save-label"]').addEventListener('click', save);
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') save(); });
  });
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

  const ratesLine = S.ratesTimestamp
    ? `<div class="rates-line">Rates: ${new Date(S.ratesTimestamp).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}
       · <a href="#" data-action="refresh-rates" style="color:var(--accent)">Refresh</a></div>`
    : `<div class="rates-line" style="color:var(--warn)">⚠ Fetching rates…</div>`;

  document.getElementById('tab-currency').innerHTML = `
    <div class="curr-input-row">
      <div class="curr-input-wrap">
        <span class="sym">${bInfo.symbol}</span>
        <input type="number" id="cur-amt" value="${amt}" min="0" step="any" aria-label="Amount in ${base}">
      </div>
      <select class="base-sel" id="cur-base" aria-label="Base currency">${baseOpts}</select>
    </div>
    <div class="fee-chips-row">${chipsHtml}</div>
    ${ratesLine}
    <div class="curr-list-wrap">
      <div id="currencies-list">${currencyRowsHtml()}</div>
      <button class="green-add-btn" data-action="add-currency">+ Add Currency</button>
    </div>
  `;

  setupDragDrop(document.getElementById('currencies-list'), 'currency');
}

// Converted rows only — re-rendered on each keystroke without touching the amount input
function currencyRowsHtml() {
  const s    = S.settings;
  const base = s.baseCurrency;
  const amt  = s.currencyAmount??100;
  const fps  = s.feeProviders||[];
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
          <button class="curr-del" data-action="remove-currency" data-index="${i}" aria-label="Remove ${code}">×</button>
        </div>`;
    });
  }
  return rowsHtml;
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
    const list = document.getElementById('currencies-list');
    if (list) list.innerHTML = currencyRowsHtml();
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
      // Start, or resume whichever phase was paused (a paused break stays a break)
      const resumePhase = ph==='paused' ? (S.pomo.pausedPhase||'work') : 'work';
      const secs = ph==='paused' ? (S.pomo.remainSecs||S.pomo.settings.workMins*60)
                                 : S.pomo.settings.workMins*60;
      S.pomo.phase=resumePhase;
      S.pomo.pausedPhase=null;
      S.pomo.endTime=Date.now()+secs*1000;
      S.pomo.remainSecs=null;
      chrome.alarms.create('pomo_end',{when:S.pomo.endTime});
      if(resumePhase==='work'&&S.pomo.settings.blockingEnabled) enableSiteBlocking(S.pomo.settings.blockedSites);
      saveState().then(()=>renderPomoTab());
    } else {
      // Pause
      S.pomo.remainSecs=getPomoRemaining();
      S.pomo.pausedPhase=ph;
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
    S.pomo.phase='idle';S.pomo.endTime=null;S.pomo.remainSecs=null;S.pomo.pausedPhase=null;S.pomo.sessions=0;
    S.pomo.pendingNotif=null;
    try { chrome.action.setBadgeText({ text: '' }); } catch (_) {}
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
  const clamp=(v,lo,hi,def)=>{ v=Math.round(+v); return v>=lo ? Math.min(v,hi) : def; };
  if(id==='pomo-work')     {S.pomo.settings.workMins=clamp(e.target.value,1,120,25);saveState();}
  if(id==='pomo-break')    {S.pomo.settings.breakMins=clamp(e.target.value,1,60,5);saveState();}
  if(id==='pomo-lbreak')   {S.pomo.settings.longBreakMins=clamp(e.target.value,1,60,15);saveState();}
  if(id==='pomo-sessions') {S.pomo.settings.sessionsBeforeLong=clamp(e.target.value,2,10,4);saveState();}
  // While idle the big timer shows the focus length, so keep it in step
  if(id==='pomo-work'&&S.pomo.phase==='idle'){
    const el=document.getElementById('pomo-timer');
    if(el) el.textContent=fmtPomoTime(getPomoRemaining());
  }
}

// The background worker moves the timer between focus/break while the popup is open:
// pick those changes up so the popup never shows a stale 00:00 or overwrites them.
function watchBackgroundChanges() {
  try {
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area !== 'local' || !changes.pomo?.newValue) return;
      const nv = changes.pomo.newValue;
      const moved = nv.phase !== S.pomo.phase || nv.endTime !== S.pomo.endTime || nv.pendingNotif?.title !== S.pomo.pendingNotif?.title;
      S.pomo = {...DEFAULT_POMO, ...nv, settings:{...DEFAULT_POMO.settings, ...(nv.settings||{})}};
      if (moved && currentTab === 'pomo') {
        if (pomoInterval) { clearInterval(pomoInterval); pomoInterval = null; }
        renderPomoTab();
      }
    });
  } catch (_) {}
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
      <input class="todo-input" id="todo-inp" type="text"
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
    const priority = pri?.value || 'medium';
    S.todos.push({ id: `t${Date.now()}`, text, done: false, priority, createdAt: Date.now() });
    inp.value = '';
    saveState().then(() => {
      renderTodoTab();
      document.getElementById('todo-pri').value = priority;   // keep the chosen priority for the next task
      document.getElementById('todo-inp')?.focus();
    });
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
function onTodoKeydown(e) {
  if (e.target.id === 'todo-inp' && e.key === 'Enter' && !e.isComposing) {
    e.preventDefault();
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
// playWebAudioSound() lives in sounds.js (shared with the offscreen alert player)

// ═══════════════════════════════════════════════════════
//  SETTINGS TAB (full replacement)
// ═══════════════════════════════════════════════════════
function appVersion() {
  try { return chrome.runtime.getManifest().version; } catch (_) { return ''; }
}
function hourOpts(from, to, selected) {
  let html = '';
  for (let h = from; h <= to; h++) html += `<option value="${h}"${h === selected ? ' selected' : ''}>${h === 24 ? 'Midnight' : fmtHour(h)}</option>`;
  return html;
}

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
      <div class="setting-row">
        <div><div class="setting-label">Working Hours</div><div class="setting-desc">Used for client status and "Best time to meet"</div></div>
        <div class="work-hours">
          <select class="base-sel" data-setting="workStart" aria-label="Working hours start">${hourOpts(0, 23, s.workStart)}</select>
          <span class="input-suffix">to</span>
          <select class="base-sel" data-setting="workEnd" aria-label="Working hours end">${hourOpts(1, 24, s.workEnd)}</select>
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
        <button class="coffee-btn" data-action="open-url" data-url="${SUPPORT_URL}"
           aria-label="Buy me a coffee on Support Kori">&#x2615; Buy me a coffee</button>
      </div>
      <div class="setting-row" style="flex-direction:column;align-items:flex-start;gap:4px">
        <div class="setting-label">ValuTime v${appVersion()}</div>
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
  // Working hours: keep the end after the start
  if (e.target.dataset.setting === 'workStart' || e.target.dataset.setting === 'workEnd') {
    const s = S.settings;
    s[e.target.dataset.setting] = +e.target.value;
    if (s.workEnd <= s.workStart) {
      if (e.target.dataset.setting === 'workStart') s.workEnd = s.workStart + 1;
      else s.workStart = s.workEnd - 1;
    }
    saveState().then(() => renderSettingsTab());
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
  // Assigned (not added) so it survives clicks inside the sheet and never stacks up
  backdrop.onclick = e => {
    if (e.target === backdrop || e.target.closest('[data-action="close-modal"]')) hideModal();
  };
  if (onReady) onReady(sheet);
}
function hideModal() { document.getElementById('modal-backdrop').classList.add('hidden'); }
// Escape closes any open modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !document.getElementById('modal-backdrop')?.classList.contains('hidden')) hideModal();
});

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
  watchBackgroundChanges();
  renderCurrentTab();
  startClock();
  fetchRatesIfNeeded();
});
