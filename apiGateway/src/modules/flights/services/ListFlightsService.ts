import { Flight } from "@prisma/client";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { FlightListResponse } from "../../../protos/flight/flights_pb";
import flightClient from "../../../services/FlightService";

export default class ListFlightsService {

  async execute(): Promise<Flight[]> {
    
    const listFlightServiceRequest = () => new Promise<FlightListResponse>((resolve, reject) => {
      flightClient.listFlights(
        new Empty(),
        (err, flight) => {
          if (err) {
            reject(err)
          }
          resolve(flight)
        }
      );
    });
    
    const flightsResponse = await listFlightServiceRequest();

    const flights = [] as Flight[];
    
    flightsResponse.getFlightList().map(flight => {
      flights.push({
        id: flight.getId(),
        itineraries: JSON.parse(flight.getItineraries()),
        price: JSON.parse(flight.getPrice())
      });
    })


    return flights
  }
}