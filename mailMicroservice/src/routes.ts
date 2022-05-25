import { Router } from 'express';
import EmailController from './controllers/EmailController';

const routes = Router()

const emailController = new EmailController();

routes.post("/sendmail", emailController.create );

export { routes };
