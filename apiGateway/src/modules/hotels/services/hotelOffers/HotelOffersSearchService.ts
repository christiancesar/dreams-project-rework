import { HotelOffer, HotelOfferSearchResponse } from "../../../../@types/amadeus/hotels/HotelOfferSearchResponse";
import { HotelOffersRequest, HotelOffersResponse, HotelOffersSearch } from "dreams-proto-sharing/src/contracts/hotel/hotel_pb";
import hotelClient from "../../providers/HotelService";
import IHotelOffersSearch from "../../dtos/IHotelOffersSearch";

export default class HotelOfferSearchService {
  async execute({
    adults,
    checkInDate,
    checkOutDate,
    cityCode,
    roomQuantity
  }: IHotelOffersSearch): Promise<HotelOffer[]> {

    const hotelServiceRequest = (search: IHotelOffersSearch) => new Promise<HotelOffersResponse>((resolve, reject) => {
      hotelClient.searchHotelOffer(
        new HotelOffersRequest().setHotelofferssearch(
          new HotelOffersSearch()
            .setAdults(adults)
            .setCheckindate(checkInDate)
            .setCheckoutdate(checkOutDate)
            .setCitycode(cityCode)
            .setRoomquantity(roomQuantity)
        ), (err, hotel) => {
          if (err) {
            reject(err)
          }
          resolve(hotel)
        }
      );
    });

    const hotelOffersResponse = await hotelServiceRequest({
      cityCode,
      checkInDate,
      checkOutDate,
      roomQuantity,
      adults,
    })

    const hotels = JSON.parse(hotelOffersResponse.getHoteloffers()) as HotelOffer[];

    return hotels;

  }
}