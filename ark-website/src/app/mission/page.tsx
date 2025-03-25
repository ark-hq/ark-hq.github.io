import Navbar from "@/ui/navbar"
import styles from "./page.module.css"
import Footer from "@/ui/footer";

export default function Mission () {
    return (
        <body>
            <Navbar/>
            <main className={styles.container}>
                <h1>Our Mission</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </main>
            <footer className={styles.footer}>
                <Footer/>
            </footer>
        </body> 
    );
}