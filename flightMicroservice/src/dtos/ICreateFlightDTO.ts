import { Prisma } from "@prisma/client";

export interface ICreateFlightDTO {
  userId: string;
  itineraries: any;
  price: any;
}