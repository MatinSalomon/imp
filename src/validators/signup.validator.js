import { body } from "express-validator";

export const signupSchema = [
    body("username").isLength({ min: 3 }).withMessage("Fullname must be at least 3 characters long"),
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
]