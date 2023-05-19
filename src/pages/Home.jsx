import React from "react";
import { Row, Col } from "react-bootstrap";
import AdBlock from "../components/AdBlock";

let ads = [
	{
		caption: "Ням-ням",
		text: "Лучшеелакомство для собак",
		bg: "springgreen",
		pic: "https://glavnoehvost.ru/upload/thumbs/source/productimage/image/9d0a4c5-289e-11e7-940f-d0509947687b8a19177d-3a5f-11e9-9482-d0509947687b_5ddcacf24cbf1.png"
	},
	{
		caption: "Ням-ням",
		text: "Лучшеелакомство для собак",
		bg: "violet",
		pic: " https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-366-340x340.png"
	},
	{
		caption: "Ням-ням",
		text: "Лучшеелакомство для собак",
		bg: "lightblue",
		pic: "https://domkorma.ru/components/com_jshopping/files/img_products/______2.png"
	}
]

const Home = () => {
	return <>
		<Row className="gx-5 gy-4">
			<Col xs={12}>
				<AdBlock {...ads[0]} />
				{/* //первая рекламная карточка на весь экран */}
			</Col>
			<Col xs={12} md={6}>
				{/* //вторая и третья рекламная карточка каждая занимает по половине экрана */}
				<AdBlock {...ads[1]} />
			</Col>
			<Col xs={12} md={6}>
				<AdBlock {...ads[2]} />
			</Col>
		</Row>

	</>
}


export default Home;


// xs - сколько столбцов от 1 до 12 занимает элемент по ширине для мобильного устройства
// sm - большой телефон или маленький планшет
// md - планшет
// xl - компьютер
// xxl - увеличенный монитор