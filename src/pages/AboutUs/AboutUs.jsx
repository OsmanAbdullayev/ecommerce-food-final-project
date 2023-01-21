import React from 'react'
import { Container } from 'react-bootstrap'
import Menu from '../Menu/Menu'

const AboutUs = () => {
  return (
    <Container>
        <h1 className='text-center p-5'>We are a restaurant functioning in Baku, Azerbaijan.</h1>
        <Menu lg="2"/>
    </Container>
  )
}

export default AboutUs