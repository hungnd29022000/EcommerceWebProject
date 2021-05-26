import {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Newsletter from "../components/NewLetter/NewsLetter";
import Footer from "../components/Footer/Footer";
import HomeTab from "../components/HomeTab/HomeTab";
import RecommendBanner from "../components/RecommendBanner/RecommendBanner";

export default function Home() {
    useEffect(() => {
        document.body.style.overflow = 'unset'; // chua biet de lam gi
    }, [])

    return (
        <div className="Home">
            <Header/>
            <Banner/>
            <RecommendBanner/>
            <HomeTab/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}