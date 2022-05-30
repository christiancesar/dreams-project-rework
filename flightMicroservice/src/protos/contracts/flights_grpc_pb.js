// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var flights_pb = require('./flights_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

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


var FlightsService = exports.FlightsService = {
  searchFlightOffer: {
    path: '/flight.Flights/searchFlightOffer',
    requestStream: false,
    responseStream: false,
    requestType: flights_pb.FlightRequest,
    responseType: flights_pb.FlightOffersResponse,
    requestSerialize: serialize_flight_FlightRequest,
    requestDeserialize: deserialize_flight_FlightRequest,
    responseSerialize: serialize_flight_FlightOffersResponse,
    responseDeserialize: deserialize_flight_FlightOffersResponse,
  },
  // rpc createUser(UserRequest) returns (UserResponse);
// rpc listUsers(google.protobuf.Empty) returns (UserResponse);
// rpc showUser(UserRequest) returns (UserResponse);
// rpc updateUser(UserRequest) returns (UserResponse);
};

exports.FlightsClient = grpc.makeGenericClientConstructor(FlightsService);
