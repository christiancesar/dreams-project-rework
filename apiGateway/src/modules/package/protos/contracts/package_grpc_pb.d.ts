// package: packagetrip
// file: package.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as package_pb from "./package_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IPackagesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    searchPackage: IPackagesService_IsearchPackage;
}

interface IPackagesService_IsearchPackage extends grpc.MethodDefinition<package_pb.PackageSearchRequest, package_pb.PackageSearchResponse> {
    path: "/packagetrip.Packages/searchPackage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<package_pb.PackageSearchRequest>;
    requestDeserialize: grpc.deserialize<package_pb.PackageSearchRequest>;
    responseSerialize: grpc.serialize<package_pb.PackageSearchResponse>;
    responseDeserialize: grpc.deserialize<package_pb.PackageSearchResponse>;
}

export const PackagesService: IPackagesService;

export interface IPackagesServer extends grpc.UntypedServiceImplementation {
    searchPackage: grpc.handleUnaryCall<package_pb.PackageSearchRequest, package_pb.PackageSearchResponse>;
}

export interface IPackagesClient {
    searchPackage(request: package_pb.PackageSearchRequest, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    searchPackage(request: package_pb.PackageSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    searchPackage(request: package_pb.PackageSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
}

export class PackagesClient extends grpc.Client implements IPackagesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public searchPackage(request: package_pb.PackageSearchRequest, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    public searchPackage(request: package_pb.PackageSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    public searchPackage(request: package_pb.PackageSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
}
