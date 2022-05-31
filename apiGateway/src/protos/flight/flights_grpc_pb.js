// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var flights_pb = require('./flights_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_flight_FlightListResponse(arg) {
  if (!(arg instanceof flights_pb.FlightListResponse)) {
    throw new Error('Expected argument of type flight.FlightListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flight_FlightListResponse(buffer_arg) {
  return flights_pb.FlightListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flight_FlightOffersRequest(arg) {
  if (!(arg instanceof flights_pb.FlightOffersRequest)) {
    throw new Error('Expected argument of type flight.FlightOffersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flight_FlightOffersRequest(buffer_arg) {
  return flights_pb.FlightOffersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flight_FlightOffersResponse(arg) {
  if (!(arg instanceof flights_pb.FlightOffersResponse)) {
    throw new Error('Expected argument of type flight.FlightOffersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flight_FlightOffersResponse(buffer_arg) {
  return flights_pb.FlightOffersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flight_FlightRequest(arg) {
  if (!(arg instanceof flights_pb.FlightRequest)) {
    throw new Error('Expected argument of type flight.FlightRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flight_FlightRequest(buffer_arg) {
  return flights_pb.FlightRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flight_FlightResponse(arg) {
  if (!(arg instanceof flights_pb.FlightResponse)) {
    throw new Error('Expected argument of type flight.FlightResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flight_FlightResponse(buffer_arg) {
  return flights_pb.FlightResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_flight_FlightShowRequest(arg) {
  if (!(arg instanceof flights_pb.FlightShowRequest)) {
    throw new Error('Expected argument of type flight.FlightShowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_flight_FlightShowRequest(buffer_arg) {
  return flights_pb.FlightShowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var FlightsService = exports.FlightsService = {
  searchFlightOffer: {
    path: '/flight.Flights/searchFlightOffer',
    requestStream: false,
    responseStream: false,
    requestType: flights_pb.FlightOffersRequest,
    responseType: flights_pb.FlightOffersResponse,
    requestSerialize: serialize_flight_FlightOffersRequest,
    requestDeserialize: deserialize_flight_FlightOffersRequest,
    responseSerialize: serialize_flight_FlightOffersResponse,
    responseDeserialize: deserialize_flight_FlightOffersResponse,
  },
  createFlight: {
    path: '/flight.Flights/createFlight',
    requestStream: false,
    responseStream: false,
    requestType: flights_pb.FlightRequest,
    responseType: flights_pb.FlightResponse,
    requestSerialize: serialize_flight_FlightRequest,
    requestDeserialize: deserialize_flight_FlightRequest,
    responseSerialize: serialize_flight_FlightResponse,
    responseDeserialize: deserialize_flight_FlightResponse,
  },
  listFlights: {
    path: '/flight.Flights/listFlights',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: flights_pb.FlightListResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_flight_FlightListResponse,
    responseDeserialize: deserialize_flight_FlightListResponse,
  },
  showFlight: {
    path: '/flight.Flights/showFlight',
    requestStream: false,
    responseStream: false,
    requestType: flights_pb.FlightShowRequest,
    responseType: flights_pb.FlightResponse,
    requestSerialize: serialize_flight_FlightShowRequest,
    requestDeserialize: deserialize_flight_FlightShowRequest,
    responseSerialize: serialize_flight_FlightResponse,
    responseDeserialize: deserialize_flight_FlightResponse,
  },
};

exports.FlightsClient = grpc.makeGenericClientConstructor(FlightsService);
