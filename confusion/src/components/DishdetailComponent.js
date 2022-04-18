import React from "react";
import "../App.css";
import CommentForm from "./DishCommentForm";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Component } from "react";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function RenderDish(props) {
  if (props.dish != null) {
    return (
      <Card>
        <CardImg
          width="100%"
          object
          src={props.dish.image}
          alt={props.dish.name}
        />
        <CardBody>
          <CardTitle>{props.dish.name}</CardTitle>
          <CardText>{props.dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments, addComment, dishId }) {
  if (comments != null) {
    return (
      <>
        <CardBody>
          <CardTitle>Comments</CardTitle>
          {comments.map((comment) => {
            return (
              <>
                <CardText>{comment.comment}</CardText>
                <CardText>
                  --{comment.author},{" "}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </CardText>
              </>
            );
          })}
        </CardBody>
      </>
    );
  } else {
    return <div></div>;
  }
}

function DishDetail(props) {
  console.log("dish details", props.dish);
  return (
    <div className="container">
      <p>hello: {JSON.stringify(props.dish)} xx</p>;
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments
            comments={props.comments}
            addComment={props.addComment}
            dishId={props.dish.id}
          />
          <div className="row">
            <div className="CommentWrapper">
              <CommentForm
                dishId={props.dish.id}
                addComment={props.addComment}
              ></CommentForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishDetail;
