import React from "react";
import { Row, Col } from "react-bootstrap";


const Block = ({ pic, bg, caption, text }) => {
	let style = {
		backgroundImage: "url(https://bogatyr.club/uploads/posts/2023-03/thumbs/1677900038_bogatyr-club-p-sobachya-lapka-foni-oboi-88.png)",
		backgroundSize: "auto 200%",
		backgroundColor: bg

	}
	return <Row style={style}>
		<Col xs={8}>
			<h3>{caption}</h3>
			<p>{text}</p>
		</Col>
		<Col xs={4}>
			<img src={pic}
				alt={caption}
				className="w-100" />
		</Col>

	</Row>

}

export default Block

const ads = "https://m.mirkorma.ru/upload/iblock/1b4/1b4a1033f26f202db2714a014baaecfd.jpg, https://free-png.ru/wp-content/uploads/2021/05/free-png.ru-366-340x340.png, https://domkorma.ru/components/com_jshopping/files/img_products/______2.png"

