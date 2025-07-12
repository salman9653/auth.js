"use server";

import bcrypt from 'bcryptjs'
import { RegisterSchema } from "@/schemas/zodSchema";
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';

export async function registerAction(formValue) {
    const validate = RegisterSchema.safeParse(formValue);

    if (!validate.success) {
        // console.log(validate.error.flatten().fieldErrors)
        return {
            error: 'Invalid Fields'
        }
    }

    const { email, password, name } = validate.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUrser = await getUserByEmail(email);
    if (existingUrser) {
        return {
            error: 'Email already in use!'
        }
    }

    const newUser = await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })

    const verificationToken = await generateVerificationToken(email)

    return {
        success: 'User Created Successfully',
    }
}