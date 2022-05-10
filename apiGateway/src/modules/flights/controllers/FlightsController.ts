import { Request, Response } from "express";
import { FlightOfferSearchRequest } from "../../../@types/amadeus/flights/FlightOfferSearchRequest";
import CreateFlightService from "../services/CreateFlightService";
import ShowFlightService from "../services/ShowFlightService";
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

  async show(request: Request, response: Response): Promise<Response> {
    const { flightId } = request.params
    const showFlightService = new ShowFlightService();
    const flights = await showFlightService.execute({ flightId })
    return response.json(flights)
  }
}