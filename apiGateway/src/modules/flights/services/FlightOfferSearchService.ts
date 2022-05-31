import { FlightOfferSearchRequest } from "../../../@types/amadeus/flights/FlightOfferSearchRequest";
import { FlightOffer, FlightOfferSearchResponse } from "../../../@types/amadeus/flights/FlightOfferSearchResponse";
import { TravelClass } from "../../../@types/amadeus/flights/TravelClass";
import { Flight, FlightOffersResponse, FlightRequest } from "../../../protos/flight/flights_pb";
import { amadeus } from "../../../providers/amadeus/amadeusApi";
import flightClient from "../../../services/FlightService";

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

export default class FlightOfferSearchService {

  public async execute({
    adults,
    departureDate,
    destinationLocationCode,
    originLocationCode,
    travelClass,
    children,
    infants,
    returnDate
  }: IRequest): Promise<FlightOffer[]> {
    const flightServiceRequest = (search: IRequest) => new Promise<FlightOffersResponse>((resolve, reject) => {
      flightClient.searchFlightOffer(
        new FlightRequest().setFlight(
          new Flight().setAdults(adults)
                      .setDeparturedate(departureDate)
                      .setDestinationlocationcode(destinationLocationCode)
                      .setOriginlocationcode(originLocationCode)
                      .setTravelclass(travelClass)
                      .setChildren(children|| 0)
                      .setInfants(infants|| 0)
                      .setReturndate(returnDate || '')
        ), (err, users) => {
          if (err) {
            reject(err)
          }
          resolve(users)
        }
      )
    });

    const flightOffersResponse = await flightServiceRequest({
      adults,
      departureDate,
      destinationLocationCode,
      originLocationCode,
      travelClass,
      children,
      infants,
      returnDate
    })

    const flights = JSON.parse(flightOffersResponse.getFlightoffers()) as FlightOffer[]

    return flights;
  }
}