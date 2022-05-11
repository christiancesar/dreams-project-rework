import { Request, Response } from "express";
import CreateHotelService from "../services/hotels/CreateHotelService";
import ListHotelsService from "../services/hotels/ListHotelsService";
import ShowHotelService from "../services/hotels/ShowHotelService";

export default class HotelController {
  async create(request: Request, response: Response): Promise<Response> {
    const { hotel } = request.body
    const createHotelService = new CreateHotelService();
    const hotelCreated = await createHotelService.execute({ hotel })
    return response.json(hotelCreated)
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { hotelId } = request.params
    const showHotelService = new ShowHotelService();
    const hotels = await showHotelService.execute({ hotelId })
    return response.json(hotels)
  }

  async index(request: Request, response: Response): Promise<Response> {
    const listHotelsService = new ListHotelsService();
    const hotels = await listHotelsService.execute();
    return response.json(hotels)
  }
}