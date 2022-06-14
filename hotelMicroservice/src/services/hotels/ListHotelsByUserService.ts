import { Hotel } from "@prisma/client";
import HotelsRepository from "../../repositories/implementations/HotelsRepository";

interface IRequest {
  userId: string;
}

export default class ListHotelsByUserService {

  private hotelsRepository: HotelsRepository;

  constructor() {
    this.hotelsRepository = new HotelsRepository()
  }

  async execute({ userId }: IRequest): Promise<Hotel[]> {
    return this.hotelsRepository.findHotelsByUserId(userId)
  }
}