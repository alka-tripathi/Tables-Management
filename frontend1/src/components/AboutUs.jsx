import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Box from '@mui/material/Box';

export default function AboutUs() {
  return (
    <div>
      <div
        style={{
          height: '150px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',

          color: 'white',
        }}
        className="bg-black"
      >
        <h2>ABOUT US</h2>
      </div>

      <div
        style={{
          width: '80%',
          minHeight: '60vh',
          backgroundColor: 'pink',
          margin: '40px auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <Box
          component="img"
          sx={{
            height: '300px',
            width: '300px',
            borderRadius: '10px',
          }}
          alt="Ice cream & coffee"
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />

        <div
          style={{
            flex: '1 1 300px',
            backgroundColor: 'yellow',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'left',
          }}
        >
          <h4>
            Welcome to <strong>Your Café Name</strong> — the perfect hangout
            spot for ice cream lovers, coffee enthusiasts, and chill vibes!
            <br />
            <br />
            We’re all about serving happiness in scoops and sips. Whether you're
            craving a rich cappuccino, a refreshing smoothie, or a scoop of your
            favorite ice cream, we’ve got you covered.
            <br />
            <br />
            What makes us different? Cozy seating arrangements designed for
            comfort, whether you’re relaxing, working, or catching up with
            friends. No rush, just chill.
            <br />
            <br />
            Stop by, grab a seat, and sip into something amazing! ☕🍦
          </h4>
        </div>
      </div>
    </div>
  );
}
