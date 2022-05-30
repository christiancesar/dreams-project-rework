import { Flight, Prisma } from "@prisma/client";
import { FlightsRepository } from "../repositories/implementations/FlightsRepository";

interface IFlight {
  itineraries: Prisma.JsonArray;
  price: Prisma.JsonObject;
}

export default class CreateFlightService {
  private flightsRepository: FlightsRepository;

  constructor() {
    this.flightsRepository = new FlightsRepository()
  }
  
  async execute({ itineraries, price }: IFlight): Promise<Flight> {
    const flight = await this.flightsRepository.create({ itineraries, price });

    return flight;
  }
}