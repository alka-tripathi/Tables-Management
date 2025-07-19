// ImageSlider.js
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';

const items = [
  {
    name: 'Coffee',
    description: 'A hot beverage to boost your energy',
    image:
      'https://wallpapers.com/images/hd/latte-art-coffee-shop-vibes-jpg-fvernbhsdwfz0jyr.jpg',
  },
  {
    name: 'Ice Cream',
    description: 'Cold and sweet dessert',
    image:
      'https://tse4.mm.bing.net/th/id/OIP.bPEX67aysQH1_dz1n_x85wHaE7?r=0&w=1024&h=682&rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    name: 'Drinks',
    description: 'Refresh yourself',
    image:
      'https://static.vecteezy.com/system/resources/previews/001/903/512/non_2x/assorted-soft-drinks-free-photo.jpg',
  },
];

function ImageSlider() {
  return (
    <Carousel
      animation="slide"
      interval={3000}
      indicators={true}
    >
      {items.map((item, i) => (
        <SlideItem
          key={i}
          item={item}
        />
      ))}
    </Carousel>
  );
}

function SlideItem({ item }) {
  return (
    <Paper sx={{ position: 'relative', height: 400 }}>
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />
      <Typography
        variant="h5"
        sx={{
          position: 'absolute',
          bottom: 20,
          left: 20,
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: '8px 12px',
          borderRadius: '5px',
        }}
      >
        {item.name}: {item.description}
      </Typography>
    </Paper>
  );
}

export default ImageSlider;
