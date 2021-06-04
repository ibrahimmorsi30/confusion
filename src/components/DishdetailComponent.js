import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


    const RenderDish = (dish) => {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    const RenderComments = (comments) => {
       return comments.map((comment) => {
            return (
                <li className="list-unstyled" key={comment.id}>
                    <p>{comment.comment}</p>
                    <p> -- {comment.author} 
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                </li>
            )
        })
    }

    const  DishDetail = (props) => {
        if(props.dish != null){
            console.log(props.dish)
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {RenderDish(props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul>
                        {RenderComments(props.dish.comments)}
                    </ul>
                </div>
            </div>
        );
        }
        else{
            return ( <div></div>);
        }
    }

export default DishDetail;