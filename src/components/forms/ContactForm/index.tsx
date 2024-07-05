export function ContactForm(){
    return(
        <form>
            <input type="text" name="name" id="name" placeholder="Nome" />
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <button type="submit">Enviar mensagem</button>
        </form>
    )
}