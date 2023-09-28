export interface Person {
  homeworld: string;
  name: string;
  height: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  gender: string;
  birth_year: string;
}

export interface Planet {
  name: string;
  climate: string;
  gravity: string;
  diameter: string;
  terrain: string;
}

export interface Starship {
  name: string;
  manufacturer: string;
  length: string;
  model: string;
  consumables: string;
}

export interface TabsData {
  people: Person[];
  planets: Planet[];
  starships: Starship[];
}
