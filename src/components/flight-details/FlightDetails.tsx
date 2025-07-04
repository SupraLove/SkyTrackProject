import { useSearchParams } from "react-router-dom";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constants";
import { FLIGHTS_MOCK } from "../flight-list/flights.mock";
import { useMemo } from "react";
import { FlightHeaders } from "./FlightHeaders";
import { FlightImage } from "./FlightImage";
import { FlightInformation } from "./FlightInformation";
import { FlightStatus } from "./FlightStatus";
import { FlightSchedule } from "./FlightSchedule";
import { FlightRoute } from "./FlightRoute";
import { FlightActions } from "./FlightActions";

export function FlightDetails() {
  const [searchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);
  const flight = useMemo(
    () => FLIGHTS_MOCK.find((flight) => flight.id === selectedFlight),
    [selectedFlight]
  );

  if (!flight) return null;

  return (
    <aside
      className=" fixed right-7 top-15 w-sm bg-[#101010] rounded-2xl overflow-hidden"
      // style={{ height: "calc(100% - 56px)" }}
    >
      <FlightHeaders flight={flight} />
      <FlightImage flight={flight} />

      <FlightRoute flight={flight} />
      <FlightStatus />
      <FlightSchedule />

      <FlightInformation flight={flight} />

      <FlightActions
        onRoute={() => {}}
        onFollow={() => {}}
        onShare={() => {}}
        onMore={() => {}}
      />
    </aside>
  );
}
