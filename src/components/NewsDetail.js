import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNews } from "../firebase";
import Nav from "./Nav";

export default function NewsDetail() {
  const [newsGet, setNewsGet] = useState([]);
  const { newsTitle } = useParams();
  const decodedNewsTitle = decodeURIComponent(newsTitle).toLowerCase();

  useEffect(() => {
    getNews((data) => {
      setNewsGet(data);
    });
  }, []);
  const normalizeTitle = (title) => {
    return title
      .toLowerCase()
      .replace(/[\u0300-\u036f]/g, "")
      .normalize("NFD")
      .replace(/[^a-z0-9\s]/g, "")
      .trim();
  };

  const filteredNews = newsGet.filter(
    (item) =>
      normalizeTitle(item.newsTitle) === normalizeTitle(decodedNewsTitle)
  );

  return (
    <div className="newsDetail">
      <Nav />
      {filteredNews.length > 0 ? (
        filteredNews.map((item) => (
          <div className="newsDetail__general" key={item.id}>
            <div>{item.newsCategory}</div>
            <h1>{item.newsTitle}</h1>
            <div>{item.newsSubtitle}</div>
            <img src={item.newsImage} alt={item.newsImage} />
            <div dangerouslySetInnerHTML={{ __html: item.newsContent }} />
          </div>
        ))
      ) : (
        <div>Bu başlıkta bir haber bulunamadı.</div>
        
      )}
      
    </div>
  );
}
