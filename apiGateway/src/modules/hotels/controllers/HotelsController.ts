import { Request, Response } from "express";
import { HotelOfferSearchRequest } from "../../../@types/amadeus/hotels/HotelOfferSearchRequest";
import { HotelOfferSearchResponse } from "../../../@types/amadeus/hotels/HotelOfferSearchResponse";
import { amadeus } from "../../../services/amadeus/amadeusApi";


export class HotelsController {
  async index(request: Request, response: Response): Promise<Response> {
    const hotelOffersSearch = await amadeus.shopping.hotelOffers.get({
      cityCode: 'YTO',
      checkInDate: '2022-04-10',
      checkOutDate: '2022-04-20',
      roomQuantity: 1,
      adults: 2,
      radius: 50,
      radiusUnit: 'KM',
      paymentPolicy: 'NONE',
      includeClosed: false,
      bestRateOnly: true,
      view: 'FULL',
      sort: 'NONE',
      currency: 'BRL',
    } as HotelOfferSearchRequest) as HotelOfferSearchResponse;
    
    return response.json(hotelOffersSearch.data)
  }
}