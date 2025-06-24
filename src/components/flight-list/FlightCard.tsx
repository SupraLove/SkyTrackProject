import { IFlight } from "../../types/flight.types";

interface IFlightProps {
  flight: IFlight;
}

export function FlightCard({ flight }: IFlightProps) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-6">
      <div className="flex gap-2 items-center justify-between mb-7">
        <div className="flex gap-2 items-center">
          <img
            src={flight.logo}
            alt={flight.airline}
            width={40}
            className="rounded-full bg-white"
          />
          <span>{flight.airline}</span>
        </div>
        <div>
          <span className="bg-neutral-800 rounded-2xl py-0.5 px-2">
            {flight.aircraftReg}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <div> {flight.fromCity}</div>
          <div className="font-semibold text-3xl"> {flight.fromCode}</div>
        </div>
        <div>{/*Progress bar*/}</div>
        <div>
          <div>
            <div> {flight.toCity}</div>
            <div className="font-semibold text-3xl"> {flight.toCode}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
