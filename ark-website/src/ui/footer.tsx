import styles from "./footer.module.css"
import Button from "./button";
import Image from "next/image";

const Footer: React.FC = ()=>{
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.subscribeContainer}>
            <div className={styles.subscribeSection}>
              <h1>Get Connected</h1>
              <p>Recieve updates directly to your inbox.</p>
              <input type="email" placeholder="Your email" />
            </div>
            
            <Button text="Subscribe" link="subscribe" color={true}/>
          </div>
          
          <div className={styles.socialMediaLinks}>
            <a href="https://linkedin.com">
              <Image width={50} height={50} src="/socials/icons8-linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://twitter.com">
              <Image  width={50} height={50} src="/socials/icons8-twitter.svg" alt="Twitter" />
            </a>
            <a href="https://instagram.com">
              <Image  width={50} height={50} src="/socials/icons8-linkedin.svg" alt="Instagram" />
            </a>
            <a href="https://tiktok.com">
              <Image width={50} height={50} src="/socials/icons8-tiktok.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;