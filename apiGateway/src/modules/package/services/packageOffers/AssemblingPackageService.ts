import Package from "../../dtos/IPackage";
import { IPackageRequest } from "../../dtos/IPackageRequest";
import { PackageSearch, PackageSearchRequest, PackageSearchResponse } from "../../protos/contracts/package_pb";
import packageClient from "../../providers/PackageService";


export default class AssemblingPackageService {
  async execute({
    adults,
    children,
    departureDate,
    destinationLocationCode,
    infants,
    originLocationCode,
    returnDate,
    travelClass,
    roomQuantity
  }: IPackageRequest): Promise<Package[]> {
    
    const packageServiceRequest = (search: IPackageRequest) => new Promise<PackageSearchResponse>((resolve, reject) => {
      packageClient.searchPackage(
        new PackageSearchRequest().setPackagesearch(
          new PackageSearch()
          .setAdults(search.adults)
          .setChildren(search.children)
          .setDeparturedate(search.departureDate)
          .setDestinationlocationcode(search.destinationLocationCode)
          .setInfants(search.infants)
          .setOriginlocationcode(search.originLocationCode)
          .setReturndate(search.returnDate)
          .setTravelclass(search.travelClass)
          .setRoomquantity(search.roomQuantity)
        ), (err, packages) => {
          if (err) {
            reject(err)
          }
          resolve(packages)
        }
      );
    });

    const packagesResponse = await packageServiceRequest({
      adults,
      children,
      departureDate,
      destinationLocationCode,
      infants,
      originLocationCode,
      returnDate,
      travelClass,
      roomQuantity
    });

    const packages = JSON.parse(packagesResponse.getPackage()) as Package[];

    return packages 
  }
}