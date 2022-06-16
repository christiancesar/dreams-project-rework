import { Request, Response } from "express"
import CreatePackageService from "../services/packages/CreatePackageService"

class PackageControllers {

  async create(request: Request, response: Response): Promise<Response> {
    const { userId, flight, hotel } = request.body;

    const createPackageService = new CreatePackageService();

    const packageCreated = await createPackageService.execute({ userId, flight, hotel })

    return response.json(packageCreated)
  }

}

export default PackageControllers