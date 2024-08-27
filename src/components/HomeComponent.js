import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../firebase";

export default function Home() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    getNews(setNewsList);
  }, []);

  return (
    <div>
      burası home componenti
      <div className="home">
        <div className="home__top">
        {newsList.slice(0,4).map((item) => (
          <Link to={`/${item.newsTitle}`} className="home__top__box">
            <img alt={item.newsImage} src={item.newsImage} />
            <div className="home__top__box__title">{item.newsTitle}</div>
          </Link>
        ))}
      
           
      </div>
       </div>
    </div>
  );
}
