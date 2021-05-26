import React, {useContext, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import { faCartPlus, faCheckCircle, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Search.css'
import '../../App.css'
import { withRouter } from 'react-router';

function Search(props) {
    const [products, setProducts] = useState([])
    const [searchInput, setSearchInput] = useState("")
    const [constProducts, setConstProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(response => response.json())
             .then(data => {
                setConstProducts(data)
                setProducts(data)
             })
    }, [])
    
    const search = (event) => {
        const value = event.target.value
        const search = []
        for (let i in constProducts) {
            if ((constProducts[i].productDescription).toLowerCase().includes(value.toLowerCase())) {
                search.push(constProducts[i])
            }
        }
        setSearchInput(value)
        setProducts(search)
    }
    const handleClick = (e) => {
        const id = e.target.id
        // props.history.push(`product/${id}`)
        window.location = 'http://localhost:3000/product/'+ id;
    }

    return (
        <div class={props.searchOpen === true ? 'Search' : 'Search displayNone'}>

            <div className="search-header">
                <div className="search-title">Search</div>
                <div
                    className="search-close"
                    onClick={props.clickToClose}
                >
                    <FontAwesomeIcon icon ={faTimes} className="icon"/>
                </div>
            </div>

            <div>
                <div className={props.searchOpen === false ? '' : 'fadeIn'}>
                    <div className="search-form">
                        <form className="flex">
                            <FontAwesomeIcon icon={faSearch} className="icon"/>
                            <input
                                placeholder="Search"
                                onChange={search}
                                value={searchInput}
                            />
                        </form>
                    </div>

                    {
                        (products.length > 0 && searchInput !== "") &&
                        products.map((item,index) => {
                            return (
                                <div className="search-item" key={index} >
                                    <div className="search-item-img">
                                        <img src={item.productImg} height="100%" alt=""/>
                                    </div>
                                    <div className="search-item-body">
                                        <div className="search-item-name">
                                            <p>{item.productName}</p>
                                        </div>
                                    </div>
                                    <div className="item-view">
                                        <div className="button"
                                             key={item.productID}
                                             id={item.productID}
                                             onClick={handleClick}
                                        >
                                            VIEW
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Search)