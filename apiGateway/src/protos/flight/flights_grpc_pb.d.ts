// package: flight
// file: flights.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as flights_pb from "./flights_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IFlightsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    searchFlightOffer: IFlightsService_IsearchFlightOffer;
}

interface IFlightsService_IsearchFlightOffer extends grpc.MethodDefinition<flights_pb.FlightRequest, flights_pb.FlightOffersResponse> {
    path: "/flight.Flights/searchFlightOffer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<flights_pb.FlightRequest>;
    requestDeserialize: grpc.deserialize<flights_pb.FlightRequest>;
    responseSerialize: grpc.serialize<flights_pb.FlightOffersResponse>;
    responseDeserialize: grpc.deserialize<flights_pb.FlightOffersResponse>;
}

export const FlightsService: IFlightsService;

export interface IFlightsServer extends grpc.UntypedServiceImplementation {
    searchFlightOffer: grpc.handleUnaryCall<flights_pb.FlightRequest, flights_pb.FlightOffersResponse>;
}

export interface IFlightsClient {
    searchFlightOffer(request: flights_pb.FlightRequest, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
    searchFlightOffer(request: flights_pb.FlightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
    searchFlightOffer(request: flights_pb.FlightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
}

export class FlightsClient extends grpc.Client implements IFlightsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public searchFlightOffer(request: flights_pb.FlightRequest, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
    public searchFlightOffer(request: flights_pb.FlightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
    public searchFlightOffer(request: flights_pb.FlightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
}
