import z from "zod";

// schema for user password reset form  validations
export const ResetSchema = z.object({
    email: z.string().email(),
});

// schema for user login validations
export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password is required"),
});

// schema for user register validations
export const RegisterSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});
