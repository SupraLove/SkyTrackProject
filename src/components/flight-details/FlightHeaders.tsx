import { useSearchParams } from "react-router-dom";
import { QUERY_PARAM_FLIGHT } from "../flight-list/flights.constants";
import { IFlight } from "../../types/flight.types";
import { X } from "lucide-react";

export function FlightHeaders({ flight }: { flight: IFlight }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="z-10 bg-[#1A1A1A] rounded-2xl px-6 py-4 flex items-center justify-between absolute top-3 left-1/2 -translate-x-1/2 w-11/12 h-max">
      <div>
        <h2 className="text-amber-400 text-xl font-medium">{flight?.id}</h2>
        <p className="text-sm text-gray-300">{flight?.airline.name}</p>
      </div>
      <button
        onClick={() => {
          searchParams.delete(QUERY_PARAM_FLIGHT);
          setSearchParams(searchParams);
        }}
        className="bg-gray-400 hover:bg-red-400 hover:text-white text-white transition-colors rounded-full p-1"
      >
        <X className="w-5 h-5 " />
      </button>
    </div>
  );
}
