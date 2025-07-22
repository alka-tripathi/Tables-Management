import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';

export default function AboutUs() {
  return (
    <div>
      <div
        style={{
          height: '150px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'pink',
          color: 'white',
        }}
        className="bg-dark"
      >
        <h2> ABOUT US</h2>
      </div>
      <Cards></Cards>
    </div>
  );
}
