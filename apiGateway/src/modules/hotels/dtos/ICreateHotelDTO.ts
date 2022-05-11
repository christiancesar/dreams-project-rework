import { Prisma } from "@prisma/client";

export default interface ICreateHotelDTO {
  hotel: Prisma.JsonObject;
}