import { Flight, Prisma } from "@prisma/client";
import {
  FlightResponse,
  FlightShowRequest
} from "dreams-proto-sharing/src/contracts/flight/flight_pb";
import flightClient from "../providers/FlightService";

interface IFlight {
  flightId: string
}

export default class CreateFlightService {

  async execute({ flightId }: IFlight): Promise<Flight | null> {
    const showFlightServiceRequest = (flight: IFlight) => new Promise<FlightResponse>((resolve, reject) => {
      flightClient.showFlight(
        new FlightShowRequest().setId(flightId),
        (err, flight) => {
          if (err) {
            reject(err)
          }
          resolve(flight)
        }
      );
    });

    const flightResponse = await showFlightServiceRequest({ flightId });

    return {
      id: flightResponse.getFlight()!.getId(),
      itineraries: JSON.parse(flightResponse.getFlight()!.getItineraries()),
      price: JSON.parse(flightResponse.getFlight()!.getPrice())
    };
  }
}