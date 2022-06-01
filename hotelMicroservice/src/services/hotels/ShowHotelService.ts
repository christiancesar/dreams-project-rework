import { status } from "@grpc/grpc-js";
import { Hotel } from "@prisma/client";
import HotelsRepository from "../../repositories/implementations/HotelsRepository";
import AppError from "../../../../common/errors/AppError";

interface IHotel {
  hotelId: string
}


export default class ShowHotelService {

  private hotelsRepository: HotelsRepository;

  constructor() {
    this.hotelsRepository = new HotelsRepository()
  }

  async execute({ hotelId }: IHotel): Promise<Hotel> {
    const hotel = await this.hotelsRepository.findByHotelId(hotelId);
    if (!hotel) {
      throw new AppError({ code: status.NOT_FOUND, name: 'Show User', message: 'Sorry, but flight not exist.' });
    }

    return hotel
  }
}