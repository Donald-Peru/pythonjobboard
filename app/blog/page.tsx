async function getPosts() {
  const res = await fetch('http://localhost:1337/api/posts', { cache: 'no-store' });
  const data = await res.json();
  return data.data;
}

export default async function BlogPage() {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return <p style={{ color: "#7a8ab8" }}>No blog posts yet.</p>;
  }

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
      {posts.map((post: any) => (
        <div key={post.id} style={{ background: "#16213e", border: "1.5px solid rgba(75,139,190,0.18)", borderRadius: "12px", padding: "1.5rem" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.25rem", fontWeight: 600, color: "#FFD43B", marginBottom: "0.5rem" }}>
            {post.title}
          </h2>
          <p style={{ fontFamily: "'Source Code Pro', monospace", fontSize: "0.7rem", color: "#4B8BBE", marginBottom: "1rem" }}>
            {new Date(post.publishedAt).toDateString()}
          </p>
          <a href={`/blog/${post.documentId}`} style={{ color: "#4B8BBE", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>
  Read more →
</a>
        </div>
      ))}
    </div>
  );
}