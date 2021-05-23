import {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Newsletter from "../components/NewLetter/NewsLetter";
import Footer from "../components/Footer/Footer";
import HomeTab from "../components/HomeTab/HomeTab";

export default function Home() {
    const [collection, setCollection] = useState([]);
    useEffect(() => {
        document.body.style.overflow = 'unset'; // chua biet de lam gi
    }, [])

    return (
        <div className="Home">
            <Header/>
            <Banner collection={collection}/>
            <HomeTab/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}