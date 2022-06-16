import { FlightOffersRequest, FlightOffersResponse, FlightOffersSearch } from "dreams-proto-sharing/src/contracts/flight/flight_pb";
import { HotelOffersRequest, HotelOffersResponse, HotelOffersSearch } from "dreams-proto-sharing/src/contracts/hotel/hotel_pb";
import { FlightOffer } from "../../@types/amadeus/flights/FlightOfferSearchResponse";
import { HotelOffer } from "../../@types/amadeus/hotels/HotelOfferSearchResponse";
import Package from "../../dtos/IPackage";
import { IPackageRequest } from "../../dtos/IPackageRequest";
import flightClient from "../../providers/FlightService";
import hotelClient from "../../providers/HotelService";

interface IFlightOffersSearch {
  originLocationCode: string;
  destinationLocationCode: string;
  departureDate: string;
  returnDate?: string;
  adults: number;
  children?: number;
  infants?: number;
  travelClass: string;
}

interface IHotelOffersSearch {
  cityCode: string;
  checkInDate: string;
  checkOutDate: string;
  roomQuantity: number;
  adults: number;
}

export default class AssemblingPackageService {
 
  async execute({
    adults,
    children,
    departureDate,
    destinationLocationCode,
    infants,
    originLocationCode,
    returnDate,
    travelClass,
    roomQuantity
  }: IPackageRequest): Promise<Package[]> {
    // if (!isMatch(departureDate, 'yyyy-MM-dd')) {
    //   throw new AppError("Formart departure date not match, example format yyyy-MM-dd.");
    // }

    // const parts = departureDate.split('-')

    // const newDateFepartureDate = new Date(Number(parts[0]), Number(parts[1]), Number(parts[2]))

    // if (isYesterday(newDateFepartureDate)) {
    //   throw new AppError("You can't search in the past.");
    // }

    const flightServiceRequest = ({
      adults,
      departureDate,
      destinationLocationCode,
      originLocationCode,
      travelClass,
      children,
      infants,
      returnDate
    }: IFlightOffersSearch) => new Promise<FlightOffersResponse>((resolve, reject) => {
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
        ), (err, flight) => {
          if (err) {
            reject(err)
          }
          resolve(flight)
        }
      );
    });

    const hotelServiceRequest = ({ adults, checkInDate, checkOutDate, cityCode, roomQuantity }: IHotelOffersSearch) => new Promise<HotelOffersResponse>((resolve, reject) => {
      hotelClient.searchHotelOffer(
        new HotelOffersRequest().setHotelofferssearch(
          new HotelOffersSearch()
            .setAdults(adults)
            .setCheckindate(checkInDate)
            .setCheckoutdate(checkOutDate)
            .setCitycode(cityCode)
            .setRoomquantity(roomQuantity)
        ), (err, hotel) => {
          if (err) {
            reject(err)
          }
          resolve(hotel)
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

    const hotelOffersResponse = await hotelServiceRequest({
      cityCode: destinationLocationCode,
      checkInDate: departureDate,
      checkOutDate: returnDate,
      roomQuantity,
      adults,
    })
    
    const hotels = JSON.parse(hotelOffersResponse.getHoteloffers()) as HotelOffer[];
    
    const flights = JSON.parse(flightOffersResponse.getFlightoffers()) as FlightOffer[];

    let packages = [] as Package[];

    if (hotels.length < flights.length) {
      for (let index = 0; index < hotels.length; index++) {
        packages.push({
          flight: flights[index],
          hotel: hotels[index],
          total: Number(hotels[index].offers[0].price.total) + Number(flights[index].price.total),
          off: Math.floor(Math.random() * (50 - 0)) + 0,
        } as Package)

      }
    } else {
      for (let index = 0; index < flights.length; index++) {
        packages.push({
          flight: flights[index],
          hotel: hotels[index],
          total: Number(hotels[index].offers[0].price.total) + Number(flights[index].price.total),
          off: Math.floor(Math.random() * (50 - 0)) + 0,
        })

      }
    }

    return packages;
  }
}