"use server"

import bcrypt from 'bcryptjs'
import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { NewPasswordSchema } from "@/schemas/zodSchema";
import { db } from '@/lib/db';

export const newPasswordAction = async (formValue, token) => {
    if (!token) return { error: "missing token" }

    const validate = NewPasswordSchema.safeParse(formValue);

    if (!validate.success) {
        // console.log(validate.error.flatten().fieldErrors)
        return {
            error: 'Invalid Fields'
        }
    }

    const { password } = validate.data;

    const existingToken = await getPasswordResetTokenByToken(token)

    if (!existingToken) {
        return { error: 'invalid token' }
    }

    const hasExpired = new Date(existingToken.expires) < new Date()
    if (hasExpired) {
        return { error: "Token has expired!" }
    }

    const existingUser = await getUserByEmail(existingToken.email)
    if (!existingUser) {
        return { error: "Email does not exist!" }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
        where: { id: existingUser.id },
        data: {
            password: hashedPassword,
        }
    })

    await db.passwordResetToken.delete({
        where: { id: existingToken.id }
    })

    return { success: 'Password updated!' }

}