import CtaImage from "../../../assets/CtaImage.jpg";

export function CtaSection() {
   return (
      <section>
         <div>
            <h3>Conheça a melhor pizza da cidade!</h3>
         </div>
         <div>
            <div>
               <img src={CtaImage} alt="Pizza marguerita" />
            </div>
            <div>
               <h2>Faça uma reserva</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi
                  diam. Aenean nec mauris et ex efficitur interdum.
               </p>
               <a href="">Reservar agora</a>
            </div>
         </div>
      </section>
   );
}
