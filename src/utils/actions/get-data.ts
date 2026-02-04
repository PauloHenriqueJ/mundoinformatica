export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/6981f83fc0bea08f7ec9493e?pretty=true&read_key=${process.env.READ_KEY}&props=slug,title,metadata,type`,
      { next: { revalidate: 120 } },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export async function getSubMenu() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/69833b36c0bea08f7ec9e891?pretty=true&read_key=${process.env.READ_KEY}&props=slug,title,metadata,type,`,
      { next: { revalidate: 120 } },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch menu data");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch menu data");
  }
}

export async function getItemBySlug(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`;

  // Definindo o objeto de consulta pelo slug
  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: "slug,title,content,metadata ,type",
    read_key: process.env.READ_KEY as string,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;

  try {
    const res = await fetch(url, { next: { revalidate: 120 } });

    if (!res.ok) {
      throw new Error("Failed get item by slug");
    }

    return res.json();
  } catch (err) {
    throw new Error("Failed get item by slug");
  }
}
