import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from './HeaderComponent';
import Footer from './FooterComponent';

function MainComponent() {
  const [dishes, SetDishes] = useState(DISHES);
  const [selectedDish, setselectedDish] = useState(null);


  return (
    <div>
      <Header></Header>
      <Menu dishes={dishes} onClick={(dishId) => setselectedDish(dishId)} />
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} />
    </div>
  );
}

export default MainComponent;
