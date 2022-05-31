import { FlightOffer } from "../../../@types/amadeus/flights/FlightOfferSearchResponse";
import { FlightOffersRequest, FlightOffersResponse, FlightOffersSearch } from "../../../protos/flight/flights_pb";
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
        new FlightOffersRequest().setFlightofferssearch(
          new FlightOffersSearch()
            .setAdults(adults)
            .setDeparturedate(departureDate)
            .setDestinationlocationcode(destinationLocationCode)
            .setOriginlocationcode(originLocationCode)
            .setTravelclass(travelClass)
            .setChildren(children || 0)
            .setInfants(infants || 0)
            .setReturndate(returnDate || '')
        ), (err, users) => {
          if (err) {
            reject(err)
          }
          resolve(users)
        }
      );
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