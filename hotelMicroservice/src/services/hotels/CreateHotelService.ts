import HotelsRepository from "../../repositories/implementations/HotelsRepository";

interface IRequest {
  userId: string;
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

  async execute({ hotel, offers, userId }: IRequest): Promise<IResponse> {
    const hotelCreated = await this.hotelsRepository.create({
      userId,
      hotel,
      offers,
    });

    return {
      id: hotelCreated.id,
      hotel: JSON.stringify(hotelCreated.hotel),
      offers: JSON.stringify(hotelCreated.offers)
    };
  }
} 