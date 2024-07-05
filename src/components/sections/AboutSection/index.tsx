import AboutImage from "../../../assets/AboutImage.jpg";
import Logo from "../../../assets/PizzaLogo.svg";

export function AboutSection() {
   return (
      <section>
         <div>
            <img src={AboutImage} alt="Chefe de cozinha montando 4 pizzas." />
         </div>
         <div>
            <img src={Logo} alt="Logo Pizza Planet" />
            <h2>Sobre nós</h2>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi
               diam. Aenean nec mauris et ex efficitur interdum. Aliquam ut turpis nec
               tellus facilisis egestas vel ut felis. Suspendisse in ex eu purus mollis
               dapibus. Cras in dolor velit. Integer pharetra condimentum tempus. Sed odio
               sem, iaculis at dapibus a, aliquet nec risus. Aenean ullamcorper nibh vitae
               quam eleifend elementum eu ut sem.
            </p>
         </div>
      </section>
   );
}
