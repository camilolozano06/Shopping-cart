import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './section/Products';
import Details from './section/Details';

export class Section extends Component {
  render() {
    return (
      <section>
        <Routes>
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Details />} />
        </Routes>
      </section>
    );
  }
}

export default Section;
