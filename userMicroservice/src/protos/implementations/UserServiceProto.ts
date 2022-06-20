
import grpc, { sendUnaryData, ServerErrorResponse, ServerUnaryCall } from "@grpc/grpc-js";
import { IUsersServer } from "dreams-proto-sharing/src/contracts/user/user_grpc_pb";
import { UserRequest, UserResponse } from "dreams-proto-sharing/src/contracts/user/user_pb";
import { Empty } from 'google-protobuf/google/protobuf/empty_pb.js';
import { container } from 'tsyringe';
import { usersResponseAdd } from "../../../utils/usersResponseAdd";
import { CreateUserService } from "../../services/CreateUserService";
import { ListUsersService } from "../../services/ListUsersService";
import { ShowUserService } from "../../services/ShowUserService";
import { UpdateUserService } from "../../services/UpdateUserService";

class UsersServer implements IUsersServer {
  async updateUser(call: ServerUnaryCall<UserRequest, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
    try {
      const userRequest = call.request.getUser()!.toObject();

      const updateUserService = container.resolve(UpdateUserService);

      const user = await updateUserService.execute({
        id: userRequest.id,
        age: userRequest.age,
        birthday: userRequest.birthday,
        email: userRequest.email,
        firstName: userRequest.firstname,
        lastName: userRequest.lastname,
      });

      const userResponse = usersResponseAdd([user]);

      callback(null, userResponse);

    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }
  }

  async showUser(call: ServerUnaryCall<UserRequest, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
    try {
      const userId = call.request.getUser()!.getId();

      const showUserService = container.resolve(ShowUserService);

      const user = await showUserService.execute({ userId });

      const userResponse = usersResponseAdd([user]);

      callback(null, userResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }

  }

  async createUser(call: ServerUnaryCall<UserRequest, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
    try {
      const userRequest = call.request.getUser()!.toObject();

      const createUserService = container.resolve(CreateUserService);


      const user = await createUserService.execute({
        firstName: userRequest!.firstname,
        lastName: userRequest!.lastname,
        age: userRequest!.age,
        birthday: userRequest!.birthday,
        email: userRequest!.email
      })

      const userResponse = usersResponseAdd([user]);

      callback(null, userResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }
  }


  async listUsers(_: ServerUnaryCall<Empty, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
    try {
      const listUsersService = container.resolve(ListUsersService);

      const users = await listUsersService.execute()

      const userResponse = usersResponseAdd(users);

      callback(null, userResponse);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }
  }

  [name: string]: grpc.UntypedHandleCall;
}

export default UsersServer;