import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CoffeeContext } from '../../ContentContext/CoffeeContent';
import Rating from '@mui/material/Rating';

export default function CoffeeMenu() {
  const { coffee } = useContext(CoffeeContext);

  // const [coffeedata,setcoffeedata]=useState()
  return (
    <div>
      <h1
        style={{ textAlign: 'center', marginBottom: '20px', marginTop: '20px' }}
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
            sx={{ maxWidth: 345 }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={coffeeItem.imageUrl || 'https://via.placeholder.com/140'}
              title={coffeeItem.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
              >
                {coffeeItem.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary' }}
              >
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Rate</Button> */}
              <Rating
                name="size-medium"
                defaultValue={2}
              />

              <Button size="small">{coffeeItem.price}</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
