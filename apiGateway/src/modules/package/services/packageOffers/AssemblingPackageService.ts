import { format, isBefore, isMatch, isPast, isYesterday } from "date-fns";
import AppError from "../../../../errors/AppError";
import FlightOfferSearchService from "../../../flights/services/FlightOfferSearchService";
import HotelOfferSearchService from "../../../hotels/services/hotelOffers/HotelOffersSearchService";
import Package from "../../dtos/IPackage";
import { IPackageRequest } from "../../dtos/IPackageRequest";

const flightOfferSearchService = new FlightOfferSearchService();
const hotelOfferSearchService = new HotelOfferSearchService()

export default class AssemblingPackageService {
  async execute({
    adults,
    children,
    departureDate,
    destinationLocationCode,
    infants,
    originLocationCode,
    returnDate,
    travelClass
  }: IPackageRequest): Promise<Package[]> {
    // isBefore(new Date(departureDate), Date.now())
    if (!isMatch(departureDate, 'yyyy-MM-dd')) {
      throw new AppError("Formart departure date not match, example format yyyy-MM-dd.");
    }

    const parts = departureDate.split('-')

    const newDateFepartureDate = new Date(Number(parts[0]), Number(parts[1]), Number(parts[2]))

    if (isYesterday(newDateFepartureDate)) {
      throw new AppError("You can't search in the past.");
    }

    const flights = await flightOfferSearchService.execute({
      adults,
      children,
      departureDate,
      destinationLocationCode,
      infants,
      originLocationCode,
      returnDate,
      travelClass
    });

    const hotels = await hotelOfferSearchService.execute({
      adults,
      checkInDate: departureDate,
      checkOutDate: returnDate,
      cityCode: destinationLocationCode,
      roomQuantity: 1
    });

    let packages = [];

    if (hotels.data.length < flights.data.length) {
      for (let index = 0; index < hotels.data.length; index++) {
        packages.push({
          flight: flights.data[index],
          hotel: hotels.data[index],
          total: Number(hotels.data[index].offers[0].price.total) + Number(flights.data[index].price.total),
          off: Math.floor(Math.random() * (50 - 0)) + 0,
        } as Package)

      }
    } else {
      for (let index = 0; index < flights.data.length; index++) {
        packages.push({
          flight: flights.data[index],
          hotel: hotels.data[index],
          total: Number(hotels.data[index].offers[0].price.total) + Number(flights.data[index].price.total),
          off: Math.floor(Math.random() * (50 - 0)) + 0,
        })

      }
    }

    return packages as Package[]
  }
}