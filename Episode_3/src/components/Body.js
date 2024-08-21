import ResturantCard from "./Resturants";
import { useEffect, useState } from "react";
import resList from "../utils/cardData";
import ShimmerUI from "./Shimmerui";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => { fetchData() }, []);

    const fetchData = async () => {
        const proxyUrl = "https://api.allorigins.win/get?url=";
        const targetUrl = encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8441489&lng=77.6793813&page_type=DESKTOP_WEB_LISTING");

        try {
            const response = await fetch(proxyUrl + targetUrl);
            if (response.ok) {
                const data = await response.json();
                const json = JSON.parse(data.contents); // AllOrigins wraps the content in a "contents" field
                console.log(json);
                setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants);
            } else {
                console.error("Error fetching data:", response.statusText);
            }
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    //conditinal render
    // if (listOfRestaurants.length === 0) {
    //     return <ShimmerUI />;
    // }


    return (listOfRestaurants.length === 0) ? <ShimmerUI /> : (
        <div className="main_body">
            <div className="filter_div" onClick={() => {
                const filteList = listOfRestaurants.filter((rate) => rate.info.avgRating > 4);
                setListOfRestaurants(filteList);
                console.log(filteList);
            }}>
                <button className="filter_btn">Top Ratted</button>
            </div>
            <div className="res_container">
                {
                    listOfRestaurants.map((resturent) => (
                        <ResturantCard key={resturent.info.id} resData={resturent} />
                    ))
                }
            </div>
        </div>
    );
}

export default Body;