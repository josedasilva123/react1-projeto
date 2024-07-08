import styles from "./style.module.css";

export function ContactForm(){
    return(
        <form className={styles.form}>
            <input className="field" type="text" name="name" id="name" placeholder="Nome" />
            <input className="field" type="email" name="email" id="email" placeholder="E-mail" />
            <button className="button red" type="submit">Enviar mensagem</button>
        </form>
    )
}