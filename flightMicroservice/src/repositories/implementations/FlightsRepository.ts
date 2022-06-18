import { Flight, Prisma } from "@prisma/client"
import { prisma } from "../../../prisma"
import { ICreateFlightDTO } from "../../dtos/ICreateFlightDTO"



interface IFlightsRepository {
  create(data: ICreateFlightDTO): Promise<Flight>
  findByFlightId(flightId: string): Promise<Flight | null>
  findAll(): Promise<Flight[]>

  findByUserId(userId: string): Promise<Flight[]>
}

export class FlightsRepository implements IFlightsRepository {
  async create({ userId, itineraries, price, isPackage }: ICreateFlightDTO): Promise<Flight> {
    const flight = await prisma.flight.create({
      data: {
        userId,
        itineraries: JSON.parse(itineraries) as Prisma.JsonArray,
        price: JSON.parse(price) as Prisma.JsonObject,
        isPackage
      }
    })
    return flight
  }

  async findByFlightId(flightId: string): Promise<Flight | null> {
    const flight = await prisma.flight.findFirst({ where: { id: flightId } })
    return flight
  }

  async findAll(): Promise<Flight[]> {
    const flight = await prisma.flight.findMany()
    return flight
  }

  async findByUserId(userId: string): Promise<Flight[]> {
    const flights = await prisma.flight.findMany({ 
      where: { 
        userId,
        isPackage: false
      } 
    })

    return flights
  }

}