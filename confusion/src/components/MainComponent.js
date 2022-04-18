import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { addComment } from "../redux/ActionCreators";

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
});

const mapStateToProps = (store) => {
  return {
    dishes: store.dishes,
    comments: store.comments,
    promotions: store.promotions,
    leaders: store.leaders,
  };
};

class Main extends Component {
  constructor(props) {
    super(props);
  }

  HomePage = () => {
    return (
      <Home
        dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
      />
    );
  };

  DishWithId = ({ match }) => {
    console.log("dishwithId ", match.params.dishId, this.props.dishes);
    console.log(
      "dish passed",
      this.props.dishes.filter(
        (dish) => dish.id === parseInt(match.params.dishId, 10)
      )[0]
    );
    const dish = this.props.dishes.filter(
      (dish) => dish.id === parseInt(match.params.dishId, 10)
    )[0];
    // return (
    //   <p>
    //     No dish for id: {match.params.dishId} {JSON.stringify(dish)}
    //   </p>
    // );
    return (
      <DishDetail
        dish={
          this.props.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={this.props.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
        addComment={this.props.addComment}
      />
    );
  };

  Aboutus = () => {
    return <About leaders={this.props.leaders}></About>;
  };

  render() {
    console.log("main dishes", this.props.dishes);
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
                dishes={this.props.dishes}
                onClick={(dishId) => this.setselectedDish(dishId)}
              />
            )}
          />
          <Route path="/menu/:dishId" component={this.DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/aboutus" component={this.Aboutus} />
          <Redirect to="/home" />
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

const _main = connect(mapStateToProps, mapDispatchToProps)(Main);

export default withRouter(_main);
