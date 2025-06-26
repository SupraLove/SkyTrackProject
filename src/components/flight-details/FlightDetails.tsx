import { useSearchParams } from "react-router-dom";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constants";
import { FLIGHTS_MOCK } from "../flight-list/flights.mock";
import { useMemo } from "react";

export function FlightDetails() {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);
  const flight = useMemo(
    () => FLIGHTS_MOCK.find((flight) => flight.airline === selectedFlight),
    [selectedFlight]
  );
  return (
    <div
      className="fixed w-sm top-7 right-7 h-full rounded-2xl bg-[#101010]"
      style={{ height: "calc(100% - 56px)" }}
    >
      {flight?.airline}
      <div
        className="w-full h-60"
        style={{
          background: `linear-gradient(to bottom, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
        }}
      >
        <img
          src={flight?.airplane.image}
          alt={flight?.airplane.name}
          className="max-w-full h-auto "
        />
      </div>
      <div>
        <img
          src={`https://flagcdn.com/w40/${flight?.from.countryCode.toLowerCase()}.png`}
          alt={flight?.from.code}
          width={24}
          height={24}
          className="inline-block rounded-sm shadow-sm"
        />
      </div>
    </div>
  );
}
