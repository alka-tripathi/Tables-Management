import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { CoffeeContext } from '../../ContentContext/CoffeeContent';
import Footer from '../components/Footer';
import '../style/CoffeeMenu.css';

export default function CoffeeMenu() {
  const { coffee } = useContext(CoffeeContext);

  return (
    <div className="coffee-menu-container">
      <h1 className="coffee-menu-title">COFFEE MENU</h1>

      <div className="coffee-cards-container">
        {coffee.map((coffeeItem) => (
          <Card
            key={coffeeItem._id}
            className="coffee-card"
            sx={{ maxWidth: 400, marginBottom: '20px' }}
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
                className="coffee-card-title"
              >
                {coffeeItem.name} - ₹{coffeeItem.price}
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Rating
                name="size-medium"
                defaultValue={2}
              />
            </CardActions>
          </Card>
        ))}
      </div>

      <Footer />
    </div>
  );
}
