type ExpiryDate = {
  month: string;
  year: string;
};

type Provider =
  | 'American Express'
  | 'Bancontact'
  | 'Cartes Bancaires'
  | 'China UnionPay'
  | 'Dankort'
  | 'Diners'
  | 'Discover'
  | 'Elo'
  | 'Hipercard'
  | 'JCB'
  | 'Maestro'
  | 'Mastercard'
  | 'UATP'
  | 'Visa'
  | 'V Pay';

// ISO 3166-1 alpha-2 country code
// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// prettier-ignore
type CountryCode =
   'AD'|'AE'|'AF'|'AG'|'AI'|'AL'|'AM'|'AO'|'AQ'|'AR'|'AS'|'AT'|'AU'|'AW'|'AX'|'AZ'
  |'BA'|'BB'|'BD'|'BE'|'BF'|'BG'|'BH'|'BI'|'BJ'|'BL'|'BM'|'BN'|'BO'|'BQ'|'BR'|'BS'|'BT'|'BV'|'BW'|'BY'|'BZ'
  |'CA'|'CC'|'CD'|'CF'|'CG'|'CH'|'CI'|'CK'|'CL'|'CM'|'CN'|'CO'|'CR'|'CU'|'CV'|'CW'|'CX'|'CY'|'CZ'
  |'DE'|'DJ'|'DK'|'DM'|'DO'|'DZ'|'EC'
  |'EE'|'EG'|'EH'|'ER'|'ES'|'ET'
  |'FI'|'FJ'|'FK'|'FM'|'FO'|'FR'
  |'GA'|'GB'|'GD'|'GE'|'GF'|'GG'|'GH'|'GI'|'GL'|'GM'|'GN'|'GP'|'GQ'|'GR'|'GS'|'GT'|'GU'|'GW'|'GY'
  |'HK'|'HM'|'HN'|'HR'|'HT'|'HU'
  |'ID'|'IE'|'IL'|'IM'|'IN'|'IO'|'IQ'|'IR'|'IS'|'IT'
  |'JE'|'JM'|'JO'|'JP'
  |'KE'|'KG'|'KH'|'KI'|'KM'|'KN'|'KP'|'KR'|'KW'|'KY'|'KZ'
  |'LA'|'LB'|'LC'|'LI'|'LK'|'LR'|'LS'|'LT'|'LU'|'LV'|'LY'
  |'MA'|'MC'|'MD'|'ME'|'MF'|'MG'|'MH'|'MK'|'ML'|'MM'|'MN'|'MO'|'MP'|'MQ'|'MR'|'MS'|'MT'|'MU'|'MV'|'MW'|'MX'|'MY'|'MZ'
  |'NA'|'NC'|'NE'|'NF'|'NG'|'NI'|'NL'|'NO'|'NP'|'NR'|'NU'|'NZ'
  |'OM'
  |'PA'|'PE'|'PF'|'PG'|'PH'|'PK'|'PL'|'PM'|'PN'|'PR'|'PS'|'PT'|'PW'|'PY'
  |'QA'
  |'RE'|'RO'|'RS'|'RU'|'RW'
  |'SA'|'SB'|'SC'|'SD'|'SE'|'SG'|'SH'|'SI'|'SJ'|'SK'|'SL'|'SM'|'SN'|'SO'|'SR'|'SS'|'ST'|'SV'|'SX'|'SY'|'SZ'
  |'TC'|'TD'|'TF'|'TG'|'TH'|'TJ'|'TK'|'TL'|'TM'|'TN'|'TO'|'TR'|'TT'|'TV'|'TW'|'TZ'
  |'UA'|'UG'|'UM'|'US'|'UY'|'UZ'
  |'VA'|'VC'|'VE'|'VG'|'VI'|'VN'|'VU'
  |'WF'|'WS'
  |'YE'|'YT'
  |'ZA'|'ZM'|'ZW';

