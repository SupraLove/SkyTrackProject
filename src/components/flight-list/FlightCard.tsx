import { useSearchParams } from "react-router-dom";
import { IFlight } from "../../types/flight.types";
import { QUERY_PARAM_FLIGHT } from "./flights.constants";
import { cn } from "../../utils/cn";

interface IFlightProps {
  flight: IFlight;
}

export function FlightCard({ flight }: IFlightProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT);
  const isActive = selectedFlight === flight.id;
  return (
    <div
      className={cn(
        "rounded-2xl p-0.5 w-full transition-colors ease-in",
        isActive
          ? "bg-gradient-to-r from-rose-500 to-orange-300"
          : "bg-transparent"
      )}
    >
      <button
        onClick={() => {
          setSearchParams({
            [QUERY_PARAM_FLIGHT]: flight.id,
          });
        }}
        className="bg-neutral-900 rounded-2xl p-6 block w-full"
      >
        <div className="flex gap-2 items-center justify-between mb-7">
          <div className="flex gap-2 items-center">
            <img
              src={flight.logo}
              alt={flight.airline.name}
              width={40}
              className="rounded-full bg-white"
            />
            <span>{flight.id}</span>
          </div>
          <div>
            <span className="bg-neutral-800 rounded-2xl py-0.5 px-2">
              {flight.aircraftReg}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div> {flight.from.city}</div>
            <div className="font-semibold text-3xl"> {flight.from.code}</div>
          </div>
          <div>{/*Progress bar*/}</div>
          <div>
            <div>
              <div> {flight.to.city}</div>
              <div className="font-semibold text-3xl"> {flight.to.code}</div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
