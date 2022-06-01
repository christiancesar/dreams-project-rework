import { Flight, Prisma } from "@prisma/client";
import AppError from "../../../common/errors/AppError";
import { FlightsRepository } from "../repositories/implementations/FlightsRepository";
import { status } from "@grpc/grpc-js";

interface IFlight {
  flightId: string
}

export default class ShowFlightService {
  private flightsRepository: FlightsRepository;

  constructor() {
    this.flightsRepository = new FlightsRepository()
  }
  
  async execute({ flightId }: IFlight): Promise<Flight> {
    const flight = await this.flightsRepository.findByFlightId(flightId);

    if (!flight) {
      throw new AppError({ code: status.NOT_FOUND, name: 'Show User', message: 'Sorry, but flight not exist.'});
    }
    return flight;
  }
}