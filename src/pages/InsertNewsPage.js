import { useState } from "react";
import Nav from "../components/Nav";
import { addNews } from "../firebase";
export default function InsertNewsPage() {
  const [newsImage, setNewsImage] = useState("")
  const [newsCategory,setNewsCategory]=useState("")
  const [newsTitle,setNewsTitle]=useState("")
  const [newsSubtitle,setNewsSubtitle]=useState("")
  const [newsContent,setNewsContent]=useState("")



  const submitHandle = async (e) => {
    e.preventDefault();
    await addNews({
      newsCategory,
      newsTitle,
      newsSubtitle,
      newsContent,
      newsImage

    });
  };

  return (
    <div>
      <Nav />
      <form onSubmit={submitHandle} className="insertNews">
        <h1>Haberleri buradan ekleyeceğiz</h1>
        <div className="insertNews__category">
            <h3>
                Haberin Kategorisi
            </h3>
            <select onChange={(e)=>setNewsCategory(e.target.value)} className="insertNews__category__select"> 
            <option value="" disabled selected>Haberin Kategorisini Seçiniz</option>
            <option value="gundem">Gündem</option>
            <option value="finans">Finans</option>
            <option value="spor">Spor</option>
            <option value="hayat">Hayat</option>
            <option value="dunya">Dünya</option>
            <option value="ekonomi">Hayat</option>
            <option value="astroloji">Astroloji</option>
            <option value="diger">Diğer</option>
            </select>
        </div>
        <div className="insertNews__title">
          <div>
            <h3>Haberin başlığı</h3>
          </div>
          <textarea
          onChange={(e)=>setNewsTitle(e.target.value)}
            placeholder="Haberin Başlığı"
            className="insertNews__title__add"
          />
        </div>
        <div className="insertNews__subheading">
          <h3>Haberin alt başlığı</h3>
        </div>
        <textarea
        onChange={(e)=>setNewsSubtitle(e.target.value)}
          placeholder="Haberin alt başlığı"
          className="insertNews__subheading__add"
        />
        <div className="insertNews__content">
          <h3>Haberin İçeriği</h3>
          <textarea
          onChange={(e)=>setNewsContent(e.target.value)}
            placeholder="Haberin İçeriği"
            className="insertNews__content__add"
          />
        </div>
        <div className="insertNews__content">
          <h3>Haberin Resim yolu</h3>
          <textarea
          onChange={(e)=>setNewsImage(e.target.value)}
            placeholder="Haberin Resim yolu"
            className="insertNews__content__add"
          />
        </div>
        
        <button className="insertNews__button">Haberi Ekle</button>
      </form>
    </div>
  );
}
