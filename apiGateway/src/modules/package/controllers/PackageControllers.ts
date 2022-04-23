import { Request, Response } from "express";
import { IPackageRequest } from "../DTO/IPackageRequest";
import CreatePackageService from "../service/CreatePackageService";

const createPackageService = new CreatePackageService()

export default class PackageControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const {
      adults,
      children,
      departureDate,
      destinationLocationCode,
      infants,
      originLocationCode,
      returnDate,
      travelClass
    } = request.body as IPackageRequest;

    const packages = await createPackageService.execute({
      adults,
      children,
      departureDate,
      destinationLocationCode,
      infants,
      originLocationCode,
      returnDate,
      travelClass
    })

    return response.json(packages)
  }
}