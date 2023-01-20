import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Item from '../../components/Item/Item';
import menu from '../../data/menu'
const Drinks = () => {
  return (
    <Container className='my-5'>
			<Row className='g-3'>
				{menu.filter((menu) => menu.title|menu.category.toLowerCase().includes("drinks")).map((fd, i) => {
					return (
            <Col lg={3} md={6} sm={12}>
							<Item key={i} img={fd.img} title={fd.title} price={fd.price} addProduct={fd} />
            </Col>
					);
				})}
	</Row>
    </Container>
  )
}

export default Drinks