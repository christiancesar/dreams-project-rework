import { Request, Response } from "express";
import { IPackageRequest } from "../DTO/IPackageRequest";
import AssemblingPackageService from "../services/AssemblingPackageService";

const assemblingPackageService = new AssemblingPackageService()

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
      travelClass,
      roomQuantity
    } = request.body as IPackageRequest;

    const packages = await assemblingPackageService.execute({
      adults,
      children,
      departureDate,
      destinationLocationCode,
      infants,
      originLocationCode,
      returnDate,
      travelClass,
      roomQuantity
    })

    return response.json(packages)
  }
}