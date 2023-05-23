import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//создаем карточку товара
const MyCard = (props) => {
	const navigate = useNavigate();

	const handler = () => {
		navigate(`/product/${props._id}`);
	}
	return <Card onClick={handler} className="h-100">
		<Card.Img src={props.pictures} height="100px" className="w-auto" ></Card.Img>
		<Card.Body>
			<Card.Title>{props.name}</Card.Title>
			<Card.Text>{props.description.slice(0, 11)}...</Card.Text>
			<Button>Click</Button>
		</Card.Body>
	</Card>
}

export default MyCard