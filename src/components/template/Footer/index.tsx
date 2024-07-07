import Logo from "../../../assets/PizzaLogo.svg";

export function Footer() {
   return (
      <footer className="background-white">
         <div className="container">
            <img src={Logo} alt="Logo Pizza Planet" />
         </div>
      </footer>
   );
}
