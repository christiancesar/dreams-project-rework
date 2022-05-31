// package: flight
// file: flights.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Flight extends jspb.Message { 
    getOriginlocationcode(): string;
    setOriginlocationcode(value: string): Flight;
    getDestinationlocationcode(): string;
    setDestinationlocationcode(value: string): Flight;
    getDeparturedate(): string;
    setDeparturedate(value: string): Flight;
    getReturndate(): string;
    setReturndate(value: string): Flight;
    getAdults(): number;
    setAdults(value: number): Flight;
    getChildren(): number;
    setChildren(value: number): Flight;
    getInfants(): number;
    setInfants(value: number): Flight;
    getTravelclass(): string;
    setTravelclass(value: string): Flight;

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

export class FlightRequest extends jspb.Message { 

    hasFlight(): boolean;
    clearFlight(): void;
    getFlight(): Flight | undefined;
    setFlight(value?: Flight): FlightRequest;

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
        flight?: Flight.AsObject,
    }
}
