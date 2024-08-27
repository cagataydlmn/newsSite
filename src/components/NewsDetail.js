import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNews } from "../firebase";
import Nav from "./Nav";

export default function NewsDetail() {
  const [newsGet, setNewsGet] = useState([]);
  const{newsTitle}=useParams()
  const decodedNewsTitle = decodeURIComponent(newsTitle);

  useEffect(() => {
    getNews(setNewsGet);
  }, []);
  const filteredNews = newsGet.filter((item) => item.newsTitle === decodedNewsTitle);

  return (
    <div>
        <Nav/>
      {filteredNews.map((item) => (
        <div>
          <img src={item.newsImage} alt={item.newsImage} />
          <div className="home__top__box__title">{item.newsTitle}</div>
          <div>{item.newsContent}</div>
        </div>
      ))}
    </div>
  );
}
