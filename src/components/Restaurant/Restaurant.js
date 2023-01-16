import React,{Component} from "react";
import Banner from "./Banner";
import FoodRecommender from "./FoodRecommender";
import Header from "./Header";


const menuItems = [
    {
      name: "Our Menu",
      link: "#",
      type: "link"
    },
    {
      name: "Special Offers",
      link: "#",
      type: "link"
    },
    {
      name: "About",
      link: "#",
      type: "link"
    },
    {
      name: "Order",
      link: "/order",
      type: "button"
    }
  ];

export default function Restaurant(){
    return(
        <>
        <Header restaurantName="Your Restaurant" menuItems={menuItems} />
        <Banner
        title="Fast food, made fresh, right to your door"
        subtitle="Explore Our Menu"
        imageURL="https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format"
      />
      <FoodRecommender/>
        </>
    );
}