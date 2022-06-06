// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var package_pb = require('./package_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

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
  // rpc createPackage(PackageRequest) returns (PackageResponse);
// rpc listPackages(google.protobuf.Empty) returns (PackageResponse);
// rpc showPackage(PackageRequest) returns (PackageResponse);
// rpc updatePackage(PackageRequest) returns (PackageResponse);
};

exports.PackagesClient = grpc.makeGenericClientConstructor(PackagesService);
