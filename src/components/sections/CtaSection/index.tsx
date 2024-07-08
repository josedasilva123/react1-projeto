import CtaImage from "../../../assets/CtaImage.jpg";
import styles from "./style.module.css";

export function CtaSection() {
   return (
      <section>
         <div className={`background-yellow ${styles.headline}`}>
            <h3 className="title three center">Conheça a melhor pizza da cidade!</h3>
         </div>
         <div className={styles.box}>
            <div className={styles.imageBox}>
               <img src={CtaImage} alt="Pizza marguerita" />
            </div>
            <div className={`background-red ${styles.contentBox}`}>
               <h2 className="title one center white">Faça uma reserva</h2>
               <p className="text center white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi
                  diam. Aenean nec mauris et ex efficitur interdum.
               </p>
               <a className="button white" href="">Reservar agora</a>
            </div>
         </div>
      </section>
   );
}
