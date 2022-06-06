// package: packagetrip
// file: package.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class PackageSearch extends jspb.Message { 
    getOriginlocationcode(): string;
    setOriginlocationcode(value: string): PackageSearch;
    getDestinationlocationcode(): string;
    setDestinationlocationcode(value: string): PackageSearch;
    getDeparturedate(): string;
    setDeparturedate(value: string): PackageSearch;
    getReturndate(): string;
    setReturndate(value: string): PackageSearch;
    getAdults(): number;
    setAdults(value: number): PackageSearch;
    getChildren(): number;
    setChildren(value: number): PackageSearch;
    getInfants(): number;
    setInfants(value: number): PackageSearch;
    getTravelclass(): string;
    setTravelclass(value: string): PackageSearch;
    getRoomquantity(): number;
    setRoomquantity(value: number): PackageSearch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageSearch.AsObject;
    static toObject(includeInstance: boolean, msg: PackageSearch): PackageSearch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageSearch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageSearch;
    static deserializeBinaryFromReader(message: PackageSearch, reader: jspb.BinaryReader): PackageSearch;
}

export namespace PackageSearch {
    export type AsObject = {
        originlocationcode: string,
        destinationlocationcode: string,
        departuredate: string,
        returndate: string,
        adults: number,
        children: number,
        infants: number,
        travelclass: string,
        roomquantity: number,
    }
}

export class PackageSearchResponse extends jspb.Message { 
    getPackage(): string;
    setPackage(value: string): PackageSearchResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageSearchResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PackageSearchResponse): PackageSearchResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageSearchResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageSearchResponse;
    static deserializeBinaryFromReader(message: PackageSearchResponse, reader: jspb.BinaryReader): PackageSearchResponse;
}

export namespace PackageSearchResponse {
    export type AsObject = {
        pb_package: string,
    }
}

export class PackageSearchRequest extends jspb.Message { 

    hasPackagesearch(): boolean;
    clearPackagesearch(): void;
    getPackagesearch(): PackageSearch | undefined;
    setPackagesearch(value?: PackageSearch): PackageSearchRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageSearchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PackageSearchRequest): PackageSearchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageSearchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageSearchRequest;
    static deserializeBinaryFromReader(message: PackageSearchRequest, reader: jspb.BinaryReader): PackageSearchRequest;
}

export namespace PackageSearchRequest {
    export type AsObject = {
        packagesearch?: PackageSearch.AsObject,
    }
}
