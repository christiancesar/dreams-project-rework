import { Hotel } from "@prisma/client";
import { HotelResponse, HotelShowRequest } from "dreams-proto-sharing/src/contracts/hotel/hotel_pb";
import hotelClient from "../../providers/HotelService";

interface IRequest {
  hotelId: string
}


export default class ShowHotelService {

  async execute({ hotelId }: IRequest): Promise<Hotel> {

    const showHotelServiceRequest = (hotel: IRequest) => new Promise<HotelResponse>((resolve, reject) => {
      hotelClient.showHotel(
        new HotelShowRequest().setId(hotelId),
        (err, hotel) => {
          if (err) {
            reject(err)
          }
          resolve(hotel)
        }
      );
    });

    const hotelResponse = await showHotelServiceRequest({ hotelId });

    return {
      id: hotelResponse.getHotel()!.getId(),
      hotel: JSON.parse(hotelResponse.getHotel()!.getHotel()),
      offers: JSON.parse(hotelResponse.getHotel()!.getOffers())
    };
  }
}