import { Hotel } from "@prisma/client"
import { prisma } from "../../../../../prisma"
import ICreateHotelDTO from "../../dtos/ICreateHotelDTO"

interface IHotelsRepository {
  create(data: ICreateHotelDTO): Promise<Hotel>
  findByHotelId(hotelId: string): Promise<Hotel | null>
  findAllHotels(): Promise<Hotel[]>


}
export default class HotelsRepository implements IHotelsRepository {
  async create(data: ICreateHotelDTO): Promise<Hotel> {
    const hotel = await prisma.hotel.create({ data })

    return hotel
  }

  async findByHotelId(hotelId: string): Promise<Hotel | null> {
    const hotel = await prisma.hotel.findFirst({ where: { id: hotelId } });
    return hotel;
  }

  async findAllHotels(): Promise<Hotel[]> {
    const hotels = await prisma.hotel.findMany();

    return hotels;
  }

}