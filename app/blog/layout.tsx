export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem", minHeight: "50vh" }}>
      {children}
    </main>
  );
}