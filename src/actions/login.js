"use server";

import { LoginSchema } from "@/schemas/zodSchema";

export async function loginAction(formValue) {
    const validate = LoginSchema.safeParse(formValue);

    if (!validate.success) {
        // console.log(validate.error.flatten().fieldErrors)
        return {
            error: 'Invalid Fields'
        }
    }

    return {
        success: 'Validation Successful',
    }
}