import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDish : null
        }
        console.log("Menu Constructor");
    }

    componentDidMount(){
        console.log("Menu componentDidMount");
        
    }

    oneDishSelect (dish){
        this.setState({
            selectedDish:dish
        });
    }

    renderDish(dish){
        if (dish != null){
           return(
            <Card>
                <CardImg width='100%' object src={dish.image} alt={dish.name}/>
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
           );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        console.log("Menu reder");        
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card onClick={() => this.oneDishSelect(dish)}>
                        <CardImg width='100%' object src={dish.image} alt={dish.name}/>
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className='container'>
                <div className='row'>
                        {menu}
                </div>
                {/* <div className='row'>
                    {this.renderDish(this.state.selectedDish)} */}
                <DishdetailComponent dish ={this.state.selectedDish} />
                {/* </div> */}
            </div>
        );
    }
}

export default Menu;