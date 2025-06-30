import { IFlight } from "../../types/flight.types";

export function FlightRoute({ flight }: { flight: IFlight }) {
  return (
    <div className="grid grid-cols-2 gap-1 mb-1 relative">
      <div className="bg-card px-element py-element rounded-2xl text-center">
        <h3 className="text-white text-4xl font-semibold mb-1.5">
          {flight.from.code}
        </h3>
        <p className="text-neutral-200 font-medium mb-1 text-lg">
          {flight.from.city}
        </p>
        <p className="text-neutral-500 font-medium text-sm">
          {flight.from.timeZone}
        </p>
      </div>
    </div>
  );
}
