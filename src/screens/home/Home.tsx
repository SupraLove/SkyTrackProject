import { FlightDetails } from "../../components/flight-details/FlightDetails";
import { FlightList } from "../../components/flight-list/FlightList";

export function Home() {
  return (
    <>
      <FlightList />
      <FlightDetails />
    </>
  );
}
