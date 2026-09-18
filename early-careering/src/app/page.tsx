// "use client";

import styles from "./page.module.css";
import { Header, Footer } from "./components/main";
import {Title, ProductExplanation, Features, CallToAction} from "./homepageComponents";
import { auth } from "@/lib/auth"; 
import { headers } from "next/headers";
import { redirect } from "next/navigation";



export default async function Home() {
  const session = await auth.api.getSession({
      headers: await headers(),
  });

  // Redirect to dashboard page if user is logged in.
  if (session) {
      redirect("/dashboard");
  }

  return (
    <div className={styles.page}>
      <Header />
      <Title title="EarlyCareering" 
      subtitle="Your career starts here! Track your job search progress and achieve your goals." />
      <ProductExplanation />
      <Features />
      <CallToAction />
      <Footer />
    </div>
)};