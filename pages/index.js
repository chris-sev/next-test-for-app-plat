import { useState } from "react";
import { PrismaClient } from "@prisma/client";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className="app">
      i am the home page
      {/* loop over the posts */}
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

/**
 * A single post
 */
function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);

  async function like(id) {
    const res = await fetch(`/api/posts/${id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    setLikes(data.post.likes);
  }

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <button onClick={() => like(post.id)}>❤️ {likes}</button>
    </div>
  );
}

/**
 * Go get all posts on the server
 */
export async function getStaticProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({});
  return { props: { posts } };
}
