import { Request, Response } from "express";
import { FlightOfferSearchRequest } from "../../../@types/amadeus/flights/FlightOfferSearchRequest";
import { FlightOfferSearchResponse } from "../../../@types/amadeus/flights/FlightOfferSearchResponse";
import { TravelClass } from "../../../@types/amadeus/flights/TravelClass";
import { amadeus } from "../../../services/amadeus/amadeusApi";


export class FlightsController {
  async index(request: Request, response: Response): Promise<Response> {
    const flightOffersResponse = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: 'CGB',
      destinationLocationCode: 'CWB',
      departureDate: '2022-04-10',
      returnDate: '2022-04-20',
      adults: 2,
      children: 2,
      infants: 1,
      travelClass: TravelClass.ECONOMY,
      currencyCode: 'BRL',
      max: 2
    } as FlightOfferSearchRequest) as FlightOfferSearchResponse
    
    return response.json(flightOffersResponse.data)
  }
}