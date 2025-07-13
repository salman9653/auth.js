import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email, token) => {
    const confirmLink = `http://localhost:3000/new-verification?token=${token}`

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Confirm your email',
        html: `<p><a href = "${confirmLink}">Click here</a> to confirm your email.</p>`
    })
}


export const sendPasswordResetEmail = async (email, token) => {
    const resetLink = `http://localhost:3000/new-password?token=${token}`

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Reset Password',
        html: `<p><a href = "${resetLink}">Click here </a> to reset your password.</p>`
    })
}