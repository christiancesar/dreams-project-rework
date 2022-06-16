import { FlightCreate, FlightCreateRequest, FlightResponse } from "dreams-proto-sharing/src/contracts/flight/flight_pb";
import { HotelCreate, HotelCreateRequest, HotelResponse } from "dreams-proto-sharing/src/contracts/hotel/hotel_pb";
import flightClient from "../../providers/FlightService";
import hotelClient from "../../providers/HotelService";
import PackageRepository from "../../repositories/implementations/PackageRepository";

interface ICreateFlightDTO {
  userId: string;
  itineraries: string;
  price: string;
}

interface ICreateHotelDTO {
  userId: string;
  hotel: string;
  offers: string;
}

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
  amount: number;
  off: number;
}

interface IPackageCreateResponseDTO {
  id: string
  hotel: {
    hotel: string;
    offers: string;
  };
  flight: {
    itineraries: string;
    price: string;
  };
  amount: number;
  off: number;
  createdAt: number;
  updatedAt: number;
}

class CreatePackageService {
  private packageRepository: PackageRepository;

  constructor() {
    this.packageRepository = new PackageRepository();
  }

  async execute({ userId, hotel, flight, amount, off }: IPackageCreateRequestDTO): Promise<IPackageCreateResponseDTO> {

    const createFlightServiceRequest = (flight: ICreateFlightDTO) => new Promise<FlightResponse>((resolve, reject) => {
      flightClient.createFlight(
        new FlightCreateRequest().setFlightcreate(
          new FlightCreate()
            .setItineraries(flight.itineraries)
            .setPrice(flight.price)
            .setUserid(userId)
        ),
        (err, flight) => {
          if (err) {
            reject(err)
          }
          resolve(flight)
        }
      );
    });

    const createFlightResponse = await createFlightServiceRequest({
      itineraries: flight.itineraries,
      price: flight.price,
      userId
    });

    const flightResponse = createFlightResponse.getFlight()!.toObject();

    const createHotelServiceRequest = (hotel: ICreateHotelDTO) => new Promise<HotelResponse>((resolve, reject) => {
      hotelClient.createHotel(
        new HotelCreateRequest().setHotelcreate(
          new HotelCreate()
            .setUserid(hotel.userId)
            .setHotel(hotel.hotel)
            .setOffers(hotel.offers)
        ),
        (err, hotel) => {
          if (err) {
            reject(err)
          }
          resolve(hotel)
        }
      );
    });

    const createHotelResponse = await createHotelServiceRequest({
      hotel: hotel.hotel,
      offers: hotel.offers,
      userId
    })

    const hotelResponse = createHotelResponse.getHotel()!.toObject();

    const packageCreated = await this.packageRepository.create({
      userId,
      flightId: flightResponse.id,
      hotelId: hotelResponse.id,
      amount,
      off
    });

    return {
      id: packageCreated.id,
      hotel: {
        hotel: hotelResponse.hotel,
        offers: hotelResponse.offers,
      },
      flight: {
        itineraries: flightResponse.itineraries,
        price: flightResponse.price,
      },
      amount: packageCreated.amount,
      off: packageCreated.off,
      createdAt: Date.parse(packageCreated.createdAt.toDateString()),
      updatedAt: Date.parse(packageCreated.updatedAt.toDateString()),
    }
  }
}

export default CreatePackageService