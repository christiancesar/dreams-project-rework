// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hotel_pb = require('./hotel_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hotel_HotelListResponse(arg) {
  if (!(arg instanceof hotel_pb.HotelListResponse)) {
    throw new Error('Expected argument of type hotel.HotelListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hotel_HotelListResponse(buffer_arg) {
  return hotel_pb.HotelListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hotel_HotelOffersRequest(arg) {
  if (!(arg instanceof hotel_pb.HotelOffersRequest)) {
    throw new Error('Expected argument of type hotel.HotelOffersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hotel_HotelOffersRequest(buffer_arg) {
  return hotel_pb.HotelOffersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hotel_HotelOffersResponse(arg) {
  if (!(arg instanceof hotel_pb.HotelOffersResponse)) {
    throw new Error('Expected argument of type hotel.HotelOffersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hotel_HotelOffersResponse(buffer_arg) {
  return hotel_pb.HotelOffersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hotel_HotelRequest(arg) {
  if (!(arg instanceof hotel_pb.HotelRequest)) {
    throw new Error('Expected argument of type hotel.HotelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hotel_HotelRequest(buffer_arg) {
  return hotel_pb.HotelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hotel_HotelResponse(arg) {
  if (!(arg instanceof hotel_pb.HotelResponse)) {
    throw new Error('Expected argument of type hotel.HotelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hotel_HotelResponse(buffer_arg) {
  return hotel_pb.HotelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_hotel_HotelShowRequest(arg) {
  if (!(arg instanceof hotel_pb.HotelShowRequest)) {
    throw new Error('Expected argument of type hotel.HotelShowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_hotel_HotelShowRequest(buffer_arg) {
  return hotel_pb.HotelShowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var HotelsService = exports.HotelsService = {
  searchHotelOffer: {
    path: '/hotel.Hotels/searchHotelOffer',
    requestStream: false,
    responseStream: false,
    requestType: hotel_pb.HotelOffersRequest,
    responseType: hotel_pb.HotelOffersResponse,
    requestSerialize: serialize_hotel_HotelOffersRequest,
    requestDeserialize: deserialize_hotel_HotelOffersRequest,
    responseSerialize: serialize_hotel_HotelOffersResponse,
    responseDeserialize: deserialize_hotel_HotelOffersResponse,
  },
  createHotel: {
    path: '/hotel.Hotels/createHotel',
    requestStream: false,
    responseStream: false,
    requestType: hotel_pb.HotelRequest,
    responseType: hotel_pb.HotelResponse,
    requestSerialize: serialize_hotel_HotelRequest,
    requestDeserialize: deserialize_hotel_HotelRequest,
    responseSerialize: serialize_hotel_HotelResponse,
    responseDeserialize: deserialize_hotel_HotelResponse,
  },
  listHotels: {
    path: '/hotel.Hotels/listHotels',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: hotel_pb.HotelListResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_hotel_HotelListResponse,
    responseDeserialize: deserialize_hotel_HotelListResponse,
  },
  showHotel: {
    path: '/hotel.Hotels/showHotel',
    requestStream: false,
    responseStream: false,
    requestType: hotel_pb.HotelShowRequest,
    responseType: hotel_pb.HotelResponse,
    requestSerialize: serialize_hotel_HotelShowRequest,
    requestDeserialize: deserialize_hotel_HotelShowRequest,
    responseSerialize: serialize_hotel_HotelResponse,
    responseDeserialize: deserialize_hotel_HotelResponse,
  },
};

exports.HotelsClient = grpc.makeGenericClientConstructor(HotelsService);
