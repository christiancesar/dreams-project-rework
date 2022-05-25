import { User } from ".prisma/client";
import AppError from "../../../common/errors/AppError";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { status } from '@grpc/grpc-js/'
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
  }: Omit<User, "id">): Promise<User> {
    
    //example error
    // throw new AppError({ code: status.INVALID_ARGUMENT, name: 'Create User', message: 'Invalid email address!'});

    const userAlreadyExist = await this.userRepository.findByEmail(email)

    if (userAlreadyExist) {
      return userAlreadyExist
    }

    const user = this.userRepository.create({ 
      firstName, 
      lastName, 
      birthday, 
      age, 
      email 
    })
    return user
  }
}