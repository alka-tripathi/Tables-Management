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
      'https://static.vecteezy.com/system/resources/previews/024/677/423/non_2x/keeping-of-ice-cream-flavor-whit-unused-blueberry-strawberry-kiwi-lemon-vanilla-setup-on-common-foundation-creative-resource-ai-generated-photo.jpeg',
  },
  {
    name: 'Drinks',
    description: 'Refresh yourself',
    image:
      'https://static.vecteezy.com/system/resources/previews/001/903/512/non_2x/assorted-soft-drinks-free-photo.jpg',
  },
  {
    name: 'Coffee',
    description: 'A hot beverage to boost your energy',
    image:
      'https://images.pexels.com/photos/434213/pexels-photo-434213.jpeg?cs=srgb&dl=aroma-aromatic-art-434213.jpg&fm=jpg',
  },
  {
    name: 'Ice Cream',
    description: 'Cold and sweet dessert',
    image:
      'https://www.biggerbolderbaking.com/wp-content/uploads/2020/01/2-Ingredient-Ice-cream-Thumbnail-scaled.jpg',
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
