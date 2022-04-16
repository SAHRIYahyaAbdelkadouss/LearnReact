import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedDishId: null,
    };
  }

  HomePage = () => {
    return (
      <Home
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };

  DishWithId = ({ match }) => {
    console.log("match match.params.dishId ", match.params.dishId);
    return (
      <DishDetail
        dish={
          this.state.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={this.state.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
      />
    );
  };

  Aboutus = () => {
    return <About leaders={this.state.leaders}></About>;
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/home" component={this.HomePage} />
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu
                dishes={this.state.dishes}
                onClick={(dishId) => this.setselectedDish(dishId)}
              />
            )}
          />
          <Route path="/menu/:dishId" component={this.DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/aboutus" component={this.Aboutus} />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu dishes={dishes} onClick={(dishId) => setselectedDish(dishId)} />
      <DishDetail dish={dishes.filter((dish) => dish.id === selectedDish)[0]} /> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
