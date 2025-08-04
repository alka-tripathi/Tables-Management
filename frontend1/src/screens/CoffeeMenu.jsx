import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CoffeeContext } from '../../ContentContext/CoffeeContent';
import Rating from '@mui/material/Rating';
import Footer from '../components/Footer';

export default function CoffeeMenu() {
  const { coffee } = useContext(CoffeeContext);

  // const [coffeedata,setcoffeedata]=useState()
  return (
    <div style={{ background: '#C9B194' }}>
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          paddingTop: '10px',
          color: '#664343',
        }}
      >
        COFFEE MENU
      </h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
        }}
      >
        {coffee.map((coffeeItem) => (
          <Card
            key={coffeeItem._id}
            sx={{ maxWidth: 400, width: '300px', marginBottom: '20px' }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image={coffeeItem.imageUrl || 'https://via.placeholder.com/140'}
              title={coffeeItem.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: '#543310', fontWeight: '300' }}
              >
                {coffeeItem.name} -₹{coffeeItem.price}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary' }}
              ></Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Rate</Button> */}
              <Rating
                name="size-medium"
                defaultValue={2}
              />
            </CardActions>
          </Card>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}
