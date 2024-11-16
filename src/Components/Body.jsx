import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async ()=> {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
    

    const json  = await data.json();
        setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };
    //Conditional Rendering
    // if(listOfRestaurant.length === 0) {
    //     return <Shimmer/>
    // }
    
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return <h1>Looks like you are offline. Please check your intenet connection</h1>
    }

    const{setUserName, loggedInUser } = useContext(UserContext);

    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                    data-testid= "searchInput"
                    className="search-box border border-solid border-black" 
                        value={searchText}
                        onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button className="px-4 py-2 bg-green-100 m-4" onClick={()=>{
                    const filteredrestaurant = listOfRestaurant.filter(
                        (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurant(filteredrestaurant)
                }}>Search</button>
               
                </div>
                <div className="p-4 m-4 flex items-center">
                    <button 
                    className="filter-btn px-4 py-2 bg-gray-100 rounded-lg"
                    onClick={()=>{
                        const filterList = listOfRestaurant.filter((res)=> {
                        res.info.avgRating > 4
                        });
                        setlistOfRestaurant(filterList);
                    }}>
                    Top Rated Restaurant
                    </button>
                </div>
                <div className="p-4 m-4 flex items-center">
                    <label>UseName : </label>
                    <input 
                    className="search border border-black p-2" 
                    value={loggedInUser}
                    onChange={(e)=> setUserName(e.target.value)}
                    />
                </div>
            </div>
                <div className="res-container flex flex-wrap">
                    {
                    filteredRestaurant.map((restaurant)=>(
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                        <RestaurantCard resData={restaurant}/></Link>
                    ))}
                
                </div>
        </div>
        
    );
}
export default Body;