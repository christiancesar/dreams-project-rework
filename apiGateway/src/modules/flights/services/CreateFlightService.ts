import { FlightCreate, FlightCreateRequest, FlightResponse } from "dreams-proto-sharing/src/contracts/flight/flight_pb";
import flightClient from "../providers/FlightService";

interface IRequest {
  itineraries: any;
  price: any;
  userId: string;
}


export default class CreateFlightService {

  async execute({ itineraries, price, userId }: IRequest): Promise<any> {

    const createFlightServiceRequest = (search: IRequest) => new Promise<FlightResponse>((resolve, reject) => {
      flightClient.createFlight(
        new FlightCreateRequest().setFlightcreate(
          new FlightCreate()
            .setItineraries(JSON.stringify(itineraries))
            .setPrice(JSON.stringify(price))
            .setUserid(userId)
        ),
        (err, flight) => {
          if (err) {
            reject(err)
          }
          resolve(flight)
        }
      );
    });

    const flightResponse = await createFlightServiceRequest({ itineraries, price, userId })

    const flight = flightResponse.getFlight()?.toObject()!

    return {
      id: flight?.id,
      itineraries: JSON.parse(flight.itineraries),
      price: JSON.parse(flight?.price)
    }
  }
}