import { FlightRequest, FlightResponse } from "dreams-proto-sharing/src/contracts/flight/flights_pb";
import flightClient from "../providers/FlightService";

interface IRequest {
  itineraries: any;
  price: any;
}


export default class CreateFlightService {

  async execute({ itineraries, price }: IRequest): Promise<any> {

    const createFlightServiceRequest = (search: IRequest) => new Promise<FlightResponse>((resolve, reject) => {
      flightClient.createFlight(
        new FlightRequest()
          .setItineraries(JSON.stringify(itineraries))
          .setPrice(JSON.stringify(price)),
        (err, flight) => {
          if (err) {
            reject(err)
          }
          resolve(flight)
        }
      );
    });

    const flightResponse = await createFlightServiceRequest({ itineraries, price })

    const flight = flightResponse.getFlight()?.toObject()!

    return { 
      id: flight?.id,
      itineraries: JSON.parse(flight.itineraries),
      price: JSON.parse(flight?.price)
    }
  }
}