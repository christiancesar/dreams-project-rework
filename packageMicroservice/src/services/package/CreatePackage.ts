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

interface IPackageRequestDTO {
  userId: string;
  hotel: ICreateHotelDTO;
  flight: ICreateFlightDTO;
}

interface IPackageResponseDTO {
  id: string
  hotel: {
    hotel: string;
    offers: string;
  };
  flight: {
    itineraries: string;
    price: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

class CreatePackage {
  private packageRepository: PackageRepository;
  
  constructor(){
    this.packageRepository = new PackageRepository();
  }

  async execute({ userId, hotel, flight }: IPackageRequestDTO): Promise<IPackageResponseDTO> {

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

    const flightResponse = await createFlightServiceRequest({
      itineraries: flight.itineraries,
      price: flight.price,
      userId: flight.userId
    }
    )
    
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

    const hotelResponse = await createHotelServiceRequest({ 
      hotel: hotel.hotel, 
      offers: hotel.offers, 
      userId 
    })

    const packageCreated = await this.packageRepository.create({
      userId,
      flightId: flightResponse.getFlight()!.getId(),
      hotelId: hotelResponse.getHotel()!.getId()
      
    });

    return {
      id : packageCreated.id,
      hotel : {
        hotel: hotelResponse.getHotel()!.getHotel(),
        offers: hotelResponse.getHotel()!.getOffers(),
      },
      flight : { 
        itineraries:  flightResponse.getFlight()!.getItineraries(),
        price: flightResponse.getFlight()!.getPrice()
      },
      createdAt : packageCreated.createdAt,
      updatedAt : packageCreated.updatedAt,
    } as IPackageResponseDTO;
  }
}

export default CreatePackage