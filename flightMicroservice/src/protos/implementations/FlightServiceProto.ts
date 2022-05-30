import { handleUnaryCall, sendUnaryData, ServerErrorResponse, ServerUnaryCall } from "@grpc/grpc-js";
import { IFlightsServer } from "../contracts/flights_grpc_pb";
import { FlightRequest, FlightOffersResponse } from "../contracts/flights_pb";
import FlightOfferSearchService from '../../services/FlightOfferSearchService'

class FlightServer implements IFlightsServer {

  async searchFlightOffer(call: ServerUnaryCall<FlightRequest, FlightOffersResponse>, callback: sendUnaryData<FlightOffersResponse>): Promise<void> {
    try {
      const flightRequest = call.request.getFlight()?.toObject()!;
      const flightOffersResponse = new FlightOffersResponse();
      const flightOfferSearchService = new FlightOfferSearchService();

      const response = await flightOfferSearchService.execute({
        adults: flightRequest.adults,
        departureDate: flightRequest.departuredate,
        destinationLocationCode: flightRequest.destinationlocationcode,
        originLocationCode: flightRequest.originlocationcode,
        travelClass: flightRequest.travelclass,
        children: flightRequest.children,
        infants: flightRequest.infants,
        returnDate: flightRequest.returndate
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