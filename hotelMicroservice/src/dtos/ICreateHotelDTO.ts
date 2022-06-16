import { Prisma } from "@prisma/client";

export default interface ICreateHotelDTO {
  userId: string;
  hotel: any;
  offers: any;
}