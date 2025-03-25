import Navbar from "@/ui/navbar"
import styles from "./page.module.css"
import Footer from "@/ui/footer";

export default function OurStory () {
    return (
        <div className={styles.otherpages}>
            <body>
                <Navbar></Navbar>
                <main>
                    <h1>Our Story</h1>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </body>
        </div>
    );
}