import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';
import Box from '@mui/material/Box';
import myPhoto from '../ImagesAssets/alkaProfile.jpg';
import Footer from './Footer.jsx';

export default function AboutUs() {
  return (
    <div style={{ backgroundColor: '#F2F5F7', minHeight: '100vh' }}>
      {/* Header */}
      <div
        style={{
          height: '180px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          background: 'linear-gradient(135deg, #0077B6, #48CAE4)',
          textShadow: '2px 2px 5px rgba(0,0,0,0.3)',
          fontSize: '2rem',
          fontWeight: '600',
          letterSpacing: '2px',
        }}
      >
        ABOUT US
      </div>

      {/* Section 1 */}
      <div style={styles.section}>
        <Box
          component="img"
          sx={{
            height: { xs: '250px', sm: '280px', md: '320px' },
            width: { xs: '100%', sm: '340px' },
            borderRadius: '15px',
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
          alt="Ice cream & coffee"
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        />

        <div style={styles.textBox}>
          <h3 style={styles.title}>
            Welcome to <strong>BLUE FARM</strong> 🍦☕
          </h3>
          <p style={styles.para}>
            The perfect hangout spot for ice cream lovers, coffee enthusiasts,
            and chill vibes! We’re all about serving happiness in scoops and
            sips. Whether you're craving a rich cappuccino, a refreshing
            smoothie, or a scoop of your favorite ice cream, we’ve got you
            covered.
          </p>
          <p style={styles.para}>
            What makes us different? Cozy seating, a relaxed atmosphere, and
            smiles all around — whether you’re here to relax, work, or catch up
            with friends.
          </p>
          <p style={styles.para}>
            Stop by, grab a seat, and sip into something amazing!
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div style={styles.section}>
        <Box
          component="img"
          sx={{
            height: { xs: '250px', sm: '280px', md: '320px' },
            width: { xs: '100%', sm: '320px' },
            borderRadius: '15px',
            objectFit: 'cover',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
          alt="Creator - Alka Tripathi"
          src={myPhoto}
        />

        <div style={styles.textBox}>
          <h3 style={styles.title}>👩‍💻 About the Creator</h3>
          <p style={styles.para}>
            This website was lovingly crafted by <strong>Alka Tripathi</strong>,
            a B.Tech student at{' '}
            <strong>United Institute of Technology (AKTU)</strong>. She's
            passionate about web development, design, and creating smooth user
            experiences.
          </p>
          <p style={styles.para}>
            Whether she's building full-stack applications or experimenting with
            creative front-end ideas, Alka loves turning concepts into clean and
            functional web projects.
          </p>
          <p style={styles.para}>
            Fueled by coffee and curiosity, she’s always learning and creating —
            one line of code at a time! 💻✨
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

const styles = {
  section: {
    width: '85%',
    backgroundColor: 'white',
    margin: '50px auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 20px',
  },
  textBox: {
    flex: '1 1 350px',
    backgroundColor: '#58A0C8',
    padding: '25px',
    borderRadius: '15px',
    color: 'white',
    lineHeight: '1.7',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 8px',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: '600',
    marginBottom: '15px',
  },
  para: {
    fontSize: '1rem',
    marginBottom: '12px',
  },
};
