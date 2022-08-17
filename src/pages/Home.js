import React, { useEffect, useState } from "react";
import '../style/Home.css'
import api from "../apiKey";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
    const [carouselList, setCarousel] = useState([])

    useEffect(() => {
        (async => {
            api.products.list({limit: 30})
                .then(res => {
                    setCarousel(res.data)
                })
                .catch(err => console.log(err))
        })()
    }, [])

    if(carouselList.length === 0){
        return(
            <h1>Loading...</h1>
        )
    }
    else{
        return(
            <div className="home">
                <div className="row">
                    <ImgCarousel items={carouselList}/>
                    <NewItems />
                </div>
            </div>
        )
    }
}

const ImgCarousel = (props) => {
    const items = props.items
    const [imgLinks, setLinks] = useState([])

    useEffect(() => {
        for(let i = 0; i < 5; i++){
            setLinks(arr => [...arr, items[Math.floor(Math.random() * items.length)]])
            //console.log(items[i].image.url)
        }
    }, [])
    return(
        <div className="carousel">
            <div style={carouselStyle}>
                <Carousel autoPlay={true}>
                    {imgLinks.map((links, index) => {
                        return(
                            <img src={`${links.image.url}`} key={index}/>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}

const NewItems = (props) => {
    return(
        <div className="newItems">
            <h1>new items</h1>
        </div>
    )
}

const carouselStyle = {
    height: '300px',
    width: '400px'
}
export default Home