import { useEffect, useState } from "react";

export default function Weather() {
  const [data, setData] = useState(null); // Başlangıçta veriyi null olarak ayarla
 

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=34c086a27ef946f4bc7121044242509&q=Sakarya&aqi=no"
    )
      .then((response) => {
        return response.json(); 
      })
      .then((data) => {
        setData(data); 
      })
     
  }, []);


  return (
    <div className="hava">
      {data && (
        <div className="hava__durumu">
            <div className="hava__durumu__location">{data.location.name}, {data.location.country}</div>
            <div className="hava__durumu__temp">
            Sıcaklık: {data.current.temp_c}°C
            </div>
            <div className="hava__durumu__feels">
            Hissedilen Sıcaklık: {data.current.feelslike_c}°C
            </div>
            <div className="hava__durumu__nasıl">Hava Durumu: {data.current.condition.text}</div>
        <div className="hava__durumu__image">
        <img
            src={`https:${data.current.condition.icon}`}
            alt={data.current.condition.text}
          />
        </div>
          <div>
          Rüzgar: {data.current.wind_kph} km/h
            </div>
        </div>
      )}
    </div>
  );
}
