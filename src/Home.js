import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
    <>
    <header>
      <h1>Car store</h1>
    </header>
    <div className='headerLink'>
      <Link className='Link' to="./Manufacture"><span>Manufactures</span></Link>
      <Link className='Link' to="./Model"><span>Models</span></Link>
      <Link className='Link' to="./Name"><span>Names</span></Link>
      <Link className='Link' to="./NameAndYear"><span>Name & Year</span></Link>
      <Link className='Link' to="./TypeforMake"><span>Type for make</span></Link>
      <Link className='Link' to="./ModelForMake"><span>Model for make</span></Link>
    </div>
  </>
);

export default Home;
