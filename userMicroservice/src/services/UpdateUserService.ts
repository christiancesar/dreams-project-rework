import { User } from ".prisma/client";
import { UsersRepository } from "../repositories/implementations/UsersRepository";

type UserRequest = { 
  id: string,
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

export class UpdateUserService {
  private userRepository: UsersRepository;

  constructor() {
    this.userRepository = new UsersRepository()
  }
  
  async execute({ 
    id,
    firstName, 
    lastName, 
    birthday, 
    age, 
    email 
  }: UserRequest): Promise<UserResponse> 
  {

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