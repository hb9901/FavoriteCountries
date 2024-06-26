export type TCountry<IsCard extends boolean = false> = {
  name: TCountryName;
  flags: TFlags;
  capital: string[];
} & (IsCard extends true ? object : TCountryEtc);

export type TCountryEtc = {
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  unMember: boolean;
  currencies: TCurrencies;
  idd: TIdd;
  altSpellings: string[];
  region: string;
  subregion: string;
  langauges: {
    fra: string;
  };
  translations: TTranslations;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: TDemonyms;
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  car: TCar;
  timezones: string[];
  continents: string[];
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

export type TCountryName = {
  common: string;
  official: string;
  nativeName: TTranslations;
};

export type TFlags = {
    png: string;
    svg: string;
    alt?: string;
  }

export type TCurrencies = {
  XPF: {
    name: string;
    symborl: string;
  };
};

export type TIdd = {
  root: string;
  suffixes: string[];
};

export type TTranslations = {
  ara?: TTranslation;
  bre?: TTranslation;
  ces?: TTranslation;
  cym?: TTranslation;
  deu?: TTranslation;
  est?: TTranslation;
  fin?: TTranslation;
  fra?: TTranslation;
  hrv?: TTranslation;
  hun?: TTranslation;
  ita?: TTranslation;
  jpn?: TTranslation;
  kor?: TTranslation;
  nld?: TTranslation;
  per?: TTranslation;
  pol?: TTranslation;
  por?: TTranslation;
  rus?: TTranslation;
  slk?: TTranslation;
  spa?: TTranslation;
  srp?: TTranslation;
  swe?: TTranslation;
  tur?: TTranslation;
  urd?: TTranslation;
  zho?: TTranslation;
};

export type TTranslation = {
  official: string;
  common: string;
};

export type TDemonyms = {
  eng: {
    f: string;
    m: string;
  };
};

export type TCar = {
  signs: string[];
  sid: string;
};
