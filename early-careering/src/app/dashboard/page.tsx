import {Header, Footer} from "../components/main";
import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import styles from "./dashboard.module.css";
import "./dashboard.css";
import { Hero, TrackerButtons, TableButtons } from "./components";

// This table will house all of the users job applications that he is tracking.
function ApplicationsTable(){

    return(
        <table>
            <thead>
                <tr>
                    <th><input type="checkbox" id="delete-all-apps" name="delete-all-apps" /></th>
                    <th>Job Title</th>
                    <th>Applied Date</th>
                    <th>Notes</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            </tbody>
        </table>
    )
}

function Applications(){
    return(
        <section className={styles.applicationsContainer}>
            <h1 style={{fontSize : "42px"}}>All Job Applications (0)</h1>
            <TableButtons />
            <ApplicationsTable />
        </section>
    )
}

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
                <TrackerButtons />
                <Applications />
                {/* <h1>Tracker Page</h1>
                <h2>My Industry: {user.industry}</h2>
                <h3>User ID: {user.id}</h3> */}
                {/* <LogoutButton /> */}
            </main>
            <Footer />
        </div>
    )
}