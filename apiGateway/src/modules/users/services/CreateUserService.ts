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
  }: ICreateUser): Promise<IUserDTO[]> {

    let users = [] as IUserDTO[];

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
    }).then((userResponse: UserResponse) => {
      userResponse.getUserList().map((user: User) => {
        users.push({
          id: user.toObject().id,
          firstname: user.toObject().firstname,
          lastname: user.toObject().lastname,
          age: user.toObject().age,
          birthday: user.toObject().birthday,
          email: user.toObject().email,
        })
      })
    })
      .catch((error: ServiceError) => {
        new AppError(error.message)
      })

    return users;
  }
}