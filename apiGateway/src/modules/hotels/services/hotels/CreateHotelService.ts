import { Hotel } from "@prisma/client";
import { HotelRequest, HotelResponse } from "dreams-proto-sharing/src/contracts/hotel/hotel_pb";
import hotelClient from "../../providers/HotelService";

interface IRequest {
  hotel: any;
  offers: any;
}

export default class CreateHotelService {


  async execute({ hotel, offers }: IRequest): Promise<Hotel> {
    
    const createHotelServiceRequest = (search: IRequest) => new Promise<HotelResponse>((resolve, reject) => {
      hotelClient.createHotel(
        new HotelRequest()
          .setHotel(JSON.stringify(hotel))
          .setOffers(JSON.stringify(offers)),
        (err, hotel) => {
          if (err) {
            reject(err)
          }
          resolve(hotel)
        }
      );
    });

    const hotelResponse = await createHotelServiceRequest({ hotel, offers })

    return { 
      id: hotelResponse.getHotel()!.getId(),
      hotel: JSON.parse(hotelResponse.getHotel()!.getHotel()),
      offers: JSON.parse(hotelResponse.getHotel()!.getOffers())
    }
  }
} 