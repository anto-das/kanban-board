import bcrypt from "bcryptjs";
import { userInfo } from "./auth.type";
import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";
import { env } from "../../config/env";
const createUser = async (payload: userInfo) => {
  const { name, email, password } = payload;
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }
  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const findUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (findUser) {
    throw new Error("User already exists");
  }
  const result = await prisma.user.create({
    data: {
      ...payload,
      password: hashedPassword,
    },
  });
  return result;
};

const loginUser = async (payload: Omit<userInfo, "name">) => {
  const { email, password } = payload;
  if (!email || !password) {
    throw new Error("All fields are required");
  }
  const findUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!findUser) {
    throw new Error("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, findUser.password);
  if (!isMatch) {
    throw new Error("Invalid email or password");
  }
  const { id, name, email: loginUser, } = findUser;
  const token = jwt.sign({ id, name, loginUser, }, env.JWT_SECRET, {
    expiresIn: "8h",
  });
  return { ...findUser, token };
};

export const authService = {
  createUser,
  loginUser,
};
