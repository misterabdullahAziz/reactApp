import React, {Component} from 'react'
import {Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody} from 'reactstrap'

class DishdetailComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDish : null
        }
        console.log(props);
    }
    render(){
        const dish = this.props.dish;
        if (dish != null){
            console.log(dish.comments);
            const comments = dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p> --{comment.author} , {comment.date}</p>
                    </div>
                );
            });
            return (
                <div className='row'>
                    <div className="col-12 col-md-5 mt-1">
                        <Card>
                            <CardImg width='100%' object src={dish.image} alt={dish.name}/>
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        <h1>Comments</h1>
                        {comments}
                    </div>                    
                </div>
                
            );
        }
        else{
            return(<div></div>);
        }
    }
}
export default DishdetailComponent;