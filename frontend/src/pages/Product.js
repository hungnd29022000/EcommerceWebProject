import React, {useEffect, useState} from "react";
import Header from "../components/Header/Header";
import RecommendBanner from "../components/RecommendBanner/RecommendBanner";
import Footer from "../components/Footer/Footer";
import Newsletter from "../components/NewLetter/NewsLetter";
import ProductFilter from "../components/Filter/ProductFilter";
import Banner from "../components/Banner/Banner";
export default function Product(){
    const [collection, setCollection] = useState([])
    useEffect(() => {
        document.body.style.overflow = 'unset';
    }, [])
    return (
        <div className="">
            <Header/>
            <Banner collection = {collection}/>
            <RecommendBanner/>
            <ProductFilter/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}