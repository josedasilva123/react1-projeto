import Logo from "../../../assets/PizzaLogo.svg";
import styles from "./style.module.css";

export function Footer() {
   return (
      <footer className="background-white">
         <div className="container">
            <div className={styles.box}>
               <img src={Logo} alt="Logo Pizza Planet" />
            </div>
         </div>
      </footer>
   );
}
