import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { User } from "../schemas/User";

type UpdateUserParams = {
  id: string,
  firstName: string,
  lastName: string,
  birthday: string,
  age: number,
  email: string
}


@injectable()
export class UpdateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: UsersRepository
  ) { }


  async execute({
    id,
    firstName,
    lastName,
    birthday,
    age,
    email
  }: UpdateUserParams): Promise<User> {

    const userAlreadyExist = await this.userRepository.findByUserId(id)

    if (!userAlreadyExist) {
      throw new Error("Sorry, but user not exist.");
    }

    const user = this.userRepository.updateUser({
      id,
      firstName,
      lastName,
      birthday,
      age,
      email
    })

    return user
  }
}