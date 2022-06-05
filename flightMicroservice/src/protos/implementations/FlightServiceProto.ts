import { handleUnaryCall, ServerErrorResponse } from "@grpc/grpc-js";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import CreateFlightService from "../../services/CreateFlightService";
import FlightOfferSearchService from '../../services/FlightOfferSearchService';
import ListFlightsService from "../../services/ListFlightsService";
import ShowFlightService from "../../services/ShowFlightService";
import { IFlightsServer } from "dreams-proto-sharing/src/contracts/flight/flights_grpc_pb";
import { Flight, FlightListResponse, FlightOffersRequest, FlightOffersResponse, FlightRequest, FlightResponse, FlightShowRequest } from "dreams-proto-sharing/src/contracts/flight/flights_pb";

class FlightServer implements IFlightsServer {
  createFlight: handleUnaryCall<FlightRequest, FlightResponse> = async (call, callback): Promise<void> => {
    try {
      const flightRequest = call.request.toObject();
      const flightResponse = new FlightResponse();
      const createFlightService = new CreateFlightService();

      const flight = await createFlightService.execute({
        itineraries: flightRequest.itineraries,
        price: flightRequest.price
      })

      flightResponse.setFlight(
        new Flight()
          .setId(flight.id)
          .setItineraries(flight.itineraries)
          .setPrice(flight.price)
      )

      callback(null, flightResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }

  }

  listFlights: handleUnaryCall<Empty, FlightListResponse> = async (call, callback): Promise<void> => {
    try {
      const flightListResponse = new FlightListResponse();
      const listFlightsService = new ListFlightsService();

      const flights = await listFlightsService.execute();

      flights.map((flight) => {
        flightListResponse.addFlight(
          new Flight().setId(flight.id)
            .setItineraries(JSON.stringify(flight.itineraries))
            .setPrice(JSON.stringify(flight.price))
        );
      })

      callback(null, flightListResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }

  }

  showFlight: handleUnaryCall<FlightShowRequest, FlightResponse> = async (call, callback): Promise<void> => {
    try {
      const flightShowRequest = call.request;
      const flightResponse = new FlightResponse();
      const showFlightService = new ShowFlightService();
      const flight = await showFlightService.execute({ flightId: flightShowRequest.getId() });

      flightResponse.setFlight(
        new Flight().setId(flight.id)
          .setItineraries(JSON.stringify(flight.itineraries))
          .setPrice(JSON.stringify(flight.price))
      )

      callback(null, flightResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }
  }

  searchFlightOffer: handleUnaryCall<FlightOffersRequest, FlightOffersResponse> = async (call, callback): Promise<void> => {
    try {
      const flightOffersRequest = call.request.getFlightofferssearch()?.toObject()!
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