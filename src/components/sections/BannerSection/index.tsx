import Banner from "../../../assets/BannerImage.jpg";
import styles from "./style.module.css";

export function BannerSection() {
   return (
      <section className="background-yellow">
         <div className="container">
            <div className={styles.textBox}>
               <h1 className="title one">A melhor pizza da cidade</h1>
            </div>
         </div>

         <div className={styles.imageBox}>
            <img src={Banner} alt="Pizza de lombo." />
         </div>

         <div className="divisor"></div>
      </section>
   );
}
