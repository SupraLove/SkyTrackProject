import { IFlight } from "../../types/flight.types";

export function FlightImage({ flight }: { flight: IFlight }) {
  return (
    <div
      className="w-full h-60 relative"
      style={{
        background: `linear-gradient(to bottom, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`,
      }}
    >
      <img
        src={flight?.airplane.image}
        alt={flight?.airplane.name}
        className="max-w-full h-auto absolute bottom-0 left-1/2 -translate-x-1/2"
      />
    </div>
  );
}
