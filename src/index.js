import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './redux/store';
import Home from './Home';
import Manufactures from './components/Manufacture';
import Model from './components/Model';
import ModelForMake from './components/ModelForMake';
import Names from './components/Names';
import NameAndYear from './components/NameAndYear';
import TypeforMake from './components/TypeForMake';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='Manufacture' element={<Manufactures/>}/>
      <Route path='Model' element={<Model/>}/>
      <Route path='ModelForMake' element={<ModelForMake/>}/>
      <Route path='Name' element={<Names/>}/>
      <Route path='NameAndYear' element={<NameAndYear/>}/>
      <Route path='TypeforMake' element={<TypeforMake/>}/>
    </Routes>
  </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
