// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var package_pb = require('./package_pb.js');

function serialize_packagetrip_PackageCreateRequest(arg) {
  if (!(arg instanceof package_pb.PackageCreateRequest)) {
    throw new Error('Expected argument of type packagetrip.PackageCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_packagetrip_PackageCreateRequest(buffer_arg) {
  return package_pb.PackageCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_packagetrip_PackageCreatedResponse(arg) {
  if (!(arg instanceof package_pb.PackageCreatedResponse)) {
    throw new Error('Expected argument of type packagetrip.PackageCreatedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_packagetrip_PackageCreatedResponse(buffer_arg) {
  return package_pb.PackageCreatedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_packagetrip_PackageSearchRequest(arg) {
  if (!(arg instanceof package_pb.PackageSearchRequest)) {
    throw new Error('Expected argument of type packagetrip.PackageSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_packagetrip_PackageSearchRequest(buffer_arg) {
  return package_pb.PackageSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_packagetrip_PackageSearchResponse(arg) {
  if (!(arg instanceof package_pb.PackageSearchResponse)) {
    throw new Error('Expected argument of type packagetrip.PackageSearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_packagetrip_PackageSearchResponse(buffer_arg) {
  return package_pb.PackageSearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PackagesService = exports.PackagesService = {
  searchPackage: {
    path: '/packagetrip.Packages/searchPackage',
    requestStream: false,
    responseStream: false,
    requestType: package_pb.PackageSearchRequest,
    responseType: package_pb.PackageSearchResponse,
    requestSerialize: serialize_packagetrip_PackageSearchRequest,
    requestDeserialize: deserialize_packagetrip_PackageSearchRequest,
    responseSerialize: serialize_packagetrip_PackageSearchResponse,
    responseDeserialize: deserialize_packagetrip_PackageSearchResponse,
  },
  createPackage: {
    path: '/packagetrip.Packages/createPackage',
    requestStream: false,
    responseStream: false,
    requestType: package_pb.PackageCreateRequest,
    responseType: package_pb.PackageCreatedResponse,
    requestSerialize: serialize_packagetrip_PackageCreateRequest,
    requestDeserialize: deserialize_packagetrip_PackageCreateRequest,
    responseSerialize: serialize_packagetrip_PackageCreatedResponse,
    responseDeserialize: deserialize_packagetrip_PackageCreatedResponse,
  },
  // rpc listPackages(google.protobuf.Empty) returns (PackageResponse);
// rpc showPackage(PackageRequest) returns (PackageResponse);
// rpc updatePackage(PackageRequest) returns (PackageResponse);
};

exports.PackagesClient = grpc.makeGenericClientConstructor(PackagesService);
