import { FlightCard } from "./FlightCard";
import { flightsMock } from "./flights.mock";

export function FlightList() {
  return (
    <div className="w-sm space-y-4 gap-3 m-8">
      {flightsMock.map((flight) => (
        <FlightCard key={flight.airline} flight={flight} />
      ))}
    </div>
  );
}
