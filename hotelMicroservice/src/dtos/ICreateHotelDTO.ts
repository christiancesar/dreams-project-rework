import { Prisma } from "@prisma/client";

export default interface ICreateHotelDTO {
  userId: string;
  hotel: Prisma.JsonObject;
  offers: Prisma.JsonArray;
}