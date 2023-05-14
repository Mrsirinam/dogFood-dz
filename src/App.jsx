import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

//подключаем токен
const token = localStorage.getItem("rockToken");

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


export default () => {
	const [goods, setGoods] = useState([])
	//получаем товары с сервера
	useEffect(() => {
		if (token) {
			fetch("https://api.react-learning.ru/products", {
				headers: {
					"Authorization": `Bearer ${localStorage.getItem("rockToken")}`
				}
			})
				.then(res => res.json())
				.then(data => {
					if (!data.err) {
						console.log(data);
						// setGoods(data.products.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
						setGoods(data.products);

					}
				})
		}
	}, [token])

	return <>
		<header className="container-fluid">header</header>
		<main>
			<Container>
				<Row>
					<Col xs={12}><h1>React page</h1></Col>
					{/* el - это наш каждый товар/ Создаем карточки товаров */}
					{goods.map(el => <Col xs={6} sm={4} md={3} key={el._id}>
						<MyCard name={el.name} txt={el.description} pic={el.pictures} />
					</Col>)}
					{/* <Col xs={6} sm={4} md={3}>
						<MyCard name="1" txt="1111" />
					</Col>
					<Col xs={6} sm={4} md={3}>
						<MyCard name="2" txt="2222" />
					</Col>
					<Col xs={6} sm={4} md={3}>
						<MyCard name="3" txt="3333" />
					</Col>
					<Col xs={6} sm={4} md={3}>
						<MyCard name="4" txt="4444" />
					</Col> */}
				</Row>
			</Container>

		</main >
		<footer className="container-fluid">footer</footer>
	</>
}
