import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Item from '../../components/Item/Item';
import menu from '../../data/menu'

const Menu = (props) => {
  return (
    <Container className='my-5'>
			<Row className='g-3'>
				{menu.map((fd, i) => {
					return (
            <Col lg={props.lg} md={props.md} sm={props.sm}>
							<Item key={i} img={fd.img} title={fd.title} price={fd.price} addProduct={fd} />
            </Col>
					);
				})}
	</Row>
    </Container>
  )
}

export default Menu