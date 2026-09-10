import {Header, Footer} from "../components/main";
import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LogoutButton } from "./LogoutButton";

export default async function Tracker() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }

    return (
        <div>
            <Header />
            <main>
                <h1>Tracker Page</h1>
                <LogoutButton />
            </main>
            <Footer />
        </div>
    )
}