import React from "react";
import {Card , CardImg , CardImgOverlay , CardText , CardBody , CardTitle} from 'reactstrap';

function DishDetail(props) {
    const {selectedDish} = props;
    const renderDish = (dish) =>{
        if(dish != null){
            return (
                <Card>
                    <CardImg width='100%' object src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }else{
            return (<div></div>);
        }
    }
    
    const renderComment = (dish) =>{
        if(dish != null){
            return (
                <>
                    <CardBody>
                        <CardTitle>Comments</CardTitle>
                        {dish.comments.map(comment =>{
                            return (
                                <>
                                    <CardText>{comment.comment}</CardText>
                                    <CardText>--{comment.author}, {comment.date}</CardText>
                                </>
                            )
                        })}
                    </CardBody>
                </>
            )
        }else{
            return (<div></div>);
        }
    }

    return( 
        <>
            <div className="row ">
            <div className="col-12 col-md-5 m-1">
                {renderDish(selectedDish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                {renderComment(selectedDish)}
            </div>
            </div>
        </>)
}

export default DishDetail;