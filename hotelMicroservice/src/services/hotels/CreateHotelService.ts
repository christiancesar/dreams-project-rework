import { Hotel, Prisma } from "@prisma/client";
import HotelsRepository from "../../repositories/implementations/HotelsRepository";

interface IRequest {
  hotel: string;
  offers: string;
}

interface IResponse {
  id: string;
  hotel: string;
  offers: string;
}

export default class CreateHotelService {

  private hotelsRepository: HotelsRepository;

  constructor() {
    this.hotelsRepository = new HotelsRepository()
  }

  async execute({ hotel, offers }: IRequest): Promise<IResponse> {
    const hotelCreated = await this.hotelsRepository.create({
      hotel: JSON.parse(hotel) as Prisma.JsonObject,
      offers: JSON.parse(offers) as Prisma.JsonArray
    });

    return {
      id: hotelCreated.id,
      hotel: JSON.stringify(hotelCreated.hotel),
      offers: JSON.stringify(hotelCreated.offers)
    };
  }
} 