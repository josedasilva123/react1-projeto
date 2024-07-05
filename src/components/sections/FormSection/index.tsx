import { ContactForm } from "../../forms/ContactForm";

export function FormSection() {
   return (
      <section id="formulario">
         <h2 className="title one center">Formulário de contato</h2>
         <p className="text center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi diam.
            Aenean nec mauris et ex efficitur interdum.
         </p>
         <ContactForm />
      </section>
   );
}
