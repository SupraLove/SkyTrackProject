import { FlightCard } from "./FlightCard";
import { FLIGHTS_MOCK } from "./flights.mock";

export function FlightList() {
  return (
    <div className="w-sm space-y-4 gap-3 m-8">
      {FLIGHTS_MOCK.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
}
