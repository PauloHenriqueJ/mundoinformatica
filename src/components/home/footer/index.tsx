import { HomeProps } from "@/utils/home.type";
import styles from "./styles.module.scss";
import { Mail, Map, Phone, Clock } from "lucide-react";

export function Footer({ object }: HomeProps) {
  return (
    <footer id="contatos" className={styles.footer}>
      <div className={styles.footerGlow}></div>
      <div className={styles.footerGlow}></div>

      <section className={styles.section}>
        <h2 className={styles.title}>Contatos</h2>

        <div className={styles.content}>
          <div className={styles.item}>
            <Mail size={32} />
            <div>
              <strong>Email</strong>
              <p>{object.metadata.contact.email}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Phone size={32} />
            <div>
              <strong>Telefone</strong>
              <p>{object.metadata.contact.phone}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Map size={32} />
            <div>
              <strong>Endereço</strong>
              <p>{object.metadata.contact.address}</p>
            </div>
          </div>

          <div className={styles.item}>
            <Clock size={32} />
            <div>
              <strong>Horário</strong>
              <p>{object.metadata.contact.time}</p>
            </div>
          </div>
        </div>
      </section>

      <a
        href={object.metadata.cta_button.url}
        target="_blank"
        className={styles.link}
        rel="noopener noreferrer"
      >
        <Phone size={24} />
        {object.metadata.cta_button.title}
      </a>

      <p className={styles.copyText}>
        Todos direitos reservados <strong>{object.title}</strong> @
        {`${new Date().getFullYear()}`}
      </p>
    </footer>
  );
}
