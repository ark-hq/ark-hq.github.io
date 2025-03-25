import Navbar from "@/ui/navbar"
import styles from "./page.module.css"
import Footer from "@/ui/footer";
import Form from "@/ui/form";

export default function ContactUs () {
    return (
            <body>
                <Navbar/>
                <main className={styles.container}>
                    <h1 className={styles.title}>Contact Us</h1>
                    <Form/>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </body>
    );
}