export type Country = {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official?: string;
  };
  region: string;
  population: string;
  languages: Object;
  borders: [];
  coatOfArms?: {
    png: string;
    svg: string;
  };
};
