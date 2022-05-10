import { Request, Response } from "express";
import { json } from "node:stream/consumers";
import { FlightOfferSearchRequest } from "../../../@types/amadeus/flights/FlightOfferSearchRequest";
import CreateFlightService from "../services/CreateFlightService";
import FlightOfferSearchService from "../services/FlightOfferSearchService";


export class FlightsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { itineraries, price } = request.body
    const createFlightService = new CreateFlightService();
    const flights = await createFlightService.execute({ itineraries, price })
    return response.json(flights)
  }

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

    return response.json(flightOffers?.data)
  }
}