import CtaImage from "../../../assets/CtaImage.jpg";

export function CtaSection() {
   return (
      <section>
         <div className="background-yellow">
            <h3 className="title three">Conheça a melhor pizza da cidade!</h3>
         </div>
         <div>
            <div>
               <img src={CtaImage} alt="Pizza marguerita" />
            </div>
            <div className="background-red">
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
