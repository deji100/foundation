import Hero from "../../components/hero";
import MainPageNewsSection from "../../components/main-page/main-page-news-section";
import NewsSection from "../../components/news/news-section";
import { newsItems } from "../../components/data";

interface NewsPageProps {
  params: {
    title: string;
  };
}

const News = async ({ params }: NewsPageProps) => {
  const decodedTitle = decodeURIComponent(params.title);
  const news = newsItems.find((item) => item.title === decodedTitle);

  return (
    <>
      <Hero title="News" />
      {news ? <NewsSection news={news} /> : <p className="p-4">News not found.</p>}
      <MainPageNewsSection />
    </>
  );
};

export default News;
