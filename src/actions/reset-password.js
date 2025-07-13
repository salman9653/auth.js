"use server"

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { ResetSchema } from "@/schemas/zodSchema";

export const resetPasswordAction = async (formValue) => {
    const validate = ResetSchema.safeParse(formValue);

    if (!validate.success) {
        // console.log(validate.error.flatten().fieldErrors)
        return {
            error: 'Invalid Fields'
        }
    }

    const { email } = validate.data;

    const existingUser = await getUserByEmail(email);
    if (!existingUser) {
        return {
            error: 'Email not found!'
        }
    }

    const passwordResetToken = await generatePasswordResetToken(email)
    await sendPasswordResetEmail(passwordResetToken.email, passwordResetToken.token)

    return { success: 'Password reset email sent!' }

}