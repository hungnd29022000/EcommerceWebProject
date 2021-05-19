import {useEffect, useState} from "react";
import Header from "../component/Header/Header";
import Banner from "../component/Banner/Banner";
import Newsletter from "../component/NewLetter/NewsLetter";
import Footer from "../component/Footer/Footer";

export default function Home() {
    const [collection, setCollection] = useState([]);
    useEffect(() => {
        document.body.style.overflow = 'unset'; // chua biet de lam gi
    }, [])

    return (
        <div className="Home">
            <Header/>
            <Banner collection={collection}/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}