import { Request, Response } from "express";
import { FlightOfferSearchRequest } from "../../../@types/amadeus/flights/FlightOfferSearchRequest";
import FlightOfferSearchService from "../services/FlightOfferSearchService";

interface IRequest {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string;
  returnDate?: string;
  adults: number;
  children?: number;
  infants?: number;
  travelClass: string;
}

export default class FlightsOffersController {
  
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
    } = request.body as IRequest

    const flightOfferSearchService = new FlightOfferSearchService();

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

    return response.json(flightOffers)
  }
}