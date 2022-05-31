import { Flight, Prisma } from "@prisma/client";
import { FlightsRepository } from "../repositories/implementations/FlightsRepository";

interface IRequest {
  itineraries: string;
  price: string;
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

  async execute({ itineraries, price }: IRequest): Promise<IResponse> {

    const flight = await this.flightsRepository.create({
      itineraries: JSON.parse(itineraries) as Prisma.JsonArray,
      price: JSON.parse(price) as Prisma.JsonObject
    });

    return {
      id: flight.id,
      itineraries: JSON.stringify(flight.itineraries),
      price: JSON.stringify(flight.price)
    }
  }
}