import { handleUnaryCall, sendUnaryData, ServerErrorResponse, ServerUnaryCall } from "@grpc/grpc-js";
import { IFlightsServer } from "../contracts/flights_grpc_pb";
import { FlightListResponse, FlightOffersRequest, FlightOffersResponse, FlightRequest, FlightResponse, FlightShowRequest } from "../contracts/flights_pb";
import FlightOfferSearchService from '../../services/FlightOfferSearchService'
import { Empty } from "google-protobuf/google/protobuf/empty_pb";

class FlightServer implements IFlightsServer {
  createFlight: handleUnaryCall<FlightRequest, FlightResponse>;
  listFlights: handleUnaryCall<Empty, FlightListResponse>;
  showFlight: handleUnaryCall<FlightShowRequest, FlightResponse>;

  async searchFlightOffer(call: ServerUnaryCall<FlightOffersRequest, FlightOffersResponse>, callback: sendUnaryData<FlightOffersResponse>): Promise<void> {
    try {
      const flightOffersRequest = call.request.toObject()!;
      const flightOffersResponse = new FlightOffersResponse();
      const flightOfferSearchService = new FlightOfferSearchService();

      const response = await flightOfferSearchService.execute({
        adults: flightOffersRequest.adults,
        departureDate: flightOffersRequest.departuredate,
        destinationLocationCode: flightOffersRequest.destinationlocationcode,
        originLocationCode: flightOffersRequest.originlocationcode,
        travelClass: flightOffersRequest.travelclass,
        children: flightOffersRequest.children,
        infants: flightOffersRequest.infants,
        returnDate: flightOffersRequest.returndate
      })

      flightOffersResponse.setFlightoffers(JSON.stringify(response))

      callback(null, flightOffersResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }

  }

  [name: string]: import("@grpc/grpc-js").UntypedHandleCall;
}

export default FlightServer;