
const ResturantCard = (props) => {
    const { resData } = props;
    const cuisines = resData.info.cuisines;
    const displayCuisines = cuisines.length > 3
        ? `${cuisines.slice(0, 3).join(", ")}...`
        : cuisines.join(", ");

    const restorantsName = resData.info.name;
    const nameWords = restorantsName.split(" ");
    const displayRestorantsName = nameWords.length > 3
        ? `${nameWords.slice(0, 3).join(" ")}...`
        : restorantsName;
    return (
        <div>
            <div className="main_restaurant_div">

                <img className="restaurant_img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId} alt="image" />
                <div className="card_content">
                    <h3 className="res_name">{displayRestorantsName}</h3>
                    <div className="rate_time">
                        <h5 className="res_rating">{resData.info.avgRating}</h5>
                        <h4 className="res_sla">{resData.info.sla.slaString}</h4>
                    </div>
                    <h6 className="res_cate_name">{displayCuisines}</h6>
                    <h6 className="res_cost">{resData.info.costForTwo}</h6>

                </div>
            </div>
        </div>
    );
}

export default ResturantCard;