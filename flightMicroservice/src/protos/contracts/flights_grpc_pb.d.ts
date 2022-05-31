// package: flight
// file: flights.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as flights_pb from "./flights_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IFlightsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    searchFlightOffer: IFlightsService_IsearchFlightOffer;
    createFlight: IFlightsService_IcreateFlight;
    listFlights: IFlightsService_IlistFlights;
    showFlight: IFlightsService_IshowFlight;
}

interface IFlightsService_IsearchFlightOffer extends grpc.MethodDefinition<flights_pb.FlightOffersRequest, flights_pb.FlightOffersResponse> {
    path: "/flight.Flights/searchFlightOffer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<flights_pb.FlightOffersRequest>;
    requestDeserialize: grpc.deserialize<flights_pb.FlightOffersRequest>;
    responseSerialize: grpc.serialize<flights_pb.FlightOffersResponse>;
    responseDeserialize: grpc.deserialize<flights_pb.FlightOffersResponse>;
}
interface IFlightsService_IcreateFlight extends grpc.MethodDefinition<flights_pb.FlightRequest, flights_pb.FlightResponse> {
    path: "/flight.Flights/createFlight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<flights_pb.FlightRequest>;
    requestDeserialize: grpc.deserialize<flights_pb.FlightRequest>;
    responseSerialize: grpc.serialize<flights_pb.FlightResponse>;
    responseDeserialize: grpc.deserialize<flights_pb.FlightResponse>;
}
interface IFlightsService_IlistFlights extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, flights_pb.FlightListResponse> {
    path: "/flight.Flights/listFlights";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<flights_pb.FlightListResponse>;
    responseDeserialize: grpc.deserialize<flights_pb.FlightListResponse>;
}
interface IFlightsService_IshowFlight extends grpc.MethodDefinition<flights_pb.FlightShowRequest, flights_pb.FlightResponse> {
    path: "/flight.Flights/showFlight";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<flights_pb.FlightShowRequest>;
    requestDeserialize: grpc.deserialize<flights_pb.FlightShowRequest>;
    responseSerialize: grpc.serialize<flights_pb.FlightResponse>;
    responseDeserialize: grpc.deserialize<flights_pb.FlightResponse>;
}

export const FlightsService: IFlightsService;

export interface IFlightsServer extends grpc.UntypedServiceImplementation {
    searchFlightOffer: grpc.handleUnaryCall<flights_pb.FlightOffersRequest, flights_pb.FlightOffersResponse>;
    createFlight: grpc.handleUnaryCall<flights_pb.FlightRequest, flights_pb.FlightResponse>;
    listFlights: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, flights_pb.FlightListResponse>;
    showFlight: grpc.handleUnaryCall<flights_pb.FlightShowRequest, flights_pb.FlightResponse>;
}

export interface IFlightsClient {
    searchFlightOffer(request: flights_pb.FlightOffersRequest, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
    searchFlightOffer(request: flights_pb.FlightOffersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
    searchFlightOffer(request: flights_pb.FlightOffersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
    createFlight(request: flights_pb.FlightRequest, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
    createFlight(request: flights_pb.FlightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
    createFlight(request: flights_pb.FlightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
    listFlights(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightListResponse) => void): grpc.ClientUnaryCall;
    listFlights(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightListResponse) => void): grpc.ClientUnaryCall;
    listFlights(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightListResponse) => void): grpc.ClientUnaryCall;
    showFlight(request: flights_pb.FlightShowRequest, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
    showFlight(request: flights_pb.FlightShowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
    showFlight(request: flights_pb.FlightShowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
}

export class FlightsClient extends grpc.Client implements IFlightsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public searchFlightOffer(request: flights_pb.FlightOffersRequest, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
    public searchFlightOffer(request: flights_pb.FlightOffersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
    public searchFlightOffer(request: flights_pb.FlightOffersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightOffersResponse) => void): grpc.ClientUnaryCall;
    public createFlight(request: flights_pb.FlightRequest, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
    public createFlight(request: flights_pb.FlightRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
    public createFlight(request: flights_pb.FlightRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
    public listFlights(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightListResponse) => void): grpc.ClientUnaryCall;
    public listFlights(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightListResponse) => void): grpc.ClientUnaryCall;
    public listFlights(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightListResponse) => void): grpc.ClientUnaryCall;
    public showFlight(request: flights_pb.FlightShowRequest, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
    public showFlight(request: flights_pb.FlightShowRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
    public showFlight(request: flights_pb.FlightShowRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: flights_pb.FlightResponse) => void): grpc.ClientUnaryCall;
}