type Card = {
  provider: Provider;
  number: string;
  country: CountryCode;
  expiryDate: ExpiryDate;
  securityCode?: string;
  username?: string;
  password?: string;
  description?: string;
  pin?: string;
  smsOnPC?: string;
  smsOnMobile?: string;
  cellPhone?: string;
};

const defaultExpiryDate: ExpiryDate = { month: '03', year: '2030' };
const defaultSecurityCode = '737';

const cards: Card[] = [
  {
    provider: 'American Express',
    country: 'NL',
    number: '3700 0000 0000 002',
    expiryDate: defaultExpiryDate,
    securityCode: '7373',
  },
  {
    provider: 'American Express',
    country: 'NL',
    number: '3700 0000 0100 018',
    expiryDate: defaultExpiryDate,
  },
  {
    provider: 'Bancontact',
    country: 'BE',
    number: '6703 4444 4444 4449',
    expiryDate: defaultExpiryDate,
    username: 'user',
    password: 'password',
  },
  {
    provider: 'Bancontact',
    country: 'BE',
    number: '6703 0000 0000 0000 003',
    expiryDate: defaultExpiryDate,
    username: 'user',
    password: 'password',
  },
  {
    provider: 'Cartes Bancaires',
    country: 'FR',
    number: '4035 5010 0000 0008',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Visa Debit',
  },
  {
    provider: 'Cartes Bancaires',
    country: 'FR',
    number: '4360 0000 0100 0005',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Cartes Bancaires',
  },
  {
    provider: 'China UnionPay',
    country: 'CN',
    number: '8171 9999 2766 0000',
    expiryDate: { month: '10', year: '2030' },
    securityCode: defaultSecurityCode,
    description: 'ExpressPay Credit Card',
  },
  {
    provider: 'China UnionPay',
    country: 'CN',
    number: '8171 9999 0000 0000 021',
    expiryDate: { month: '10', year: '2030' },
    securityCode: defaultSecurityCode,
    description: 'ExpressPay Credit Card',
  },
  {
    provider: 'China UnionPay',
    country: 'CN',
    number: '6243 0300 0000 0001',
    expiryDate: { month: '10', year: '2020' },
    securityCode: defaultSecurityCode,
    description: 'ExpressPay Credit Card',
  },
  {
    provider: 'China UnionPay',
    country: 'CN',
    number: '6250947000000014',
    expiryDate: { month: '12', year: '2033' },
    securityCode: '123',
    description: 'SecurePay Credit Card',
    smsOnPC: '111111',
    smsOnMobile: '123456',
    cellPhone: '+852 1111 2222',
  },
  {
    provider: 'China UnionPay',
    country: 'CN',
    number: '6250946000000016',
    expiryDate: defaultExpiryDate,
    description: 'SecurePay Debit Card',
    pin: '111111',
    smsOnPC: '111111',
    smsOnMobile: '123456',
    cellPhone: '+852 1111 2222',
  },
  {
    provider: 'China UnionPay',
    country: 'CN',
    number: '6250947000000014',
    expiryDate: defaultExpiryDate,
    securityCode: '123',
    description: 'SecurePlus Credit Card',
    cellPhone: '+852 1111 2222',
  },
  {
    provider: 'China UnionPay',
    country: 'CN',
    number: '6250946000000016',
    expiryDate: { month: '12', year: '2033' },
    securityCode: '123',
    description: 'SecurePlus Debit Card',
    pin: '111111',
    cellPhone: '+852 1111 2222',
  },
  {
    provider: 'Dankort',
    country: 'DK',
    number: '5019 5555 4444 5555',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
  },
  {
    provider: 'Diners',
    country: 'US',
    number: '3600 6666 3333 44',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
  },
  {
    provider: 'Diners',
    country: 'NL',
    number: '3607 0500 0010 20',
    expiryDate: defaultExpiryDate,
  },
  {
    provider: 'Discover',
    country: 'US',
    number: '6011 6011 6011 6611',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
  },
  {
    provider: 'Discover',
    country: 'GB',
    number: '6445 6445 6445 6445',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
  },
  {
    provider: 'Elo',
    country: 'BR',
    number: '5066 9911 1111 1118',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
  },
  {
    provider: 'Hipercard',
    country: 'BR',
    number: '6062 8288 8866 6688',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
  },
  {
    provider: 'JCB',
    country: 'US',
    number: '3569 9900 1009 5841',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Consumer',
  },
  {
    provider: 'Maestro',
    country: 'US',
    number: '6771 7980 2100 0008',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
  },
  {
    provider: 'Mastercard',
    number: '5101 1800 0000 0007',
    country: 'TR',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Commercial Credit',
  },
  {
    provider: 'Mastercard',
    number: '2222 4000 7000 0005',
    country: 'CA',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Commercial Debit',
  },
  {
    provider: 'Mastercard',
    number: '5100 2900 2900 2909',
    country: 'NL',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Consumer',
  },
  {
    provider: 'Mastercard',
    number: '5555 3412 4444 1115',
    country: 'NL',
    expiryDate: defaultExpiryDate,
    description: 'Consumer',
  },
  {
    provider: 'Mastercard',
    number: '5577 0000 5577 0004',
    country: 'PL',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Consumer',
  },
  {
    provider: 'Mastercard',
    number: '5136 3333 3333 3335',
    country: 'FR',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Consumer',
  },
  {
    provider: 'Mastercard',
    number: '5585 5585 5585 5583',
    country: 'ES',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Consumer',
  },
  {
    provider: 'Mastercard',
    number: '5555 4444 3333 1111',
    country: 'GB',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Consumer',
  },
  {
    provider: 'Mastercard',
    number: '2222 4107 4036 0010',
    country: 'NL',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Corporate',
  },
  {
    provider: 'Mastercard',
    number: '5555 5555 5555 4444',
    country: 'GB',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Corporate',
  },
  {
    provider: 'Mastercard',
    number: '2222 4107 0000 0002',
    country: 'NL',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Corporate Credit',
  },
  {
    provider: 'Mastercard',
    number: '2222 4000 1000 0008',
    country: 'CA',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Credit',
  },
  {
    provider: 'Mastercard',
    number: '2223 0000 4841 0010',
    country: 'NL',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Credit',
  },
  {
    provider: 'Mastercard',
    number: '2222 4000 6000 0007',
    country: 'CA',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Debit',
  },
  {
    provider: 'Mastercard',
    number: '2223 5204 4356 0010',
    country: 'NL',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Debit',
  },
  {
    provider: 'Mastercard',
    number: '5500 0000 0000 0004',
    country: 'US',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Debit',
  },
  {
    provider: 'Mastercard',
    number: '2222 4000 3000 0004',
    country: 'CA',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Fleet Credit',
  },
  {
    provider: 'Mastercard',
    number: '6771 7980 2500 0004',
    country: 'US',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Mastercard',
  },
  {
    provider: 'Mastercard',
    number: '5100 0600 0000 0002',
    country: 'US',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Premium Credit',
  },
  {
    provider: 'Mastercard',
    number: '5100 7050 0000 0002',
    country: 'RU',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Premium Debit',
  },
  {
    provider: 'Mastercard',
    number: '5103 2219 1119 9245',
    country: 'BR',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Prepaid',
  },
  {
    provider: 'Mastercard',
    number: '5424 0000 0000 0015',
    country: 'EC',
    expiryDate: defaultExpiryDate,
    description: 'Pro',
  },
  {
    provider: 'Mastercard',
    number: '2222 4000 5000 0009',
    country: 'CA',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Purchasing Credit',
  },
  {
    provider: 'Mastercard',
    number: '5106 0400 0000 0008',
    country: 'EC',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Super Premium Debit',
  },
  {
    provider: 'UATP',
    number: '1354 1001 4004 955',
    country: 'US',
    expiryDate: { month: '06', year: '2022' },
    securityCode: defaultSecurityCode,
  },
  {
    provider: 'Visa',
    number: '4111 1111 4555 1142',
    country: 'NL',
    expiryDate: defaultExpiryDate,
    description: 'Classic',
  },
  {
    provider: 'Visa',
    number: '4988 4388 4388 4305',
    country: 'ES',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Classic',
  },
  {
    provider: 'Visa',
    number: '4166 6766 6766 6746',
    country: 'NL',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Classic',
  },
  {
    provider: 'Visa',
    number: '4646 4646 4646 4644',
    country: 'PL',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Classic',
  },
  {
    provider: 'Visa',
    number: '4000 6200 0000 0007',
    country: 'US',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Commercial Credit',
  },
  {
    provider: 'Visa',
    number: '4000 0600 0000 0006',
    country: 'US',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Commercial Debit',
  },
  {
    provider: 'Visa',
    number: '4293 1891 0000 0008',
    country: 'AU',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Commercial Premium Credit',
  },
  {
    provider: 'Visa',
    number: '4988 0800 0000 0000',
    country: 'IN',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Commercial Premium Debit',
  },
  {
    provider: 'Visa',
    number: '4111 1111 1111 1111',
    country: 'NL',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Consumer',
  },
  {
    provider: 'Visa',
    number: '4444 3333 2222 1111',
    country: 'GB',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Corporate',
  },
  {
    provider: 'Visa',
    number: '4001 5900 0000 0001',
    country: 'IL',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Corporate Credit',
  },
  {
    provider: 'Visa',
    number: '4000 1800 0000 0002',
    country: 'IN',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Corporate Debit',
  },
  {
    provider: 'Visa',
    number: '4000 0200 0000 0000',
    country: 'US',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Credit',
  },
  {
    provider: 'Visa',
    number: '4000 1600 0000 0004',
    country: 'IN',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Debit',
  },
  {
    provider: 'Visa',
    number: '4002 6900 0000 0008',
    country: 'AU',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Debit',
  },
  {
    provider: 'Visa',
    number: '4400 0000 0000 0008',
    country: 'US',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Debit',
  },
  {
    provider: 'Visa',
    number: '4484 6000 0000 0004',
    country: 'US',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Fleet Credit',
  },
  {
    provider: 'Visa',
    number: '4607 0000 0000 0009',
    country: 'MX',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Fleet Debit',
  },
  {
    provider: 'Visa',
    number: '4977 9494 9494 9497',
    country: 'FR',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Gold',
  },
  {
    provider: 'Visa',
    number: '4000 6400 0000 0005',
    country: 'AZ',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Premium Credit',
  },
  {
    provider: 'Visa',
    number: '4003 5500 0000 0003',
    country: 'TW',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Premium Credit',
  },
  {
    provider: 'Visa',
    number: '4000 7600 0000 0001',
    country: 'MU',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Premium Debit',
  },
  {
    provider: 'Visa',
    number: '4017 3400 0000 0003',
    country: 'RU',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Premium Debit',
  },
  {
    provider: 'Visa',
    number: '4005 5190 0000 0006',
    country: 'US',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Purchasing Credit',
  },
  {
    provider: 'Visa',
    number: '4131 8400 0000 0003',
    country: 'GT',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Purchasing Debit',
  },
  {
    provider: 'Visa',
    number: '4035 5010 0000 0008',
    country: 'FR',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Visa',
  },
  {
    provider: 'Visa',
    number: '4151 5000 0000 0008',
    country: 'US',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Visa Credit',
  },
  {
    provider: 'Visa',
    number: '4571 0000 0000 0001',
    country: 'DK',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Visa Dankort',
  },
  {
    provider: 'Visa',
    number: '4199 3500 0000 0002',
    country: 'FR',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Visa Proprietary',
  },
  {
    provider: 'Visa',
    number: '4001 0200 0000 0009',
    country: 'BR',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
    description: 'Visa Electron',
  },
  {
    provider: 'V Pay',
    number: '4013 2500 0000 0000 006',
    country: 'PL',
    expiryDate: defaultExpiryDate,
    securityCode: defaultSecurityCode,
  },
];

export default cards;
