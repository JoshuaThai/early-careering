import {Header, Footer} from "../components/main";
import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { LogoutButton } from "./LogoutButton";
import { Hero } from "./components";

export default async function Tracker() {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login");
    }

    const user = session.user;

    return (
        <div>
            <Header />
            <Hero name={user.name} />
            <main>
                <h1>Tracker Page</h1>
                <h2>My Industry: {user.industry}</h2>
                <h3>User ID: {user.id}</h3>
                <LogoutButton />
            </main>
            <Footer />
        </div>
    )
}