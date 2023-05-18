import React from "react";
import { Card, Button } from "react-bootstrap";

//создаем карточку товара
const MyCard = (props) => {
	return <Card>
		<Card.Img src={props.pic} height="100px" className="w-auto" ></Card.Img>
		<Card.Body>
			<Card.Title>{props.name}</Card.Title>
			<Card.Text>{props.txt.slice(0, 11)}...</Card.Text>
			<Button>Click</Button>
		</Card.Body>
	</Card>
}

export default MyCard