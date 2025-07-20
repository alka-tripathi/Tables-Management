import React from 'react';
import { useContext } from 'react';
import { IcecreamContext } from '../../ContentContext/IceCreamContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function IcecreamMenu() {
  const { icecream } = useContext(IcecreamContext);
  return (
    <div style={{ background: '#B2CD9C' }}>
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          paddingTop: '10px',
          color: '#255F38',
        }}
      >
        COFFEE MENU
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        {icecream.map((ic) => (
          <Card
            key={ic._id}
            sx={{ maxWidth: 400, width: '300px', marginBottom: '20px' }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image={ic.imageUrl || 'https://via.placeholder.com/140'}
              title={ic.name}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ color: '#D5451B', fontWeight: '500' }}
              >
                {ic.name} -₹{ic.price}
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
