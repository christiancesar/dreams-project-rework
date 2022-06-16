import { Flight, Prisma } from "@prisma/client";
import { Price } from "../@types/amadeus/flights/FlightOfferSearchResponse";
import { FlightsRepository } from "../repositories/implementations/FlightsRepository";

interface IRequest {
  itineraries: string;
  price: string;
  userId: string;
}

interface IResponse {
  id: string;
  itineraries: string;
  price: string
}

export default class CreateFlightService {
  private flightsRepository: FlightsRepository;

  constructor() {
    this.flightsRepository = new FlightsRepository()
  }

  async execute({ itineraries, price, userId }: IRequest): Promise<IResponse> {
    const flight = await this.flightsRepository.create({
      itineraries,
      price,
      userId
    });
    
    return {
      id: flight.id,
      itineraries: JSON.stringify(flight.itineraries),
      price: JSON.stringify(flight.price),

    }
  }
}