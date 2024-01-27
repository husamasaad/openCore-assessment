import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

export default async function Home() {
  try {
    const res = await fetch(`${baseUrl}/api/blogPosts`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const posts = await res.json();

    return (
      <main>
        <Hero />
        <Blogs posts={posts} />
        <Cta />
      </main>
    );
  } catch (error) {
    console.error('Fetch error:', error);
    return (
      <main>
        <p>Error loading blog posts</p>
      </main>
    );
  }
}
