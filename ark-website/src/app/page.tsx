// import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/ui/button";
import Footer from "../ui/footer"
import Navbar from "@/ui/navbar";

export default function Home() {
  return (
    <div>
      <body className={styles.body}>
        <Navbar/>
        <main className={styles.main}>
          <section className={styles.home}>
            <div className={styles.home_content}>
              {/* <video autoPlay muted loop className={styles.video_bg}>
                <source src="/clouds_vid.mp4"/>
              </video> */}
              <h1>Travel Beyond Limits</h1>
              <h2>All aboard for a journey of a lifetime.</h2><br/>
              <h2>One platform to discover and create endless memories across the globe.</h2>
              <div className={styles.buttons}>
                <Button text="Log in" link="login link" color={true}/>
                <Button text="Sign up" link="sign up link" color={false}/>
              </div>
            </div>
          </section>

          <section className={styles.creator}>
            <div className={styles.creator_content}>
              <h1>Become a Travel Creator - Apply for Beta Access</h1>
              <h2>We&apos;re about to <i>embark</i> on something exciting and we want YOU to be part of it. ARK is launching Beta, and we&apos;re looking for passionate travelers, storytellers, and dreamers who are ready to shape the future of travel.</h2>
              <br/>
              <h2>ARK <i>Travel Creators</i> get exclusice access to share ideas and content during our Beta testing. Get the chance to <i>inspire</i> first.</h2>
              <br/>
              <h2>We can&apos;t wait to see where you&apos;ll take us!</h2>
              
              <Button text="Apply" color={true} link="link to applcation"/>
              
              <h2>Dream With Us</h2>
            </div>
          </section>
        </main>
        <Footer/> 
      </body>   
    </div>
  );
}
