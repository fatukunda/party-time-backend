import UserService from '../services/UserService';
import Util from '../utils/utils';

const util = new Util();

class UserController {
  static async addUser(req, res) {
    if (!req.body.username || !req.body.email || !req.body.password) {
      util.setError(400, 'Fields username, email, and password are required');
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await UserService.addUser(newUser);
      util.setSuccess(201, 'User created', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default UserController;
