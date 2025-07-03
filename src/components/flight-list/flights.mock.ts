import { IFlight } from "../../types/flight.types";

export const FLIGHTS_MOCK: IFlight[] = [
  {
    logo: "/logos/turkish.svg",
    id: "TK143",
    airline: {
      name: "Turkish Airlines",
      country: "Turkey",
    },
    aircraftReg: "TC-JFP",
    colorGradient: ["#1E3C72", "#2A5298"],
    airplane: {
      name: "Airbus-A330",
      image: "/airplanes/01_turkish_airbus-A330.png",
    },
    route: {
      speed: 850,
      altitude: 11000,
      distance: 7500,
    },
    from: {
      city: "Sofia",
      country: "Bulgaria",
      countryCode: "BG",
      timeZone: "UTC+3",
      code: "SOF",
    },
    to: {
      city: "Beijing",
      country: "China",
      countryCode: "CN",
      timeZone: "UTC+8",
      code: "PEK",
    },
  },
  {
    logo: "/logos/ryanair.svg",
    id: "RN1782",
    airline: {
      name: "Ryanair",
      country: "Ireland",
    },
    aircraftReg: "D-AISP",
    colorGradient: ["#003566", "#ffc300"],
    airplane: {
      name: "Boeing-737-800",
      image: "/airplanes/02_Ryanair_Boeing-737-800.png",
    },
    route: {
      speed: 800,
      altitude: 10000,
      distance: 4000,
    },
    from: {
      city: "Dublin",
      country: "Ireland",
      countryCode: "IE",
      timeZone: "UTC+1",
      code: "DUB",
    },
    to: {
      city: "Larnaca",
      country: "Cyprus",
      countryCode: "CY",
      timeZone: "UTC+3",
      code: "LCA",
    },
  },
  {
    logo: "/logos/s7.svg",
    id: "S7124",
    airline: {
      name: "S7 Airlines",
      country: "Russia",
    },
    aircraftReg: "RA-73415",
    colorGradient: ["#00C853", "#64DD17"],
    airplane: {
      name: "Superjet 100",
      image: "/airplanes/03_s7_Airbus-A320.png",
    },
    route: {
      speed: 750,
      altitude: 9500,
      distance: 3200,
    },
    from: {
      city: "Nice",
      country: "France",
      countryCode: "FR",
      timeZone: "UTC+2",
      code: "NCE",
    },
    to: {
      city: "Tbilisi",
      country: "Georgia",
      countryCode: "GE",
      timeZone: "UTC+4",
      code: "TBS",
    },
  },
  {
    logo: "/logos/swiss.svg",
    id: "LX318",
    airline: {
      name: "Swiss International Air Lines",
      country: "Switzerland",
    },
    aircraftReg: "HB-JHK",
    colorGradient: ["#D32F2F", "#F44336"],
    airplane: {
      name: "Airbus A330",
      image: "/airplanes/04_SWISS_Airbus-A321.png",
    },
    route: {
      speed: 870,
      altitude: 11300,
      distance: 5000,
    },
    from: {
      city: "Porto",
      country: "Portugal",
      countryCode: "PT",
      timeZone: "UTC+1",
      code: "OPO",
    },
    to: {
      city: "Baku",
      country: "Azerbaijan",
      countryCode: "AZ",
      timeZone: "UTC+4",
      code: "GYD",
    },
  },
  {
    logo: "/logos/lufthansa.svg",
    id: "LH401",
    airline: {
      name: "Lufthansa",
      country: "Germany",
    },
    aircraftReg: "D-AIXD",
    colorGradient: ["#0F2027", "#2C5364"],
    airplane: {
      name: "Airbus A350",
      image: "/airplanes/05_Lufthansa_Airbus-A350-900.png",
    },
    route: {
      speed: 900,
      altitude: 11500,
      distance: 6100,
    },
    from: {
      city: "Burgas",
      country: "Bulgaria",
      countryCode: "BG",
      timeZone: "UTC+3",
      code: "BOJ",
    },
    to: {
      city: "Muscat",
      country: "Oman",
      countryCode: "OM",
      timeZone: "UTC+4",
      code: "MCT",
    },
  },
];
