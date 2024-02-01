import { getCollection } from "astro:content";

export async function getCategories() {
  const posts = await getCollection("blog");

  // Extract all categories from posts and flatten the array
  const allCategories = posts.flatMap((post) => post.data.category);

  // Remove duplicates using Set and convert back to an array
  const categories = [...new Set(allCategories)];

  return categories;
}


export async function getPosts() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getPostsByCategory(category: string) {
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.category.includes(category))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}
