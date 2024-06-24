export type Country = {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  langauges: {
    fra: string;
  };
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  coatOfArms: {
    png?: string;
    svg?: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postallCode: {
    format: string;
    regex: string;
  };
};

export type CountryName = {
  common: string;
  official: string;
  nativeName: Translations;
};

export type Currencies = {
  XPF: {
    name: string;
    symborl: string;
  };
};

export type Idd = {
  root: string;
  suffixes: string[];
};

export type Translations = {
  ara?: Translation;
  bre?: Translation;
  ces?: Translation;
  cym?: Translation;
  deu?: Translation;
  est?: Translation;
  fin?: Translation;
  fra?: Translation;
  hrv?: Translation;
  hun?: Translation;
  ita?: Translation;
  jpn?: Translation;
  kor?: Translation;
  nld?: Translation;
  per?: Translation;
  pol?: Translation;
  por?: Translation;
  rus?: Translation;
  slk?: Translation;
  spa?: Translation;
  srp?: Translation;
  swe?: Translation;
  tur?: Translation;
  urd?: Translation;
  zho?: Translation;
};

export type Translation = {
  official: string;
  common: string;
};

export type Demonyms = {
  eng: {
    f: string;
    m: string;
  };
};

export type Car = {
  signs: string[];
  sid: string;
};
