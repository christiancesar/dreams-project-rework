import { handleUnaryCall, ServerErrorResponse } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import HotelOfferSearchService from "../../services/hotelOffers/HotelOffersSearchService";
import CreateHotelService from "../../services/hotels/CreateHotelService";
import ListHotelsService from "../../services/hotels/ListHotelsService";
import ShowHotelService from "../../services/hotels/ShowHotelService";
import { IHotelsServer } from "../contracts/hotel_grpc_pb";
import { Hotel, HotelListResponse, HotelOffersRequest, HotelOffersResponse, HotelRequest, HotelResponse, HotelShowRequest } from "../contracts/hotel_pb";

class HotelServer implements IHotelsServer {
  createHotel: handleUnaryCall<HotelRequest, HotelResponse> = async (call, callback): Promise<void> => {
    try {
      const hotelRequest = call.request.toObject();
      const hotelResponse = new HotelResponse();
      const createHotelService = new CreateHotelService();

      const hotel = await createHotelService.execute({
        hotel: hotelRequest.hotel,
        offers: hotelRequest.offers
      })

      hotelResponse.setHotel(
        new Hotel()
          .setId(hotel.id)
          .setHotel(hotel.hotel)
          .setOffers(hotel.offers)
      )

      callback(null, hotelResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }

  }

  listHotels: handleUnaryCall<Empty, HotelListResponse> = async (call, callback): Promise<void> => {
    try {
      const hotelListResponse = new HotelListResponse();
      const listHotelsService = new ListHotelsService();

      const hotels = await listHotelsService.execute();

      hotels.map((hotel) => {
        hotelListResponse.addHotel(
          new Hotel().setId(hotel.id)
            .setHotel(JSON.stringify(hotel.hotel))
            .setOffers(JSON.stringify(hotel.offers))
        );
      })

      callback(null, hotelListResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }

  }

  showHotel: handleUnaryCall<HotelShowRequest, HotelResponse> = async (call, callback): Promise<void> => {
    try {
      const hotelShowRequest = call.request;
      const hotelResponse = new HotelResponse();
      const showHotelService = new ShowHotelService();
      const hotel = await showHotelService.execute({ hotelId: hotelShowRequest.getId() });

      hotelResponse.setHotel(
        new Hotel().setId(hotel.id)
          .setHotel(JSON.stringify(hotel.hotel))
          .setOffers(JSON.stringify(hotel.offers))
      )

      callback(null, hotelResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }
  }

  searchHotelOffer: handleUnaryCall<HotelOffersRequest, HotelOffersResponse> = async (call, callback): Promise<void> => {
    try {
      const hotelOffersRequest = call.request.getHotelofferssearch()?.toObject()!
      const hotelOffersResponse = new HotelOffersResponse();
      const hotelOfferSearchService = new HotelOfferSearchService();

      const response = await hotelOfferSearchService.execute({
        adults: hotelOffersRequest.adults,
        checkInDate: hotelOffersRequest.checkindate,
        checkOutDate: hotelOffersRequest.checkoutdate,
        cityCode: hotelOffersRequest.citycode,
        roomQuantity: hotelOffersRequest.roomquantity,
      })

      hotelOffersResponse.setHoteloffers(JSON.stringify(response))

      callback(null, hotelOffersResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }

  }

  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
}

export default HotelServer;