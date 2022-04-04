import React, {useState} from 'react';
import {Card , CardImg , CardImgOverlay , CardText , CardBody , CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';

const Menu  = (props) =>{
    const [selectedDish,setSelectedDish] = useState(null);
    const onDishSelect =(dish)=>{
        setSelectedDish(dish);
    }

    const menu = props.dishes.map(dish =>{
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=> onDishSelect(dish)}>
                    <CardImg width='100%' object src={dish.image} alt={dish.name}/>
                    <CardImgOverlay body className='ml-5'>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )
    });
    
    return (
        <div className='container'>
            <div className="row">
                {menu}
            </div>
            <DishDetail selectedDish={selectedDish}></DishDetail>
        </div>
    );

}


export default Menu;