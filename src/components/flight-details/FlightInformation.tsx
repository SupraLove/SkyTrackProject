import { IFlight } from "../../types/flight.types";

export function FlightInformation({ flight }: { flight: IFlight }) {
  return (
    <div>
      <img
        src={`https://flagcdn.com/w40/${flight?.from.countryCode.toLowerCase()}.png`}
        alt={flight?.airline.country}
        width={24}
        height={24}
        className="inline-block"
      />
      <span>{flight?.airline.country}</span>
    </div>
  );
}
