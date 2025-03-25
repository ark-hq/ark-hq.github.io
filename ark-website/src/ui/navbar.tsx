import styles from "./navbar.module.css"

const Navbar = ()=>{
    return (
        <div className={styles.navbar} >
            <div>
                <a className={styles.navlogo} href="https://ark.github.io">ARK</a>
            </div> 
            <ul className={styles.navtabs}>
                <li><a className={styles.navcomponent} href="https://ark.github.io/ourstory">Our Story</a></li>
                <li><a className={styles.navcomponent} href="https://ark.github.io/mission">Mission</a></li>
                <li><a className={styles.navcomponent} href="https://ark.github.io/contactus">Contact Us</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
