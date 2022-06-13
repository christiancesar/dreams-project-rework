import { Prisma } from "@prisma/client";

export interface ICreateFlightDTO {
  userId: string;
  itineraries: Prisma.JsonArray;
  price: Prisma.JsonObject;
}