import { Flight, Prisma } from "@prisma/client";
import { FlightsRepository } from "../repositories/implementations/FlightsRepository";

interface IFlight {
  flightId: string
}

export default class CreateFlightService {
  private flightsRepository: FlightsRepository;

  constructor() {
    this.flightsRepository = new FlightsRepository()
  }
  
  async execute({ flightId }: IFlight): Promise<Flight | null> {
    const flight = await this.flightsRepository.findByFlightId(flightId);

    return flight;
  }
}