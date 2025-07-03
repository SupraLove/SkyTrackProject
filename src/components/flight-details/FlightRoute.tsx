import { Plane } from "lucide-react";
import { IFlight } from "../../types/flight.types";

export function FlightRoute({ flight }: { flight: IFlight }) {
  return (
    <div className="grid grid-cols-2 gap-1 mx-4 pt-4 relative">
      <div className=" px-element py-element bg-neutral-800 rounded-tl-lg py-3 text-center">
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

      <div className="flex items-center justify-center mb-2 bg-neutral-900 rounded-full w-12 h-12 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <Plane className="text-amber-400" size={22} />
      </div>

      <div className=" px-element py-element bg-neutral-800 rounded-tr-lg py-3 text-center">
        <h3 className="text-white text-4xl font-semibold mb-1.5">
          {flight.to.code}
        </h3>
        <p className="text-neutral-200 font-medium mb-1 text-lg">
          {flight.to.city}
        </p>
        <p className="text-neutral-500 font-medium text-sm">
          {flight.to.timeZone}
        </p>
      </div>
    </div>
  );
}
