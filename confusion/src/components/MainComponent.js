import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";

function Main() {
  const [dishes, SetDishes] = useState(DISHES);
  const [selectedDish, setselectedDish] = useState(null);

  const HomePage = () => {
    return <Home />;
  };
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route
          exact
          path="/menu"
          component={() => (
            <Menu
              dishes={dishes}
              onClick={(dishId) => setselectedDish(dishId)}
            />
          )}
        />
        <Redirect to="/home" />
      </Switch>
      {/* <Menu dishes={dishes} onClick={(dishId) => setselectedDish(dishId)} />
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} /> */}
      <Footer></Footer>
    </div>
  );
}

export default Main;
