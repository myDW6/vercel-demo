export default async function Home() {
  const baseUrl =
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/hello`, {
    cache: 'no-store',
  });

  const data = await res.json();

  return (
    <main style={{ padding: 40, fontFamily: 'Arial, sans-serif' }}>
      <h1>Vercel Demo</h1>

      <p>
        这是一个部署在 Vercel 上的 Next.js 示例。
      </p>

      <section
        style={{
          marginTop: 24,
          padding: 20,
          border: '1px solid #ddd',
          borderRadius: 8,
        }}
      >
        <h2>来自后端 API 的数据</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
    </main>
  );
}