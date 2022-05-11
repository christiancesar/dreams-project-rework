import { Request, Response } from "express";
import IHotelOffersSearch from "../dtos/IHotelOffersSearch";
import HotelOfferSearchService from "../services/HotelOffersSearchService";

const hotelOfferSearchService = new HotelOfferSearchService()
export class HotelsController {
  async index(request: Request, response: Response): Promise<Response> {
    const {
      adults,
      checkInDate,
      checkOutDate,
      cityCode,
      roomQuantity
    } = request.body as IHotelOffersSearch;
    
    const hotels = await hotelOfferSearchService.execute({
      adults,
      checkInDate,
      checkOutDate,
      cityCode,
      roomQuantity
    });

    return response.json(hotels.data)
  }
}