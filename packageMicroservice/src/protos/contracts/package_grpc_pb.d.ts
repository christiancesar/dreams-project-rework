// package: packagetrip
// file: package.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as package_pb from "./package_pb";

interface IPackagesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    searchPackage: IPackagesService_IsearchPackage;
    createPackage: IPackagesService_IcreatePackage;
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
interface IPackagesService_IcreatePackage extends grpc.MethodDefinition<package_pb.PackageCreateRequest, package_pb.PackageCreatedResponse> {
    path: "/packagetrip.Packages/createPackage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<package_pb.PackageCreateRequest>;
    requestDeserialize: grpc.deserialize<package_pb.PackageCreateRequest>;
    responseSerialize: grpc.serialize<package_pb.PackageCreatedResponse>;
    responseDeserialize: grpc.deserialize<package_pb.PackageCreatedResponse>;
}

export const PackagesService: IPackagesService;

export interface IPackagesServer extends grpc.UntypedServiceImplementation {
    searchPackage: grpc.handleUnaryCall<package_pb.PackageSearchRequest, package_pb.PackageSearchResponse>;
    createPackage: grpc.handleUnaryCall<package_pb.PackageCreateRequest, package_pb.PackageCreatedResponse>;
}

export interface IPackagesClient {
    searchPackage(request: package_pb.PackageSearchRequest, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    searchPackage(request: package_pb.PackageSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    searchPackage(request: package_pb.PackageSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    createPackage(request: package_pb.PackageCreateRequest, callback: (error: grpc.ServiceError | null, response: package_pb.PackageCreatedResponse) => void): grpc.ClientUnaryCall;
    createPackage(request: package_pb.PackageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_pb.PackageCreatedResponse) => void): grpc.ClientUnaryCall;
    createPackage(request: package_pb.PackageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_pb.PackageCreatedResponse) => void): grpc.ClientUnaryCall;
}

export class PackagesClient extends grpc.Client implements IPackagesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public searchPackage(request: package_pb.PackageSearchRequest, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    public searchPackage(request: package_pb.PackageSearchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    public searchPackage(request: package_pb.PackageSearchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_pb.PackageSearchResponse) => void): grpc.ClientUnaryCall;
    public createPackage(request: package_pb.PackageCreateRequest, callback: (error: grpc.ServiceError | null, response: package_pb.PackageCreatedResponse) => void): grpc.ClientUnaryCall;
    public createPackage(request: package_pb.PackageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: package_pb.PackageCreatedResponse) => void): grpc.ClientUnaryCall;
    public createPackage(request: package_pb.PackageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: package_pb.PackageCreatedResponse) => void): grpc.ClientUnaryCall;
}
