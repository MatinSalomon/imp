import { config } from "dotenv";
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "root123",
  database: process.env.DATABASE_NAME || "imp",
  port: process.env.DB_PORT || 3306
};

export const port = process.env.PORT || 4000;