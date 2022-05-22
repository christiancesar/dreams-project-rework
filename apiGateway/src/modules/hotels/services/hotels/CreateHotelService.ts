import { Hotel, Prisma } from "@prisma/client";
import HotelsRepository from "../../repositories/implementations/HotelsRepository";

interface IHotel {
  hotel: Prisma.JsonObject;
  offers: Prisma.JsonArray;
}

export default class CreateHotelService {

  private hotelsRepository: HotelsRepository;

  constructor() {
    this.hotelsRepository = new HotelsRepository()
  }

  async execute({ hotel, offers }: IHotel): Promise<Hotel> {
    const hotelCreated = await this.hotelsRepository.create({ hotel, offers });
    return hotelCreated;
  }
} 