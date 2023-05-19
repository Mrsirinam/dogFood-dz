import React from "react";
import { Row, Col } from "react-bootstrap";
import MyCard from "../components/Card";


const Catalog = ({ goods }) => {
	return <Row className="gy-3 ">
		<Col xs={12}><h1>Каталог товаров</h1></Col>
		{/* el - это наш каждый товар/ Создаем карточки товаров */}
		{goods.map(el => <Col xs={6} sm={4} lg={3} key={el._id}>
			<MyCard name={el.name} txt={el.description} pic={el.pictures} />
		</Col>)}
	</Row>
}


export default Catalog;