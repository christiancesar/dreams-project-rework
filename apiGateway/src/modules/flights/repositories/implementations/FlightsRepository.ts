import { Flight } from "@prisma/client"
import { prisma } from "../../../../../prisma"
import { ICreateFlightDTO } from "../../dtos/ICreateFlightDTO"



interface IFlightsRepository {
  create(data: ICreateFlightDTO): Promise<Flight>
  // findByFlightId(flightId: string): Promise<Flight | null>
  // findAll(): Promise<Flight[]>
  // updateFlight(flight: Flight): Promise<Flight>
  // deleteFlight(flightId: string): Promise<Flight>
}

export class FlightsRepository implements IFlightsRepository {
  async create(data: ICreateFlightDTO): Promise<Flight> {
    const flight = await prisma.flight.create({ data })
    return flight
  }
  // async findByFlightId(FlightId: string): Promise<Flight | null> {
  //   const flight = await prisma.flight.
  //     return
  // }
  // async findAll(): Promise<Flight[]> {
  //   const flight = await prisma.flight.
  //     return
  // }
  // async updateFlight(flight: Flight): Promise<Flight> {
  //   const flight = await prisma.flight.
  //     return
  // }
  // async deleteFlight(flightId: string): Promise<Flight> {
  //   const flight = await prisma.flight.
  //     return
  // }
}