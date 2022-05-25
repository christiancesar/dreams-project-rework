import { User } from ".prisma/client";
import { UsersRepository } from "../repositories/implementations/UsersRepository";

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
  }: User): Promise<User> 
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