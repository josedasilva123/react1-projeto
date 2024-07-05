import { ContactForm } from "../../forms/ContactForm";

export function FormSection() {
   return (
      <section>
         <h2>Formulário de contato</h2>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi diam.
            Aenean nec mauris et ex efficitur interdum.
         </p>
         <ContactForm />
      </section>
   );
}
