import { Hotel } from "@prisma/client";
import HotelsRepository from "../../repositories/implementations/HotelsRepository";

interface IHotel {
  hotelId: string
}


export default class ShowHotelService {

  private hotelsRepository: HotelsRepository;

  constructor() {
    this.hotelsRepository = new HotelsRepository()
  }

  async execute({ hotelId }: IHotel): Promise<Hotel | null> {
    return this.hotelsRepository.findByHotelId(hotelId)
  }
}