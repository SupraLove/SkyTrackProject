import { useSearchParams } from "react-router-dom";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constants";
import { IFlight } from "../../types/flight.types";

export function FlightHeaders({ flight }: { flight: IFlight }) {
  const [searchParams] = useSearchParams();

  return (
    <div className="bg-[#1A1A1A] rounded-2xl px-6 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-amber-400 text-xl font-medium">{flight?.id}</h2>
        <p className="text-sm text-gray-300">{flight?.airline.name}</p>
      </div>
      <button
        onClick={() => {
          searchParams.delete(QUERY_PARAM_FLIGHT);
        }}
        className="bg-gray-400 hover:text-white text-white transition-colors"
      >
        x
      </button>
    </div>
  );
}
