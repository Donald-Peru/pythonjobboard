import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export const dynamic = 'force-dynamic';

async function getPost(documentId: string) {
  const res = await fetch(`http://localhost:1337/api/posts?filters[documentId][$eq]=${documentId}`, {
    cache: 'no-store'
  });
  const data = await res.json();
  return data.data?.[0] || null;
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>{post.title}</h1>
	  <style>{`
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: #FFFFFF;
  }
`}</style>
      <div>
        <BlocksRenderer content={post.content} />
      </div>
    </div>
  );
}