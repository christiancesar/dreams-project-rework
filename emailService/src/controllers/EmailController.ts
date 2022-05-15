import { Request, Response } from "express";
import SendEmailRegisterService from "../service/SendEmailRegisterService";


const sendEmailRegisterService = new SendEmailRegisterService();

export default class EmailController {

  async create(request: Request, response: Response): Promise<Response> {
    await sendEmailRegisterService.execute()
    return response.status(204).json()
  }

}