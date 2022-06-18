import { User } from ".prisma/client";
import AppError from "../../../common/errors/AppError";
import { status } from "@grpc/grpc-js";
import { UsersRepository } from "../repositories/implementations/UsersRepository";

type UserRequest = {
  userId: string
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


export class ShowUserService {
  private userRepository: UsersRepository;

  constructor() {
    this.userRepository = new UsersRepository()
  }

  async execute({ userId }: UserRequest): Promise<UserResponse> {
    const user = await this.userRepository.findByUserId(userId)
    
    if (!user) {
      throw new AppError({ code: status.NOT_FOUND, name: 'Show User', message: 'Sorry, but user not exist.'});
    }
    
    return user
  }
}