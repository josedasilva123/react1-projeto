import Banner from "../../../assets/BannerImage.jpg";

export function BannerSection() {
   return (
      <section className="background-yellow">
         <div className="container">
            <h1 className="title one">A melhor pizza da cidade</h1>
         </div>

         <img src={Banner} alt="Pizza de lombo." />
         <div className="divisor"></div>
      </section>
   );
}
