
import { getVerificationTokenByEmail } from "@/data/verificationToken";
import { v4 as uuidv4 } from "uuid";
import { db } from "./db";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";

const EXPIRE_DURATION = (60 * 60) * 1000      // Expire Duration - 1 hour 
// const expireDuration = (15 * 60) * 1000      // Expire Duration - 15 minutes

export const generateVerificationToken = async (email) => {
    const token = uuidv4()
    const expires = new Date(new Date.getTime() + EXPIRE_DURATION)

    const existingToken = await getVerificationTokenByEmail(email)
    if (existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }

    const verificationToken = await db.verificationToken.create({
        data: {
            email, token, expires
        }
    })

    return verificationToken
}

export const generatePasswordResetToken = async (email) => {
    const token = uuidv4()
    const expires = new Date(new Date.getTime() + EXPIRE_DURATION)

    const existingToken = await getPasswordResetTokenByEmail(email)
    if (existingToken) {
        await db.passwordResetToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }
    const passwordResetToken = await db.passwordResetToken.create({
        data: {
            email, token, expires
        }
    })

    return passwordResetToken

}

export const generateTwoFactorToken = async (email) => {
    const token = crypto.randomInt(100_000, 1_000_000).toString()
    const expires = new Date(new Date.getTime() + EXPIRE_DURATION)

    const existingToken = await getTwoFactorTokenByEmail(email)
    if (existingToken) {
        await db.twoFactorToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }
    const twoFactorToken = await db.twoFactorToken.create({
        data: {
            email, token, expires
        }
    })
    return twoFactorToken
}