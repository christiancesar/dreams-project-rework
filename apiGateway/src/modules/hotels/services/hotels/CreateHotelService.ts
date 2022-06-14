import { Hotel } from "@prisma/client";
import { HotelCreate, HotelCreateRequest, HotelResponse } from "dreams-proto-sharing/src/contracts/hotel/hotel_pb";
import hotelClient from "../../providers/HotelService";

interface IRequest {
  userId: string;
  hotel: any;
  offers: any;
}

export default class CreateHotelService {


  async execute({ hotel, offers, userId }: IRequest): Promise<Hotel> {

    const createHotelServiceRequest = (search: IRequest) => new Promise<HotelResponse>((resolve, reject) => {
      hotelClient.createHotel(
        new HotelCreateRequest().setHotelcreate(
          new HotelCreate()
            .setUserid(search.userId)
            .setHotel(JSON.stringify(search.hotel))
            .setOffers(JSON.stringify(search.offers))
        ),
        (err, hotel) => {
          if (err) {
            reject(err)
          }
          resolve(hotel)
        }
      );
    });

    const hotelResponse = await createHotelServiceRequest({ hotel, offers, userId })

    return {
      id: hotelResponse.getHotel()!.getId(),
      hotel: JSON.parse(hotelResponse.getHotel()!.getHotel()),
      offers: JSON.parse(hotelResponse.getHotel()!.getOffers())
    }
  }
} 