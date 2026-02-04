"use client";

import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [top, setTop] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);

    // Atualizar seção ativa baseada no scroll
    const sections = ["home", "servicos", "contatos"];
    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header className={`${styles.header} ${!top ? styles.fixed : ""}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLogo}>
            <Link href="/">
              <span>Mundo</span> da Informática
            </Link>
          </div>

          <nav className={styles.nav}>
            <Link href="/" className={pathname === "/" ? styles.active : ""}>
              HOME
            </Link>
            <Link
              href="/#servicos"
              className={activeSection === "servicos" ? styles.active : ""}
            >
              SERVIÇOS
            </Link>
            <Link
              href="/#contatos"
              className={activeSection === "contatos" ? styles.active : ""}
            >
              CONTATOS
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
