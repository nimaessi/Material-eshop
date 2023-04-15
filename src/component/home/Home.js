import React from 'react';
import Layout from '../layout';
import MyList from './MyList';
import BestSelling from './BestSelling';
import Top from './Top';
import ProductCard from './ProductCard';
import m4 from '../../img/m4.webp';
import m3 from '../../img/m3.webp';
import m2 from '../../img/m2.webp';
import m1 from '../../img/m1.webp';
import f1 from '../../img/f1.webp';
import f2 from '../../img/f2.webp';
import f3 from '../../img/f3.webp';
import f4 from '../../img/f4.webp';
import ButtonBases from './Offer';

const bestProducts = [
  {
    src: m4,
    title: 'Casual sweater',
    price: '$ 180.00'
  },
  {
    src: m3,
    title: 'Black White Sweater',
    price: '$ 180.00'
  },
  {
    src: m2,
    title: 'Blue jeanes',
    price: '$ 180.00'
  },
  {
    src: m1,
    title: 'Black White Sweater',
    price: '$ 180.00'
  }
];

const featuredProducts = [
  {
    src: f1,
    title: 'Wool overcoat ',
    price: '$ 310.00'
  },
  {
    src: f2,
    title: 'Blue jeanes',
    price: '$ 310.00'
  },
  {
    src: f3,
    title: 'Royal Black suit',
    price: '$ 1,140.00'
  },
  {
    src: f4,
    title: 'Wool overcoat',
    price: '$ 1,140.00'
  }
];

 const Home = () => {
  return (
    <Layout>
      <Top />
      <MyList />
      <BestSelling />
      <ProductCard products = {bestProducts} mainTitle = {'Best Selling Product'} />
      <ButtonBases />
      <ProductCard products = {featuredProducts} mainTitle = {'Featured Products'} />
    </Layout>
    
  )
}

export default Home;