import styles from "./button.module.css"

interface props {
    text: string;
    link: string;
    color: boolean;
}

const Button: React.FC<props> = ({text, link, color})=>{
    return (
        <div className={styles.button} color={color?"#FFFFFF":"#000000"}>
            <a href={link}>
                <p>{text}</p>
            </a>
        </div>
    );
}

export default Button;