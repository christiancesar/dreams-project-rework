
import grpc, { sendUnaryData, ServerErrorResponse, ServerUnaryCall } from "@grpc/grpc-js";
import { User } from "@prisma/client";
import { Empty } from 'google-protobuf/google/protobuf/empty_pb.js';
import { IUsersServer } from "dreams-proto-sharing/src/contracts/user/user_grpc_pb";
import { User as UserProto, UserResponse, UserRequest } from "dreams-proto-sharing/src/contracts/user/user_pb";
import { CreateUserService } from "../../services/CreateUserService";
import { ListUsersService } from "../../services/ListUsersService";
import { ShowUserService } from "../../services/ShowUserService";
import { UpdateUserService } from "../../services/UpdateUserService";

class UsersServer implements IUsersServer {
  async updateUser(call: ServerUnaryCall<UserRequest, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
    try {
      const user = call.request.getUser()!.toObject();
      const response = new UserResponse();
      const updateUserService = new UpdateUserService();
      const userUpdate = await updateUserService.execute({
        id: user.id,
        age: user.age,
        birthday: user.birthday,
        email: user.email,
        firstName: user.firstname,
        lastName: user.lastname
      });

      response.addUser(
        (new UserProto).setId(userUpdate.id)
          .setFirstname(userUpdate.firstName)
          .setLastname(userUpdate.lastName)
          .setEmail(userUpdate.email)
          .setAge(userUpdate.age)
          .setBirthday(userUpdate.birthday)
      )
      callback(null, response);

    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }
  }

  async showUser(call: ServerUnaryCall<UserRequest, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
    try {
      const userId = call.request.getUser()!.getId();
      const response = new UserResponse();
      const showUserService = new ShowUserService();
      const user = await showUserService.execute({ userId });

      response.addUser(
        (new UserProto).setId(user.id)
          .setFirstname(user.firstName)
          .setLastname(user.lastName)
          .setEmail(user.email)
          .setAge(user.age)
          .setBirthday(user.birthday)
      )
      callback(null, response);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }

  }

  async createUser(call: ServerUnaryCall<UserRequest, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
    try {
      const user = call.request.getUser()!.toObject();
      const response = new UserResponse();
      const createUserService = new CreateUserService();

      const newUser = await createUserService.execute({
        firstName: user?.firstname,
        lastName: user?.lastname,
        age: user?.age,
        birthday: user?.birthday,
        email: user?.email
      })

      response.addUser(
        (new UserProto).setId(newUser.id)
          .setFirstname(newUser.firstName)
          .setLastname(newUser.lastName)
          .setEmail(newUser.email)
          .setAge(newUser.age)
          .setBirthday(newUser.birthday)
      )

      callback(null, response);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }
  }


  async listUsers(_: ServerUnaryCall<Empty, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
    try {
      const response = new UserResponse();

      const listUsersService = new ListUsersService();

      const users = await listUsersService.execute()

      users.forEach((user: User) => {
        response.addUser(
          (new UserProto).setId(user.id)
            .setFirstname(user.firstName)
            .setLastname(user.lastName)
            .setEmail(user.email)
            .setAge(user.age)
            .setBirthday(user.birthday)
        )
      })

      callback(null, response);
    } catch (error) {
      callback(error as ServerErrorResponse, null);
    }
  }

  [name: string]: grpc.UntypedHandleCall;
}

export default UsersServer;