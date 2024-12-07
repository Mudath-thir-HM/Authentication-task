import * as argon2 from "argon2";
import jwt from "jsonwebtoken";
import { UserRepository } from "../repository/userRepository";
import { User } from "../models/user.models";

const SECRET = process.env.JWT_SECRET as unknown as string;

export const AuthService = {
  async register(user: User): Promise<User | void> {
    const existingUser = await UserRepository.findByEmail(user.email);
    if (existingUser) {
      throw new Error("Email already exists");
    }

    const hashedPassword = await argon2.hash(user.password);
    user.password = hashedPassword;
    return UserRepository.create(user);
  },

  async login(email: string, password: string): Promise<string | void> {
    const user = await UserRepository.findByEmail(email);
    if (!user || !(await argon2.verify(user.password, password))) {
      throw new Error("Invalid email or password");
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, {
      expiresIn: 60 * 60,
    });
    return token;
  },
};
