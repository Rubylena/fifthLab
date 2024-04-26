export interface IUsers {
  cell: string;
  email: string;
  gender: string;
  login: { uuid: string };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  name: { title: string; first: string; last: string };
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: { data: string; age: 4 };
}

export interface IParams {
  page: number;
  results: number;
}

export interface INat {
  value: string;
  name: string;
}

export interface ISelect {
  selected?: INat;
  setSelected?: React.Dispatch<React.SetStateAction<INat>>;
  data: INat[];
}
