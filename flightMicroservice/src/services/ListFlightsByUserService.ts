import { Flight } from "@prisma/client";
import { FlightsRepository } from "../repositories/implementations/FlightsRepository";

interface IRequest {
  userId: string
}
export default class ListFlightsByUserService {
  private flightsRepository: FlightsRepository;

  constructor() {
    this.flightsRepository = new FlightsRepository()
  }

  async execute({ userId }: IRequest): Promise<Flight[] | null> {
    const flights = await this.flightsRepository.findByUserId(userId);
    return flights
  }
}