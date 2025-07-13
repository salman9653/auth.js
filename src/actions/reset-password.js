"use server"

import { getUserByEmail } from "@/data/user";
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

    const existingUrser = await getUserByEmail(email);
    if (!existingUrser) {
        return {
            error: 'Email not found!'
        }
    }

    // Todo: Generate token and send email  

    return { success: "Password Reset Email Sent!" }

}