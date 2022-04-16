import React from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderMenuItem(props) {
  return (
    <Card>
      <Link exact to={`/menu/${props.dish.id}`}>
        {console.log("Dish created with link to:",`/menu/${props.dish.id}`)}
        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
        <CardImgOverlay>
          <CardTitle>{props.dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1 dishes" key={dish.id}>
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};
export default Menu;
