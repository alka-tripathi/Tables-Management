import React, { useContext } from 'react';
import { DrinkContext } from '../../ContentContext/DrinkContent';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function DrinkMenu() {
  const { drinks } = useContext(DrinkContext);

  return (
    <div
      style={{
        background: '#FCB454',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          paddingTop: '10px',
          color: 'white',
        }}
      >
        DRINK MENU
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        {drinks.map((drinkItem) => (
          <Card
            key={drinkItem._id}
            sx={{ maxWidth: 400, width: '300px', marginBottom: '20px' }}
          >
            <CardMedia
              sx={{ height: 300 }}
              image={drinkItem.imageUrl || 'https://via.placeholder.com/140'}
              title={drinkItem.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: '#D5451B', fontWeight: '500' }}
              >
                {drinkItem.name} -₹{drinkItem.price}
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
    </div>
  );
}
