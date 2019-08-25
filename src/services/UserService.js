import db from '../database/models';

class UserService {
  static async addUser(newUser) {
    try {
      return await db.User.create(newUser);
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
