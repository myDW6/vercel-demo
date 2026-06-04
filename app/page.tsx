'use client';

import { useEffect, useState } from 'react';

type HelloData = {
  message: string;
  time: string;
  env: string;
};

export default function Home() {
  const [data, setData] = useState<HelloData | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`API 请求失败：${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <main style={{ padding: 40, fontFamily: 'Arial, sans-serif' }}>
      <h1>Vercel Demo</h1>

      <p>这是一个部署在 Vercel 上的 Next.js 示例。</p>

      <section
        style={{
          marginTop: 24,
          padding: 20,
          border: '1px solid #ddd',
          borderRadius: 8,
        }}
      >
        <h2>来自后端 API 的数据</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!data && !error && <p>加载中...</p>}

        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </section>
    </main>
  );
}