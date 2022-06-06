
import grpc, { ServerErrorResponse } from "@grpc/grpc-js";
import AssemblingPackageService from "../../services/packageOffers/AssemblingPackageService";
import { IPackagesServer } from "../contracts/package_grpc_pb";
import { PackageSearchRequest, PackageSearchResponse } from "../contracts/package_pb";


class PackagesServer implements IPackagesServer {
  [name: string]: grpc.UntypedHandleCall;

  searchPackage: grpc.handleUnaryCall<PackageSearchRequest, PackageSearchResponse> = async (call, callback): Promise<void> => {
    try {
      const packageSearchRequest = call.request.getPackagesearch()!.toObject();
      const packageSearchResponse = new PackageSearchResponse();
      const assemblingPackageService = new AssemblingPackageService();

      const packages = await assemblingPackageService.execute({
        adults: packageSearchRequest.adults,
        children: packageSearchRequest.children,
        departureDate: packageSearchRequest.departuredate,
        destinationLocationCode: packageSearchRequest.destinationlocationcode,
        infants: packageSearchRequest.infants,
        originLocationCode: packageSearchRequest.originlocationcode,
        returnDate: packageSearchRequest.returndate,
        travelClass: packageSearchRequest.travelclass,
        roomQuantity: packageSearchRequest.roomquantity
      })

      packageSearchResponse.setPackage(JSON.stringify(packages));

      callback(null, packageSearchResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);


    }
  }
}

export default PackagesServer;