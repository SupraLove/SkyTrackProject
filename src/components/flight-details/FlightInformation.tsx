import { IFlight } from "../../types/flight.types";

export function FlightInformation({ flight }: { flight: IFlight }) {
  return (
    <div className="my-3 mx-4">
      <div className="font-medium py-1 pl-4 mb-1 text-sm bg-[#282828] rounded-tl-2xl rounded-tr-2xl ">
        Flight Information
      </div>
      <div className="grid grid-cols-2 gap-1 mb-1">
        <div className="bg-neutral-800 flex items-center justify-between py-3 px-4">
          <p className="opacity-50 ">{flight.airplane.name}</p>
        </div>
        <div className="bg-neutral-800 flex items-center justify-between py-3 px-4">
          <div className="flex items-center gap-2">
            <img
              src={`https://flagcdn.com/w40/${flight?.from.countryCode.toLowerCase()}.png`}
              alt={flight?.airline.country}
              width={24}
              height={24}
              className="inline-block opacity-50"
            />
            <span>{flight.airline.country}</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 mb-1">
        <div className="bg-neutral-800 flex items-center justify-between py-2 px-4 rounded-bl-xl ">
          <p className="opacity-50">Speed</p>
          <p className="text-sm">870 km/h</p>
        </div>
        <div className="bg-neutral-800 flex items-center justify-between py-2 px-4 rounded-br-xl ">
          <p className="opacity-50">Altitude</p>
          <p className="text-sm">11 300m</p>
        </div>
      </div>
    </div>
  );
}
