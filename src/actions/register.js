"use server";

import { RegisterSchema } from "@/schemas/zodSchema";

export async function registerAction(formValue) {
    const validate = RegisterSchema.safeParse(formValue);

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