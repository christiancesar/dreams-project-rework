import { Flight, Hotel, PackageCreate, PackageCreatedResponse, PackageCreateRequest } from "../../protos/contracts/package_pb";
import packageClient from "../../providers/PackageService";

interface IPackageCreateRequestDTO {
  userId: string;
  hotel: {
    hotel: string;
    offers: string;
  };
  flight: {
    itineraries: string;
    price: string;
  };
}

interface IPackageRequest {
  userId: string;
  hotel: {
    hotel: any;
    offers: any;
  };
  flight: {
    itineraries: any;
    price: any;
  };
}

interface IPackageResponse {
  id: string;
  hotel: {
    hotel: any;
    offers: any;
  };
  flight: {
    itineraries: any;
    price: any;
  };
  createdAt: Date;
  updatedAt: Date;
}

class CreatePackageService {
  async execute({ userId, flight, hotel }: IPackageRequest): Promise<IPackageResponse> {


    const packageCreateRequest = (packageCreate: IPackageCreateRequestDTO) => new Promise<PackageCreatedResponse>((resolve, reject) => {
      packageClient.createPackage(
        new PackageCreateRequest().setPackagecreate(
          new PackageCreate()
            .setUserid(packageCreate.userId)
            .setFlight(
              new Flight()
                .setIntinerantes(packageCreate.flight.itineraries)
                .setPrice(packageCreate.flight.itineraries)
            )
            .setHotel(
              new Hotel()
                .setHotel(packageCreate.hotel.hotel)
                .setOffers(packageCreate.hotel.offers)
            )
        ), (err, packages) => {
          if (err) {
            reject(err);
          }
          resolve(packages);
        }
      )
    });

    const packageCreatedResponse = await packageCreateRequest({
      userId,
      flight: {
        itineraries: JSON.stringify(flight.itineraries),
        price: JSON.stringify(flight.price)
      },
      hotel: { 
        hotel: JSON.stringify(hotel.hotel),
        offers: JSON.stringify(hotel.offers)
      }
    })

    const packageResponse = packageCreatedResponse.getPackageresponse()!.toObject();

    return { 
      id: packageResponse.id,
      flight: {
        itineraries: JSON.parse(packageResponse.flight!.intinerantes),
        price: JSON.parse(packageResponse.flight!.price)
      },
      hotel: {
        hotel: JSON.parse(packageResponse.hotel!.hotel),
        offers: JSON.parse(packageResponse.hotel!.offers)
      },
      createdAt: new Date(packageResponse.createdat),
      updatedAt: new Date(packageResponse.updatedat),
    }
  }
}

export default CreatePackageService;