import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import { Routes, Route, Link } from "react-router-dom"
import { Container } from "react-bootstrap";






//подключаем токен
const token = localStorage.getItem("rockToken");

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
		<Link to="/">Главная</Link>
		<Link to="/catalog">Каталог</Link>
		<main>
			<Container>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/catalog" element={<Catalog goods={goods} />} />
					<Route path="/product/:id" element={<Product token={token} />} />

				</Routes>
			</Container>

		</main >
		<footer className="container-fluid">footer</footer>
	</>
}
