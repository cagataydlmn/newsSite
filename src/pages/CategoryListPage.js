import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { getNews } from "../firebase";

export default function CategoryListPage() {
  const { category } = useParams();
  const [newsGetByCategory, setNewsByCategory] = useState([]);

  useEffect(() => {
    getNews((data) => {
      const filteredNews = data.filter(
        (item) =>
          item.newsCategory &&
          item.newsCategory.toLowerCase() === category.toLowerCase()
      );
      console.log("Filtrelenmiş Veri:", filteredNews);
      setNewsByCategory(filteredNews);
    });
  }, [category]);

  console.log("newsCategory", category);
  return (
    <div className="categories__news">
      <Nav />
      <h2 className="categories__news__title">- {category} - </h2>
      {newsGetByCategory.map((item) => (
        <Link to={`/${item.newsTitle}`} className="categories__news__item" key={item.id}>
          <img src={item.newsImage} alt={item.newsTitle} />
          <div className="home__top__box__title">{item.newsTitle}</div>
          <div className="">{item.newsSubtitle}</div>
          {/* <div dangerouslySetInnerHTML={{ __html: item.newsContent }} /> */}
        </Link>
      ))}
    </div>
  );
}
