import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    // console.log(resData);
    const {
        name, 
        avgRating,
        cuisines,
        costForTwo,
        cloudinaryImageId
    } = resData?.info;

    return (
        <div data-testid="resCard" className="res-card m-4 p-4 w-[220px] rounded-lg hover:bg-gray-200 bg-gray-100">
            <img className="res-logo rounded-lg"
            alt="res-logo" 
            src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>

        </div>
    )
}

export default RestaurantCard;