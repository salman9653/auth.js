"use server";

import { signIn, signOut } from "@/root/auth";

export async function logout() {
    await signOut({ redirectTo: "/login" });
}



