import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export const Header = () => {

	return (
		<Container fluid="sm" id="header">
			<Row>
				<Col>
					<Image className="header-image" fluid src={require('./images/mabellzoo_header.jpg')} alt="Mabell's Zoo, multi-touch picture book for children" />
				</Col>
			</Row>
			<Row>
				<Col xs={8}>
					<blockquote><h1>Mabell's Zoo is a top-rated educational children's app.</h1>
						<p>Come play with the animals of Mabell's Zoo; a beautiful experience for children that promotes creativity while counting to 10. Each view features an animal with original art, rich colors and textures, musical sounds, and a large play area.</p>
					</blockquote>
				</Col>
				<Col xs={4}>
					<img src={require(`./images/mz_icon_72.png`)} width="72" height="72" alt="Mabell's Zoo Icon" />
				</Col>
			</Row>
			<Row>
				<Col><hr /></Col>
			</Row>
			<Row>
				<Col>
					<ul className="bodycopy">
						<li><span>Created for children 5 years old and younger.</span> Mabell's Zoo is easy to use and includes musical sounds, animals, vivid colors, and a large play area.</li>
						<li><span>Use all your fingers.</span> An app designed for the device and includes multi-touch activities.</li>
						<li><span>Intuitive</span> enough for young children to play alone or enjoy with family and friends.</li>

						<li><span>Fresh, beautiful artwork</span> handcrafted from crumpled painted coffee filters. </li>
						<li><span>Inspired by childhood activities:</span> blowing bubbles, tidily winks, and swinging mobiles. Each view has unique characteristics and employs physics for continuous discovery.</li>
						<li><span>Number association.</span> Toddlers can learn numbers and animal names: "9 penguins slip and slide on ice".</li>
						<li><span>Variety of musical sounds</span> and instruments (and we worked hard to create an environment that always sounds good).</li>
						<li><span>Older children (and adults)</span> will enjoy figuring out the physics of each view: Can you bat a bird from the elephant trunk? How many monkeys will hook together? Will the balls stack on a seal's nose? What tune can you play with the fish?</li>
					</ul>
				</Col>
			</Row>
			<Row>
				<Col><hr /></Col>
			</Row>
		</Container>

	)
}
