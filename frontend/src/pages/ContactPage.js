import React, {useState, useEffect} from "react";
import "../App.css"
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";
import Newsletter from "../components/NewLetter/NewsLetter";

export default function ContactPage() {
    const [collection, setCollection] = useState([]);
    useEffect(() => {
        document.body.style.overflow = 'unset'; // chua biet de lam gi
    }, [])

    return (
        <div className="Contact">
            <Header/>
            <Banner collection={collection}/>
            {/*<RecommendBanner/>*/}
            {/*<HomeTab/>*/}
            {/*<Collection*/}
            {/*    collection={collection}*/}
            {/*/>*/}
            <Contact />
            <Newsletter/>
            <Footer/>
        </div>
    )
}