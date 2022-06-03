// package: hotel
// file: hotel.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class HotelOffersSearch extends jspb.Message { 
    getCitycode(): string;
    setCitycode(value: string): HotelOffersSearch;
    getCheckindate(): string;
    setCheckindate(value: string): HotelOffersSearch;
    getCheckoutdate(): string;
    setCheckoutdate(value: string): HotelOffersSearch;
    getRoomquantity(): number;
    setRoomquantity(value: number): HotelOffersSearch;
    getAdults(): number;
    setAdults(value: number): HotelOffersSearch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HotelOffersSearch.AsObject;
    static toObject(includeInstance: boolean, msg: HotelOffersSearch): HotelOffersSearch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HotelOffersSearch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HotelOffersSearch;
    static deserializeBinaryFromReader(message: HotelOffersSearch, reader: jspb.BinaryReader): HotelOffersSearch;
}

export namespace HotelOffersSearch {
    export type AsObject = {
        citycode: string,
        checkindate: string,
        checkoutdate: string,
        roomquantity: number,
        adults: number,
    }
}

export class HotelOffersRequest extends jspb.Message { 

    hasHotelofferssearch(): boolean;
    clearHotelofferssearch(): void;
    getHotelofferssearch(): HotelOffersSearch | undefined;
    setHotelofferssearch(value?: HotelOffersSearch): HotelOffersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HotelOffersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HotelOffersRequest): HotelOffersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HotelOffersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HotelOffersRequest;
    static deserializeBinaryFromReader(message: HotelOffersRequest, reader: jspb.BinaryReader): HotelOffersRequest;
}

export namespace HotelOffersRequest {
    export type AsObject = {
        hotelofferssearch?: HotelOffersSearch.AsObject,
    }
}

export class HotelOffersResponse extends jspb.Message { 
    getHoteloffers(): string;
    setHoteloffers(value: string): HotelOffersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HotelOffersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HotelOffersResponse): HotelOffersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HotelOffersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HotelOffersResponse;
    static deserializeBinaryFromReader(message: HotelOffersResponse, reader: jspb.BinaryReader): HotelOffersResponse;
}

export namespace HotelOffersResponse {
    export type AsObject = {
        hoteloffers: string,
    }
}

export class Hotel extends jspb.Message { 
    getId(): string;
    setId(value: string): Hotel;
    getHotel(): string;
    setHotel(value: string): Hotel;
    getOffers(): string;
    setOffers(value: string): Hotel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hotel.AsObject;
    static toObject(includeInstance: boolean, msg: Hotel): Hotel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hotel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hotel;
    static deserializeBinaryFromReader(message: Hotel, reader: jspb.BinaryReader): Hotel;
}

export namespace Hotel {
    export type AsObject = {
        id: string,
        hotel: string,
        offers: string,
    }
}

export class HotelRequest extends jspb.Message { 
    getHotel(): string;
    setHotel(value: string): HotelRequest;
    getOffers(): string;
    setOffers(value: string): HotelRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HotelRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HotelRequest): HotelRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HotelRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HotelRequest;
    static deserializeBinaryFromReader(message: HotelRequest, reader: jspb.BinaryReader): HotelRequest;
}

export namespace HotelRequest {
    export type AsObject = {
        hotel: string,
        offers: string,
    }
}

export class HotelResponse extends jspb.Message { 

    hasHotel(): boolean;
    clearHotel(): void;
    getHotel(): Hotel | undefined;
    setHotel(value?: Hotel): HotelResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HotelResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HotelResponse): HotelResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HotelResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HotelResponse;
    static deserializeBinaryFromReader(message: HotelResponse, reader: jspb.BinaryReader): HotelResponse;
}

export namespace HotelResponse {
    export type AsObject = {
        hotel?: Hotel.AsObject,
    }
}

export class HotelListResponse extends jspb.Message { 
    clearHotelList(): void;
    getHotelList(): Array<Hotel>;
    setHotelList(value: Array<Hotel>): HotelListResponse;
    addHotel(value?: Hotel, index?: number): Hotel;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HotelListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HotelListResponse): HotelListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HotelListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HotelListResponse;
    static deserializeBinaryFromReader(message: HotelListResponse, reader: jspb.BinaryReader): HotelListResponse;
}

export namespace HotelListResponse {
    export type AsObject = {
        hotelList: Array<Hotel.AsObject>,
    }
}

export class HotelShowRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): HotelShowRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HotelShowRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HotelShowRequest): HotelShowRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HotelShowRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HotelShowRequest;
    static deserializeBinaryFromReader(message: HotelShowRequest, reader: jspb.BinaryReader): HotelShowRequest;
}

export namespace HotelShowRequest {
    export type AsObject = {
        id: string,
    }
}
