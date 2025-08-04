import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Box from '@mui/material/Box';
import myPhoto from '../ImagesAssets/alkaProfile.jpg';
import Footer from './Footer.jsx';

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
          background: '#393E46',
        }}
      >
        <h2>ABOUT US</h2>
      </div>

      <div
        style={{
          width: '80%',
          minHeight: '60vh',
          backgroundColor: '#D7D7D7',
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
            width: '340px',
            borderRadius: '10px',
          }}
          alt="Ice cream & coffee"
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        />

        <div
          style={{
            flex: '1 1 300px',
            backgroundColor: '#58A0C8',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'left',
            boxShadow:
              'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          }}
        >
          <h5>
            Welcome to <strong>BLUE FARM</strong> — the perfect hangout spot for
            ice cream lovers, coffee enthusiasts, and chill vibes!
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
            <br />
            <br />
          </h5>
        </div>
      </div>
      <div
        style={{
          width: '80%',
          minHeight: '60vh',
          backgroundColor: '#D7D7D7',
          margin: '40px auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          padding: '20px',
          borderRadius: '10px',
          marginBottom: '200px',
        }}
      >
        <Box
          component="img"
          sx={{
            height: '320px',
            width: '320px',
            borderRadius: '10px',
            position: 'center',
          }}
          alt="Ice cream & coffee"
          src={myPhoto}
        />

        <div
          style={{
            flex: '1 1 300px',
            backgroundColor: '#58A0C8',
            padding: '20px',
            borderRadius: '10px',
            textAlign: 'left',
            boxShadow:
              'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          }}
        >
          <h5>
            <strong>About the Creator</strong>
            <br />
            This website was lovingly crafted by <strong>Alka Tripathi</strong>,
            a B.Tech student at United Institute of Technology (AKTU). She's
            passionate about web development, design, and creating smooth user
            experiences.
            <br />
            <br />
            Whether she's building full-stack applications or experimenting with
            creative front-end ideas, Alka loves turning concepts into clean and
            functional web projects.
            <br />
            <br />
            Fueled by coffee and curiosity, she's always learning and creating —
            one line of code at a time! 💻✨
          </h5>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
