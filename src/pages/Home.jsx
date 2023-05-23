import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import AdBlock from "../components/AdBlock";



let ads = [
	{
		caption: "Pedigree",
		text: "Лучшее лакомство для ваших собак",
		bg: "lightblue",
		pic: "https://www.pedigree.ru/photos/Rations_196/PG_2.2kg_face_Universal-min.png"
	},
	{
		caption: "Ням-ням",
		text: "Лучшее лакомство для собак",
		bg: "violet",
		pic: " https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-366-340x340.png"
	},
	{
		caption: "Ням-ням",
		text: "Лучшее лакомство для собак",
		bg: "lightpink",
		pic: "https://domkorma.ru/components/com_jshopping/files/img_products/______2.png"
	}
]

const Home = () => {
	return <>
		<Row className="gx-10 gy-4">
			<Col xs={12}>
				<div></div>
			</Col>
		</Row>

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