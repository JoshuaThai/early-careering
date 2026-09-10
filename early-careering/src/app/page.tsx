// "use client";

import styles from "./page.module.css";
import { Header, Footer } from "./components/main";
import {Title, ProductExplanation, Features, CallToAction} from "./homepageComponents";



export default function Home() {
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