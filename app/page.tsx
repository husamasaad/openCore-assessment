import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";


export default async function Home() {

  const res = await fetch(`${window.location.origin}/api/blogPosts`);
  const posts = await res.json()

  return (
    <main>
      <Hero />
      <Blogs posts={posts} />
      <Cta />
    </main>
  );
}
