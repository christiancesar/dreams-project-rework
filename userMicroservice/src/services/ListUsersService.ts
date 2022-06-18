import { UsersRepository } from "../repositories/implementations/UsersRepository";

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

export class ListUsersService {
  private userRepository: UsersRepository;

  constructor() {
    this.userRepository = new UsersRepository()
  }

  async execute(): Promise<UserResponse[]> {
    const users = await this.userRepository.findAll()

    return users

  }
}