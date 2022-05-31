// package: flight
// file: flights.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class FlightOffersRequest extends jspb.Message { 
    getOriginlocationcode(): string;
    setOriginlocationcode(value: string): FlightOffersRequest;
    getDestinationlocationcode(): string;
    setDestinationlocationcode(value: string): FlightOffersRequest;
    getDeparturedate(): string;
    setDeparturedate(value: string): FlightOffersRequest;
    getReturndate(): string;
    setReturndate(value: string): FlightOffersRequest;
    getAdults(): number;
    setAdults(value: number): FlightOffersRequest;
    getChildren(): number;
    setChildren(value: number): FlightOffersRequest;
    getInfants(): number;
    setInfants(value: number): FlightOffersRequest;
    getTravelclass(): string;
    setTravelclass(value: string): FlightOffersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightOffersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FlightOffersRequest): FlightOffersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightOffersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightOffersRequest;
    static deserializeBinaryFromReader(message: FlightOffersRequest, reader: jspb.BinaryReader): FlightOffersRequest;
}

export namespace FlightOffersRequest {
    export type AsObject = {
        originlocationcode: string,
        destinationlocationcode: string,
        departuredate: string,
        returndate: string,
        adults: number,
        children: number,
        infants: number,
        travelclass: string,
    }
}

export class FlightOffersResponse extends jspb.Message { 
    getFlightoffers(): string;
    setFlightoffers(value: string): FlightOffersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightOffersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FlightOffersResponse): FlightOffersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightOffersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightOffersResponse;
    static deserializeBinaryFromReader(message: FlightOffersResponse, reader: jspb.BinaryReader): FlightOffersResponse;
}

export namespace FlightOffersResponse {
    export type AsObject = {
        flightoffers: string,
    }
}

export class Flight extends jspb.Message { 
    getId(): string;
    setId(value: string): Flight;
    getItineraries(): string;
    setItineraries(value: string): Flight;
    getPrice(): string;
    setPrice(value: string): Flight;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Flight.AsObject;
    static toObject(includeInstance: boolean, msg: Flight): Flight.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Flight, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Flight;
    static deserializeBinaryFromReader(message: Flight, reader: jspb.BinaryReader): Flight;
}

export namespace Flight {
    export type AsObject = {
        id: string,
        itineraries: string,
        price: string,
    }
}

export class FlightRequest extends jspb.Message { 
    getItineraries(): string;
    setItineraries(value: string): FlightRequest;
    getPrice(): string;
    setPrice(value: string): FlightRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FlightRequest): FlightRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightRequest;
    static deserializeBinaryFromReader(message: FlightRequest, reader: jspb.BinaryReader): FlightRequest;
}

export namespace FlightRequest {
    export type AsObject = {
        itineraries: string,
        price: string,
    }
}

export class FlightResponse extends jspb.Message { 

    hasFlight(): boolean;
    clearFlight(): void;
    getFlight(): Flight | undefined;
    setFlight(value?: Flight): FlightResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FlightResponse): FlightResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightResponse;
    static deserializeBinaryFromReader(message: FlightResponse, reader: jspb.BinaryReader): FlightResponse;
}

export namespace FlightResponse {
    export type AsObject = {
        flight?: Flight.AsObject,
    }
}

export class FlightListResponse extends jspb.Message { 
    clearFlightList(): void;
    getFlightList(): Array<Flight>;
    setFlightList(value: Array<Flight>): FlightListResponse;
    addFlight(value?: Flight, index?: number): Flight;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FlightListResponse): FlightListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightListResponse;
    static deserializeBinaryFromReader(message: FlightListResponse, reader: jspb.BinaryReader): FlightListResponse;
}

export namespace FlightListResponse {
    export type AsObject = {
        flightList: Array<Flight.AsObject>,
    }
}

export class FlightShowRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): FlightShowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FlightShowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FlightShowRequest): FlightShowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FlightShowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FlightShowRequest;
    static deserializeBinaryFromReader(message: FlightShowRequest, reader: jspb.BinaryReader): FlightShowRequest;
}

export namespace FlightShowRequest {
    export type AsObject = {
        id: string,
    }
}
