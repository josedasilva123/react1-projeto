import Logo from "../../../assets/PizzaLogo.svg";
import styles from "./style.module.css";

export function Header() {
   return (
      <header className={`background-white ${styles.header}`}>
         <div className="container">
            <div className={styles.box}>
               <img src={Logo} alt="Logo Pizza Planet" />
               <nav>
                  <ul>
                     <li>
                        <a className="menu-item" href="#sabores">
                           Sabores
                        </a>
                     </li>
                     <li>
                        <a className="menu-item" href="#sobre">
                           Sobre
                        </a>
                     </li>
                     <li>
                        <a className="button red" href="#formulario">
                           Reservar agora
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      </header>
   );
}
