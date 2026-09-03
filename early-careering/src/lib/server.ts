"use server";

import { auth } from "./auth"; // path to your Better Auth server instance


export async function signIn(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const response = await auth.api.signInEmail({
        body: {
            email,
            password
        },
        asResponse: true // returns a response object instead of data
    });
}