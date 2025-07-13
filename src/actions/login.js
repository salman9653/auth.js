"use server";

import { getUserByEmail } from "@/data/user";
import { signIn } from "@/lib/auth";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
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

    const existingUser = await getUserByEmail(email)
    if (!existingUser || !existingUser.email || !existingUser.password) {
        return {
            error: 'Email does not exist'
        }
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email)

        await sendVerificationEmail(verificationToken.email, verificationToken.token)
        return { success: 'Confirmation email sent again' }
    }

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