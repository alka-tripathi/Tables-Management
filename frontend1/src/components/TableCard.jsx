import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TableBarIcon from '@mui/icons-material/TableBar';

import { DrinkContext } from '../../ContentContext/DrinkContent';
import { IcecreamContext } from '../../ContentContext/IceCreamContext';

const coffeeMenu = [
  { name: 'Espresso', price: 120 },
  { name: 'Latte', price: 150 },
  { name: 'Cappuccino', price: 160 },
  { name: 'Mocha', price: 170 },
];



const TableCard = ({ tableNumber, onDelete }) => {
  const { drinks } = useContext(DrinkContext);
  const { icecream } = useContext(IcecreamContext);

  const [selectedCoffee, setSelectedCoffee] = useState('');
  const [coffeeQty, setCoffeeQty] = useState(1);

  const [selectedIceCream, setSelectedIceCream] = useState('');
  const [iceCreamQty, setIceCreamQty] = useState(1);

  const [selectedDrink, setSelectedDrink] = useState('');
  const [drinkQty, setDrinkQty] = useState(1);

  const getItemPrice = (menu, itemName) => {
    const item = menu.find((i) => i.name === itemName);
    return item ? item.price : 0;
  };

  const coffeeTotal = coffeeQty * getItemPrice(coffeeMenu, selectedCoffee);
  const iceCreamTotal = iceCreamQty * getItemPrice(icecream, selectedIceCream);
  const drinkTotal = drinkQty * getItemPrice(drinks || [], selectedDrink);

  const total = coffeeTotal + iceCreamTotal + drinkTotal;

  return (
    <div
      style={{
        border: '2px solid #cfd8dc',
        padding: '10px',
        marginTop: '20px',
        width: '40%',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#b0bec5',
      }}
    >
      <h3 style={{ color: '#263238' }}>
        <TableBarIcon /> Table {tableNumber}
      </h3>

      {/* Coffee Section */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <select
          className="form-select"
          style={{ width: '50%' }}
          value={selectedCoffee}
          onChange={(e) => setSelectedCoffee(e.target.value)}
        >
          <option value="">Select Coffee</option>
          {coffeeMenu.map((coffee) => (
            <option
              key={coffee.name}
              value={coffee.name}
            >
              {coffee.name} - ₹{coffee.price}
            </option>
          ))}
        </select>
        <select
          className="form-select"
          style={{ width: '13%' }}
          value={coffeeQty}
          onChange={(e) => setCoffeeQty(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((no) => (
            <option
              key={no}
              value={no}
            >
              {no}
            </option>
          ))}
        </select>
        <p>Total: ₹{coffeeTotal}</p>
      </div>

      {/* Ice Cream Section */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <select
          className="form-select"
          style={{ width: '50%' }}
          value={selectedIceCream}
          onChange={(e) => setSelectedIceCream(e.target.value)}
        >
          <option value="">Select Ice Cream</option>
          {icecream?.map((ic, index) =>
            ic?.name ? (
              <option
                key={index}
                value={ic.name}
              >
                {ic.name} - ₹{ic.price}
              </option>
            ) : null
          )}
        </select>
        <select
          className="form-select"
          style={{ width: '13%' }}
          value={iceCreamQty}
          onChange={(e) => setIceCreamQty(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((no) => (
            <option
              key={no}
              value={no}
            >
              {no}
            </option>
          ))}
        </select>
        <p>Total: ₹{iceCreamTotal}</p>
      </div>

      {/* Drinks Section */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <select
          className="form-select"
          style={{ width: '50%' }}
          value={selectedDrink}
          onChange={(e) => setSelectedDrink(e.target.value)}
        >
          <option value="">Select Drink</option>
          {drinks?.map((drink, index) =>
            drink?.name ? (
              <option
                key={index}
                value={drink.name}
              >
                {drink.name} - ₹{drink.price}
              </option>
            ) : null
          )}
        </select>
        <select
          className="form-select"
          style={{ width: '13%' }}
          value={drinkQty}
          onChange={(e) => setDrinkQty(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((no) => (
            <option
              key={no}
              value={no}
            >
              {no}
            </option>
          ))}
        </select>
        <p>Total: ₹{drinkTotal}</p>
      </div>

      {/* Final Total and Actions */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          alignItems: 'center',
          marginTop: '10px',
        }}
      >
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          style={{ color: '#263238', border: '1px solid #263238' }}
          onClick={() => onDelete(tableNumber)}
        >
          Clear Table
        </Button>
        <Button color="secondary">Pay Now</Button>
        <p>
          <strong>Total: ₹{total}</strong>
        </p>
      </div>
    </div>
  );
};

export default TableCard;
