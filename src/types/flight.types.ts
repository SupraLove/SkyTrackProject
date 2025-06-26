export interface IFlightAirplane {
  name: string;
  image: string;
}

export interface IFlightRoute {
  speed: number;
  altitude: number;
  distance?: number;
}

export interface IFlightLocation {
  city: string;
  country: string;
  countryCode: string;
  timeZone: string;
  code: string;
}

export interface IFlight {
  airplane: IFlightAirplane;
  route: IFlightRoute;
  logo: string;
  colorGradient: [string, string];
  airline: string;
  from: IFlightLocation;
  to: IFlightLocation;
  aircraftReg: string;
}
