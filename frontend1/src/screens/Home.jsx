import React from 'react';
import TableButton from '../components/TableButton';
import ImageSlider from '../components/ImageSlider';
import RoofingIcon from '@mui/icons-material/Roofing';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="container mt-4">
      <h1
        style={{
          textAlign: 'center',
          paddingTop: '10px',
          paddingBottom: '10px',
          color: '#144272',
        }}
      >
        <RoofingIcon
          style={{
            verticalAlign: 'middle',
            marginRight: '10px',
            fontSize: '50px',
          }}
        />
        Welcome to BLUE FRAM{' '}
      </h1>
      <p
        style={{
          textAlign: 'center',
          fontSize: '18px',
          color: '#4f4f4f',
          marginBottom: '30px',
        }}
      >
        <AutoAwesomeIcon
          style={{ marginRight: '13px', color: '#FFCC00' }}
        ></AutoAwesomeIcon>
        Where <strong>body</strong> + <strong>soul</strong> get relaxed{' '}
        <AutoAwesomeIcon
          style={{ marginLeft: '13px', color: '#FFCC00' }}
        ></AutoAwesomeIcon>
      </p>
      <ImageSlider></ImageSlider>
      <div className="mt-5">
        <TableButton></TableButton>
      </div>
    </div>
  );
}
