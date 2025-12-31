import React, { useState, useEffect } from "react";

export default function NewsWidget() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_NEWSAPI_KEY;

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&apiKey=${apiKey}`
        );
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error(err);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    }
    if (apiKey) fetchNews();
  }, [apiKey]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2 text-gray-800">News</h2>
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : articles.length ? (
        <ul className="space-y-2 text-sm">
          {articles.map((article, i) => (
            <li key={i}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No news available.</p>
      )}
    </div>
  );
}
