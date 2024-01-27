import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

export default async function Home() {

  const res = await fetch(`${baseUrl}/api/blogPosts`);
  const posts = await res.json()

  return (
    <main>
      <Hero />
      <Blogs posts={posts} />
      <Cta />
    </main>
  );
}
