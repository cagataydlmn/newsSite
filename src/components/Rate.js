import { useEffect } from "react";

export default function Rate(){
    const kurgetir = "http://hasanadiguzel.com.tr/api/kurgetir"
    useEffect(()=>{
        fetch("http://bigpara.hurriyet.com.tr/api/v1/hisse/list")
        .then(res => res.json())
        .then(data => console.log(data))
    }, []);
    return(
        <div>
            rate aha burası
        </div>
    )
}