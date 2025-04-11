'use client';

import { useParams } from 'next/navigation';
import Hero from '../../components/hero';
import MainPageNewsSection from '../../components/main-page/main-page-news-section';
import NewsSection from '../../components/news/news-section';
import { newsItems } from '../../components/data';

const News = () => {
  const params = useParams();
  const title = params?.title;
  const decodedTitle = decodeURIComponent(Array.isArray(title) ? title[0] : title);
  const news = newsItems.find((item) => item.title === decodedTitle);

  return (
    <>
      <Hero title="News" />
      {news ? (
        <NewsSection news={news} />
      ) : (
        <p className="p-4">News not found.</p>
      )}
      <MainPageNewsSection />
    </>
  );
};

export default News;
