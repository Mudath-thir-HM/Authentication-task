import db from "../db";
import { User } from "../models/user.models";

export const UserRepository = {
  async findByEmail(email: string): Promise<User | void> {
    const findUser = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    return findUser.rows[0];
  },

  async create(user: User): Promise<User | void> {
    const registerUser = await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
      [user.username, user.email, user.password]
    );
    return registerUser.rows[0] || null;
  },
};
