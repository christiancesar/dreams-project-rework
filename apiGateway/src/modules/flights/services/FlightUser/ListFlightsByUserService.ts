import { Flight } from "@prisma/client";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { FlightByUserRequest, FlightListResponse } from "dreams-proto-sharing/src/contracts/flight/flight_pb";
import flightClient from "../../providers/FlightService";

interface IRequest {
  userId: string;
}
export default class ListFlightsByUserService {

  async execute({ userId }: IRequest): Promise<Flight[]> {

    const listFlightbyUserServiceRequest = (user: IRequest) => new Promise<FlightListResponse>((resolve, reject) => {
      flightClient.listFlightbyUser(
        new FlightByUserRequest().setUserid(userId),
        (err, flight) => {
          if (err) {
            reject(err)
          }
          resolve(flight)
        }
      );
    });

    const flightsResponse = await listFlightbyUserServiceRequest({ userId });

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