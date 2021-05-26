import React, {useState, useEffect} from "react";
import "../App.css"
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Contact from "../components/Contact/Contact";
import Newsletter from "../components/NewLetter/NewsLetter";
import RecommendBanner from "../components/RecommendBanner/RecommendBanner";

export default function ContactPage() {
    useEffect(() => {
        document.body.style.overflow = 'unset'; // chua biet de lam gi
    }, [])

    return (
        <div className="Contact">
            <Header/>
            <Banner/>
            <RecommendBanner/>
            <Contact />
            <Newsletter/>
            <Footer/>
        </div>
    )
}