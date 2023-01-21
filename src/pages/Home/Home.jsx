import React from 'react'
import { Container } from 'react-bootstrap'
import BestDeals from '../../components/BestDeals/BestDeals'
import Hero from '../../components/Hero/Hero'
import ProductsSection from '../../components/ProductsSection/ProductsSection'
import Menu from '../Menu/Menu'

const Home = () => {
  return (
   <>
   <Hero/>
   <ProductsSection />
   <BestDeals />
   <Menu lg="3"  md="6" sm="12"/>
   </>
  )
}

export default Home