import { config } from "dotenv";
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root123",
  database: process.env.DB_DATABASE || "imp",
  port: process.env.DB_PORT || 3306
};

export const port = process.env.PORT || 4000;