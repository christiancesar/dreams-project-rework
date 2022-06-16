import { Package } from "@prisma/client";
import { prisma } from "../../../prisma";
import { ICreatePackageDTO } from "../../dtos/ICreatePackageDTO";

interface IPackageRepository {
  create(data: ICreatePackageDTO): Promise<Package>
}

class PackageRepository implements IPackageRepository {
  async create(data: ICreatePackageDTO): Promise<Package> {
    const packageCreated = await prisma.package.create({data});
    return packageCreated;
  }

}

export default PackageRepository;