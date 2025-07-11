import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas/zodSchema";
import { getUserByEmail } from "@/data/user";
import bcrypt from 'bcryptjs'

const authConfig = {
  providers: [
    Github,
    Google,
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)
        if (validatedFields.success) {
          const { email, password } = validatedFields.data
          const user = await getUserByEmail(email)
          if (!user || !user.password) return null
          const passwordMatch = await bcrypt.compare(password, user.password)
          if (passwordMatch) return user
        }
        return null
      }
    }),
  ],
}
export default authConfig