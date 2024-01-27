import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import { promises as fs } from 'fs';


export default async function Home() {

  const file = await fs.readFile(process.cwd() + '/json/blogs.json', 'utf8');

  const posts = await JSON.parse(file)

  return (
    <main>
      <Hero />
      <Blogs posts={posts} />
      <Cta />
    </main>
  );
}
