"use server";

import { signIn } from "@/lib/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas/zodSchema";
import { AuthError } from "next-auth";

export async function loginAction(formValue) {
    const validate = LoginSchema.safeParse(formValue);

    if (!validate.success) {
        // console.log(validate.error.flatten().fieldErrors)
        return {
            error: 'Invalid Fields'
        }
    }

    const { email, password } = validate.data;
    try {
        const user = await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        error: 'Invalid Credentials'
                    }
                default:
                    return {
                        error: 'Something went wrong'
                    }
            }
        }
        throw error
    }
}