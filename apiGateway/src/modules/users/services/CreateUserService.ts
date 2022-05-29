import { ServiceError } from '@grpc/grpc-js';
import AppError from '../../../errors/AppError';
import { User, UserRequest, UserResponse } from '../../../protos/users/user_pb';
import userClient from '../../../services/UserService';
import { ICreateUser } from '../dtos/ICreateUserDTO';
import { IUserDTO } from '../dtos/IUserDTO';

export class CreateUserService {

  async execute({
    firstName,
    lastName,
    birthday,
    age,
    email
  }: ICreateUser): Promise<IUserDTO> {

    let userResponse = {} as IUserDTO;

    const userServiceRequest = (userRequest: ICreateUser) => new Promise<UserResponse>((resolve, reject) => {
      userClient.createUser(
        new UserRequest().setUser(
          new User()
            .setFirstname(userRequest.firstName)
            .setLastname(userRequest.lastName)
            .setAge(userRequest.age)
            .setEmail(userRequest.email)
            .setBirthday(userRequest.birthday)
        ), (err, users) => {
          if (err) {
            reject(err)
          }
          resolve(users)
        }
      )
    })

    await userServiceRequest({
      firstName,
      lastName,
      birthday,
      age,
      email
    })
      .then((users: UserResponse) => {
        userResponse = {
          id: users.toObject().userList[0].id,
          firstName: users.toObject().userList[0].firstname,
          lastName: users.toObject().userList[0].lastname,
          age: users.toObject().userList[0].age,
          birthday: users.toObject().userList[0].birthday,
          email: users.toObject().userList[0].email,
        };
      })
      .catch((error: ServiceError) => {
        new AppError(error.message)
      })

    return userResponse;
  }
}