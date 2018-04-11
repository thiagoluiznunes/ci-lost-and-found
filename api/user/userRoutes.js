import express from 'express';
import UserService from './userService';

class UserRoutes {
  constructor() {
    const router = new express.Router();
    const service = new UserService();

    this.initRoutes = (server) => {
      server.use('/', router);

      router.post('/login', service.login);
      router.post('/signup', service.signup);
    };
  }
}

export default UserRoutes;
