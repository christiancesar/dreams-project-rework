import { FlightOffer } from "../@types/amadeus/flights/FlightOfferSearchResponse";
import { HotelOffer } from "../@types/amadeus/hotels/HotelOfferSearchResponse";

export default interface Package {
  flight: FlightOffer;
  hotel: HotelOffer;  
  off: number;  
  total: number;
}