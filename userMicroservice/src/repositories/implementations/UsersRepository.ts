import { User } from ".prisma/client";
import { prisma } from "../../../prisma";
import { ICreateUser } from "../../dtos/ICreateUserDTO";


export interface IUsersRepository {
  create(data: ICreateUser): Promise<User>
  findByEmail(email: string): Promise<User | null>
  findByUserId(userId: string): Promise<User | null>
  findAll(): Promise<User[]>
  updateUser(user: User): Promise<User>
  deleteUser(userId: string): Promise<User>
}

export class UsersRepository implements IUsersRepository {
  async create(data: ICreateUser): Promise<User> {
    const user = await prisma.user.create({
      data
    })
    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { email } })
    return user
  }

  async findByUserId(userId: string): Promise<User | null> {
    const user = await prisma.user.findFirst({ where: { id: userId } })
    return user
  }

  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany()
    return users
  }

  async updateUser({ age, birthday, email, firstName, id, lastName }: User): Promise<User> {
    const userUpdate = await prisma.user.update({
      where: {
        id: id
      },
      data: { age, birthday, email, firstName, lastName }
    })
    return userUpdate
  }

  async deleteUser(userId: string): Promise<User> {
    const user = await prisma.user.delete({ where: { id: userId } })
    return user
  }
}