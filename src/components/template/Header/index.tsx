import Logo from "../../../assets/PizzaLogo.svg";

export function Header(){
    return(
        <header className="background-white">
            <img src={Logo} alt="Logo Pizza Planet" />
            <nav>
                <ul>
                    <li><a className="menu-item" href="#sabores">Sabores</a></li>
                    <li><a className="menu-item" href="#sobre">Sobre</a></li>
                    <li><a className="button red" href="#formulario">Reservar agora</a></li>
                </ul>
            </nav>
        </header>
    )
}