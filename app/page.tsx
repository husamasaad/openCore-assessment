import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import Image from "next/image";


export default async function Home() {

  const res = await fetch('http://localhost:3000/api/blogPosts')
  const posts = await res.json()

  return (
    <main>
      <Hero />
      <Blogs posts={posts} />
      <Cta />
    </main>
  );
}
