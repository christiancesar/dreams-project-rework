import { Flight } from "@prisma/client"
import { prisma } from "../../../prisma"
import { ICreateFlightDTO } from "../../dtos/ICreateFlightDTO"



interface IFlightsRepository {
  create(data: ICreateFlightDTO): Promise<Flight>
  findByFlightId(flightId: string): Promise<Flight | null>
  findAll(): Promise<Flight[]>

  findByUserId(userId: string): Promise<Flight[]>
}

export class FlightsRepository implements IFlightsRepository {
  async create(data: ICreateFlightDTO): Promise<Flight> {
    const flight = await prisma.flight.create({ data })
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
    const flights = await prisma.flight.findMany({ where: { userId } })

    return flights
  }

}