import { useState } from "react";
import Nav from "../components/Nav";
import { addNews } from "../firebase";

export default function InsertNewsPage() {
  const [newsImage, setNewsImage] = useState("");
  const [newsCategory, setNewsCategory] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [newsSubtitle, setNewsSubtitle] = useState("");
  const [newsContent, setNewsContent] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    await addNews({
      newsCategory,
      newsTitle,
      newsSubtitle,
      newsContent,
      newsImage,
    });
  };

  return (
    <div>
      <Nav />
      <form onSubmit={submitHandle} className="insertNews">
        <h1>Haberleri buradan ekleyeceğiz</h1>
        <div className="insertNews__category">
          <h3>Haberin Kategorisi</h3>
          <select
            onChange={(e) => setNewsCategory(e.target.value)}
            className="insertNews__category__select"
          >
            <option value="" disabled selected>
              Haberin Kategorisini Seçiniz
            </option>
            <option value="Gündem">Gündem</option>
            <option value="Finans">Finans</option>
            <option value="Spor">Spor</option>
            <option value="Hayat">Hayat</option>
            <option value="Dünya">Dünya</option>
            <option value="Ekonomi">Ekonomi </option>
            <option value="Astroloji">Astroloji</option>
            <option value="Diger">Diger</option>
          </select>
        </div>
        <div className="insertNews__title">
          <div>
            <h3>Haberin başlığı</h3>
          </div>
          <textarea
            onChange={(e) => setNewsTitle(e.target.value)}
            placeholder="Haberin Başlığı"
            className="insertNews__title__add"
          />
        </div>
        <div className="insertNews__subheading">
          <h3>Haberin alt başlığı</h3>
        </div>
        <textarea
          onChange={(e) => setNewsSubtitle(e.target.value)}
          placeholder="Haberin alt başlığı"
          className="insertNews__subheading__add"
        />
        <div className="insertNews__content">
          <h3>Haberin İçeriği</h3>
          <textarea
            onChange={(e) => setNewsContent(e.target.value)}
            placeholder="Haberin İçeriği (HTML etiketleriyle)"
            className="insertNews__content__add"
          />
        </div>
        <div className="insertNews__content">
          <h3>Haberin Resim yolu</h3>
          <textarea
            onChange={(e) => setNewsImage(e.target.value)}
            placeholder="Haberin Resim yolu"
            className="insertNews__content__add"
          />
        </div>
        <button className="insertNews__button">Haberi Ekle</button>
      </form>

    </div>
  );
}
