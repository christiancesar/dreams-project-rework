import { ChannelCredentials } from '@grpc/grpc-js';
import { HotelsClient } from '../protos/hotel/hotel_grpc_pb';

const hotelClient = new HotelsClient('0.0.0.0:50054', ChannelCredentials.createInsecure()) 

export default hotelClient;