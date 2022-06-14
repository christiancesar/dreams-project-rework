import { Hotel } from "@prisma/client";
import { HotelsByUserRequest, HotelListResponse } from "dreams-proto-sharing/src/contracts/hotel/hotel_pb";
import hotelClient from "../../providers/HotelService";

interface IRequest {
  userId: string;
}
class ListHotelsByUserService {

  async execute({ userId }: IRequest): Promise<Hotel[]> {

    const listHotelsByUserServiceRequest = (user: IRequest) => new Promise<HotelListResponse>((resolve, reject) => {
      hotelClient.listHotelByUser(
        new HotelsByUserRequest().setUserid(user.userId),
        (err, hotel) => {
          if (err) {
            reject(err)
          }
          resolve(hotel)
        }
      );
    });

    const hotelsResponse = await listHotelsByUserServiceRequest({ userId });

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

export default ListHotelsByUserService;
