import styles from "./styles.module.scss";
import { Hero } from "@/components/hero";
import { getItemBySlug } from "@/utils/actions/get-data";
import { PostProps } from "@/utils/post.type";
import { Phone } from "lucide-react";
import { Container } from "@/components/container";
import Image from "next/image";

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await getItemBySlug(slug);
  console.log(JSON.stringify(data, null, 2));

  return <></>;
}
