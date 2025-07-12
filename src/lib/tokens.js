import { getVerificationTokenByEmail } from "@/data/verificationToken";
import { v4 as uuidv4 } from "uuid";
export const generateVerificationToken = async () => {
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 3600 * 1000)            // 1 Hour form now

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