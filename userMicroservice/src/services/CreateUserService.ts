import { status } from '@grpc/grpc-js/';
import AppError from "../../../common/errors/AppError";
import { UsersRepository } from "../repositories/implementations/UsersRepository";

type UserRequest = {
  firstName: string,
  lastName: string,
  birthday: string,
  age: number,
  email: string
}

type UserResponse = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  birthday: string;
  createdAt: Date;
  updatedAt: Date;
}

export class CreateUserService {
  private userRepository: UsersRepository;

  constructor() {
    this.userRepository = new UsersRepository()
  }

  async execute({
    firstName,
    lastName,
    birthday,
    age,
    email
  }: UserRequest): Promise<UserResponse> {

    //example error
    // throw new AppError({ code: status.INVALID_ARGUMENT, name: 'Create User', message: 'Invalid email address!'});
    if (age <= 17) throw new AppError({ code: status.INVALID_ARGUMENT, name: 'Create User', message: 'You must be over 18 years old.' });

    if ((lastName === '') || (firstName === '')) throw new AppError({ code: status.INVALID_ARGUMENT, name: 'Create User', message: 'First and Last not is empty' });

    const userAlreadyExist = await this.userRepository.findByEmail(email)

    if (userAlreadyExist) {
      return userAlreadyExist
    }

    const user = await this.userRepository.create({
      firstName,
      lastName,
      birthday,
      age,
      email
    })
    return user
  }
}