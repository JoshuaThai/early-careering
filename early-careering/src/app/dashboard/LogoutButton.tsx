"use client";
import { authClient } from "@/lib/auth-client";
import {useRouter} from "next/navigation";

export function LogoutButton() {
    const router = useRouter();

        async function handleLogout() {
            await authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.push("/login");
                },
              },
            });
        }

    return (
        <button onClick={handleLogout}>Log Out</button>
    )

}