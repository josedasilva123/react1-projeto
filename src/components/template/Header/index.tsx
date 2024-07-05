import Logo from "../../../assets/PizzaLogo.svg";

export function Header(){
    return(
        <header>
            <img src={Logo} alt="Logo Pizza Planet" />
            <nav>
                <ul>
                    <li><a href="#sabores">Sabores</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a className="button red" href="#formulario">Reservar agora</a></li>
                </ul>
            </nav>
        </header>
    )
}