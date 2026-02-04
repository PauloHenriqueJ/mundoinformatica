import { Submenu } from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/home.type";
import { MenuProps } from "@/utils/menu";
import { Hero } from "@/components/hero";
import { Phone } from "lucide-react";
import { Services } from "@/components/home/services";
import { Container } from "@/components/container";
import { Footer } from "@/components/home/footer";

export default async function Home() {
  const objet: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();

  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu} />}
      <Hero
        heading={objet.object.metadata.heading}
        buttonTitle={objet.object.metadata.cta_button.title}
        buttonUrl={objet.object.metadata.cta_button.url}
        bannerUrl={objet.object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />
      <Container>
        <Services object={objet.object} />
        <Footer object={objet.object} />
      </Container>
    </main>
  );
}
