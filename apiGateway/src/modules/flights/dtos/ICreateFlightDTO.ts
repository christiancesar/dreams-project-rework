import { Prisma } from "@prisma/client";

export interface ICreateFlightDTO {
  itineraries: Prisma.JsonArray;
  price: Prisma.JsonObject;
}