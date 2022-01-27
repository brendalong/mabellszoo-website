import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
	return (
		<>
			<Container id="footer">
				<Row>
					<Col>
						<p>For inquiries or support, please contact <a href="http://studio6thave.com/contact-brenda/" target="_blank">Studio6thAve</a> <br />
							<a href="http://studio6thave.com/privacy-policy/" target="_blank">Mabell's Zoo Privacy Policy</a></p>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col>
						<ul id="footer-links">
							<li><a href="http://studio6thave.com" rel="noreferrer" title="http://studio6thave.com" target="_blank">
								<div className="webicon studio6thave"></div></a></li>
							<li><a href="http://facebook.com/MabellsWorld" rel="noreferrer" title="http://facebook.com/MabellsWorld" target="_blank"><div className="webicon facebook"></div></a></li>

						</ul>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col>
						<p>&copy; 2013-{new Date().getFullYear()}, Brenda Long with <a href="http://studio6thave.com">Studio6thAve</a></p>
					</Col>
				</Row>
			</Container>
		</>
	)
}