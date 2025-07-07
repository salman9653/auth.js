"use server";

import { signIn, signOut } from "@/root/auth";
import { userLoginSchema, userRegisterSchema } from "@/schemas/zodSchema";
import { ZodError } from "zod"; // Import ZodError

export async function logout() {
    await signOut({ redirectTo: "/login" });
}

export async function credentialLogin(prevState, formData) {
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        userLoginSchema.parse({ email, password });
        console.log("Validation successful!");
        // If validation passes, proceed with sign-in   
        // await signIn("credentials", { email, password, redirectTo: "/" });
    } catch (error) {
        if (error instanceof ZodError) {
            const fieldErrors = {};
            error.errors.forEach((err) => {
                if (err.path.length > 0) {
                    fieldErrors[err.path[0]] = err.message;
                }
            });
            // throw new Error(JSON.stringify(fieldErrors));
            return {
                message: "validation failed",
                errors: fieldErrors
            }
        } else {
            // Handle other types of errors (e.g., authentication errors)
            console.error("An unexpected error occurred:", error);
            return {
                message: 'An unexpected error occurred.', errors: {
                    other: 'An unexpected error occurred.',
                }
            };
        }
    }
}

export async function credentialRegister(prevState, formData) {
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        userRegisterSchema.parse({ name, email, password });
        console.log("Validation successful!");
        // If validation passes, proceed with sign-up   
        // await signUp("credentials", { name, email, password, redirectTo: "/" });
    } catch (error) {
        if (error instanceof ZodError) {
            const fieldErrors = {};
            error.errors.forEach((err) => {
                if (err.path.length > 0) {
                    fieldErrors[err.path[0]] = err.message;
                }
            });
            return {
                message: "validation failed",
                errors: fieldErrors
            }
        } else {
            // Handle other types of errors (e.g., authentication errors)
            console.error("An unexpected error occurred:", error);
            return {
                message: 'An unexpected error occurred.', errors: {
                    other: 'An unexpected error occurred.',
                }
            };
        }
    }
}
