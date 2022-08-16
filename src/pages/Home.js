import React, { useEffect } from "react";
import '../style/Home.css'

const Home = () => {

    useEffect(() => {

    }, [])
    return(
        <div className="home">
            <div className="rowFlex">
                <Carousel />
                <NewItems />
            </div>
        </div>
    )
}

const Carousel = (props) => {
    return(
        <div className="carousel">
            <h1>carousel</h1>
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
export default Home