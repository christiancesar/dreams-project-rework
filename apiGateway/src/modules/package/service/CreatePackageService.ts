import FlightOfferSearchService from "../../flights/services/FlightOfferSearchService";
import { IPackageRequest } from "../DTO/IPackageRequest";

const flightOfferSearchService = new FlightOfferSearchService()

export default class CreatePackageService {
  async execute({
    adults,
    children,
    departureDate,
    destinationLocationCode,
    infants,
    originLocationCode,
    returnDate,
    travelClass
  }:IPackageRequest): Promise<void> {
    const flights = await flightOfferSearchService.execute({
      adults,
      children,
      departureDate,
      destinationLocationCode,
      infants,
      originLocationCode,
      returnDate,
      travelClass
    })
  }
}