import { HotelOfferSearchRequest } from "../../../@types/amadeus/hotels/HotelOfferSearchRequest";
import { HotelOfferSearchResponse } from "../../../@types/amadeus/hotels/HotelOfferSearchResponse";
import { amadeus } from "../../../services/amadeus/amadeusApi";
import IHotelOffersSearch from "../DTO/IHotelOffersSearch";

export default class HotelOfferSearchService {
  async execute({
    adults,
    checkInDate,
    checkOutDate,
    cityCode,
    roomQuantity
  }: IHotelOffersSearch): Promise<HotelOfferSearchResponse> {
    const hotelOffersSearch = await amadeus.shopping.hotelOffers.get({
      cityCode,
      checkInDate,
      checkOutDate,
      roomQuantity,
      adults,
      radius: 50,
      radiusUnit: 'KM',
      paymentPolicy: 'NONE',
      includeClosed: false,
      bestRateOnly: true,
      view: 'FULL',
      sort: 'NONE',
      currency: 'BRL',
    } as HotelOfferSearchRequest) as HotelOfferSearchResponse;

    return hotelOffersSearch
  }
}