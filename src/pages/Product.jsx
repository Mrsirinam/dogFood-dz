import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Col, Row, Button, Image, ButtonGroup, Alert, Badgeб, Table } from "react-bootstrap"
import { ChevronLeft, Plus, Dash, ChatHeartFill, Heart, Truck, Award } from "react-bootstrap-icons"

const Product = ({ token }) => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	useEffect(() => {
		if (token) {
			fetch(`https://api.react-learning.ru/products/${id}`, {
				headers: {
					"Authorization": `Bearer ${localStorage.getItem("rockToken")}`
				}
			})
				.then(res => res.json())
				.then(data => {
					if (!data.err) {
						if (!data.error) {
							setProduct(data)
						}
					}
				})
		}
	}, [token])

	const navigate = useNavigate();
	const move = (e) => {
		e.preventDefault();
		navigate("/catalog")
	}
	return <Row>
		<Col xs={12}>
			<a href="" onClick={move}><ChevronLeft /> Назад</a>
		</Col>
		<Col xs={12}>
			{product.name && <h1>{product.name}</h1>}
		</Col>
		<Col xs={4}>
			{product.pictures && <Image src={product.pictures} alt="pic" className="w-100" />}
		</Col>
		<Col xs={1} />
		<Col xs={7} >
			{product.discount ?
				<>
					{product.price &&
						<>
							<div><del><small>{product.price} ₽</small></del></div>
							<div><strong className="text-danger">{product.price * (100 - product.discount) / 100} ₽</strong></div>
						</>
					}
				</> :
				<>
					{product.price && <div><strong>{product.price} ₽
					</strong></div>}
				</>
			}
			<div>Тут будет количество</div>
			<div className="text-secondary"><Heart />В избранное</div>
			<Alert variant="secondary"></Alert>
			<Row>
				<Col xs={2} style={{ fontSize: "2em" }}><Truck /></Col>  ??????????????????????
				<Col xs={10}>
					<h6>Доставка по всему миру</h6>
					<p>Доставка курьером - <strong>от 399 ₽</strong></p>
					<p>Доставка в пункт выдачи - <strong>от 199 ₽</strong></p>

				</Col>

			</Row>

		</Col>
	</Row>

}


export default Product;