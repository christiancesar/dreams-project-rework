import { status } from "@grpc/grpc-js";
import { inject, injectable } from "tsyringe";
import AppError from "../../../common/errors/AppError";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { User } from "../schemas/User";

type ShowUserParams = {
  userId: string
}


@injectable()
export class ShowUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: UsersRepository
  ) { }

  async execute({ userId }: ShowUserParams): Promise<User> {
    const user = await this.userRepository.findByUserId(userId)
    
    if (!user) {
      throw new AppError({ code: status.NOT_FOUND, name: 'Show User', message: 'Sorry, but user not exist.'});
    }
    
    return user
  }
}