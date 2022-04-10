import { Request, Response, Router } from 'express';
import SendEmailRegisterService from './service/SendEmailRegisterService'

const router = Router()

router.post("/sendMail", async (request: Request, response: Response) => {
  await SendEmailRegisterService.execute()
} );

export { router };
