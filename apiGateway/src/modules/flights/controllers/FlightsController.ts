import { Request, Response } from "express";
import { FlightOfferSearchRequest } from "../../../@types/amadeus/flights/FlightOfferSearchRequest";
import FlightOfferSearchService from "../services/FlightOfferSearchService";

const flightOfferSearchService = new FlightOfferSearchService();
export class FlightsController {
  async index(request: Request, response: Response): Promise<Response> {
    const {
      adults,
      departureDate,
      destinationLocationCode,
      originLocationCode,
      travelClass,
      children,
      infants,
      returnDate
    } = request.body as Omit<FlightOfferSearchRequest, 'max' | 'currencyCode'>

    const flightOffers = await flightOfferSearchService.execute({
      adults,
      departureDate,
      destinationLocationCode,
      originLocationCode,
      travelClass,
      children,
      infants,
      returnDate
    })

    return response.json(flightOffers.data)
  }

  // async create(request: Request, response: Response): Promise<Response> {}

}