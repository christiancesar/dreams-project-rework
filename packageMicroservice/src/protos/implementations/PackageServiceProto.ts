
import grpc, { ServerErrorResponse } from "@grpc/grpc-js";
import CreatePackageService from "../../services/package/CreatePackageService";
import AssemblingPackageService from "../../services/packageOffers/AssemblingPackageService";
import { IPackagesServer } from "../contracts/package_grpc_pb";
import {
  Flight,
  Hotel,
  PackageCreated,
  PackageCreatedResponse,
  PackageCreateRequest,
  PackageSearchRequest,
  PackageSearchResponse
} from "../contracts/package_pb";


class PackagesServer implements IPackagesServer {
  createPackage: grpc.handleUnaryCall<PackageCreateRequest, PackageCreatedResponse> = async (call, callback): Promise<void> => {
    try {
      const packageRequest = call.request.getPackagecreate()!.toObject();
      const packageResponse = new PackageCreatedResponse();
      const createPackageService = new CreatePackageService();

      const packageCreated = await createPackageService.execute({
        userId: packageRequest.userid,
        flight: {
          itineraries: packageRequest.flight!.intinerantes,
          price: packageRequest.flight!.price
        },
        hotel: {
          hotel: packageRequest.hotel!.hotel,
          offers: packageRequest.hotel!.offers
        }
      });

      packageResponse.setPackageresponse(
        new PackageCreated()
          .setId(packageCreated.id)
          .setFlight(
            new Flight()
              .setIntinerantes(packageCreated.flight.itineraries)
              .setPrice(packageCreated.flight.price)
          )
          .setHotel(
            new Hotel()
              .setHotel(packageCreated.hotel.hotel)
              .setOffers(packageCreated.hotel.offers)
          )
          .setUpdatedat(packageCreated.updatedAt)
          .setCreatedat(packageCreated.createdAt)
      );

      callback(null, packageResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }
  }

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

  [name: string]: grpc.UntypedHandleCall;
}

export default PackagesServer;