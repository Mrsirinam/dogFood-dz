import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Col, Row, Button, Image, ButtonGroup, Alert, Badgeб, Table } from "react-bootstrap"

const Product = ({ token }) => {
	const { id } = useParams();
	useEffect(() => {

	}, [])
	return <Row>
		<Col xs={12}>
			<a href="">Назад</a>
		</Col>
		<Col xs={12}>
			<h1>Название товара</h1>
			{id}
		</Col>
	</Row>

}


export default Product;