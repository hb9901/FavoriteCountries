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

  langauges: { [key: string]: string };
  translations: { [key: string]: TTranslation };
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

export type TExtendedCountry<IsCard extends boolean = false> = {
  isSelected: boolean;
} & TCountry<IsCard>;

export type TCountryName = {
  common: string;
  official: string;
  nativeName: { [key: string]: TTranslation };
};

export type TFlags = {
  png: string;
  svg: string;
  alt?: string;
};

export type TCurrencies = {
  [key: string]: {
    name: string;
    symborl: string;
  };
};

export type TIdd = {
  root: string;
  suffixes: string[];
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
