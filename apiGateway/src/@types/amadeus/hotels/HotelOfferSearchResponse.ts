// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export interface HotelOfferSearchResponse {
  data: HotelOffer[];
}

export interface HotelOffer {
  type:      string;
  hotel:     Hotel;
  available: boolean;
  offers:    Offer[];
  self:      string;
}

export interface Hotel {
  type:          string;
  hotelId:       string;
  chainCode:     string;
  dupeId:        string;
  name:          string;
  rating:        string;
  cityCode:      string;
  latitude:      number;
  longitude:     number;
  hotelDistance: HotelDistance;
  address:       Address;
  contact:       Contact;
  description:   Description;
}

export interface Address {
  lines:       string[];
  postalCode:  string;
  cityName:    string;
  countryCode: string;
  stateCode:   string;
}

export interface Contact {
  phone: string;
  fax:   string;
  email: string;
}

export interface Description {
  lang: string;
  text: string;
}

export interface HotelDistance {
  distance:     number;
  distanceUnit: string;
}

export interface Offer {
  id:           string;
  checkInDate:  string;
  checkOutDate: string;
  rateCode:     string;
  commission:   Commission;
  room:         Room;
  guests:       Guests;
  price:        Price;
  policies:     Policies;
  self:         string;
}

export interface Commission {
  percentage: string;
}

export interface Guests {
  adults: number;
}

export interface Policies {
  paymentType:  string;
  cancellation: Cancellation;
}

export interface Cancellation {
  deadline: string;
}

export interface Price {
  currency: string;
  base:     string;
  total:    string;
  taxes:    Tax[];
}

export interface Tax {
  code:     string;
  amount:   string;
  currency: string;
  included: boolean;
}

export interface Room {
  type:          string;
  typeEstimated: TypeEstimated;
  description:   Description;
}

export interface TypeEstimated {
  category: string;
  beds:     number;
  bedType:  string;
}
