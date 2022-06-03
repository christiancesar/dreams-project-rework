import { Hotel } from "@prisma/client";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { HotelListResponse } from "../../protos/hotel/hotel_pb";
import hotelClient from "../../providers/HotelService";

export default class ListHotelsService {

  async execute(): Promise<Hotel[]> {
    
    const listHotelServiceRequest = () => new Promise<HotelListResponse>((resolve, reject) => {
      hotelClient.listHotels(
        new Empty(),
        (err, hotel) => {
          if (err) {
            reject(err)
          }
          resolve(hotel)
        }
      );
    });
    
    const hotelsResponse = await listHotelServiceRequest();

    const hotels = [] as Hotel[];
    
    hotelsResponse.getHotelList().map(hotel => {
      hotels.push({
        id: hotel.getId(),
        hotel: JSON.parse(hotel.getHotel()),
        offers: JSON.parse(hotel.getOffers())
      });
    })


    return hotels
  }
}