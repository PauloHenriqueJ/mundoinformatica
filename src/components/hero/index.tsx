import { ReactNode } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface HeroProps {
  heading: string;
  buttonUrl: string;
  buttonTitle: string;
  bannerUrl: string;
  icon: ReactNode;
}

export function Hero({
  heading,
  bannerUrl,
  buttonTitle,
  buttonUrl,
  icon,
}: HeroProps) {
  return (
    <main className={styles.main}>
      {/* Efeitos bem sutis */}
      <div className={styles.glowEffect}></div>
      <div className={styles.glowEffect}></div>

      <div className={styles.containerHero}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span>{heading}</span>
          </h1>
          <a
            target="_blank"
            href={buttonUrl}
            className={styles.link}
            rel="noopener noreferrer"
          >
            {icon}
            {buttonTitle}
          </a>
        </div>
      </div>

      <div className={styles.contentBanner}>
        <Image
          className={styles.banner}
          alt={heading}
          src={bannerUrl}
          priority={true}
          quality={90}
          fill={true}
          sizes="100vw"
        />
      </div>
    </main>
  );
}
