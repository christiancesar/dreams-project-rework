import { FlightsRepository } from "../repositories/implementations/FlightsRepository";

type FlightRequest = {
  itineraries: string;
  price: string;
  userId: string;
}

type FlightResponse = {
  id: string;
  itineraries: string;
  price: string
  createdAt: number;
  updatedAt: number;
}

export default class CreateFlightService {
  private flightsRepository: FlightsRepository;

  constructor() {
    this.flightsRepository = new FlightsRepository()
  }

  async execute({ itineraries, price, userId }: FlightRequest): Promise<FlightResponse> {
    const flight = await this.flightsRepository.create({
      itineraries,
      price,
      userId
    });

    return {
      id: flight.id,
      itineraries: JSON.stringify(flight.itineraries),
      price: JSON.stringify(flight.price),
      createdAt: Date.parse(flight.createdAt.toDateString()),
      updatedAt: Date.parse(flight.updatedAt.toDateString()),
    }
  }
}