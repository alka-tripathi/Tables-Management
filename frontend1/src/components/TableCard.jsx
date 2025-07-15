import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TableBarIcon from '@mui/icons-material/TableBar';
import '../style/tablecard.css';

import { DrinkContext } from '../../ContentContext/DrinkContent';
import { IcecreamContext } from '../../ContentContext/IceCreamContext';
import { CoffeeContext } from '../../ContentContext/CoffeeContent';

const coffeeMenu = [
  { name: 'Espresso', price: 120 },
  { name: 'Latte', price: 150 },
  { name: 'Cappuccino', price: 160 },
  { name: 'Mocha', price: 170 },
];

const TableCard = ({ tableNumber, onDelete }) => {
  const { drinks } = useContext(DrinkContext);
  const { icecream } = useContext(IcecreamContext);
  const { coffee } = useContext(CoffeeContext);

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

  const coffeeTotal = coffeeQty * getItemPrice(coffee, selectedCoffee);
  const iceCreamTotal = iceCreamQty * getItemPrice(icecream, selectedIceCream);
  const drinkTotal = drinkQty * getItemPrice(drinks || [], selectedDrink);

  const total = coffeeTotal + iceCreamTotal + drinkTotal;

  return (
    <div
      style={{
        border: '1.2px solid #1F509A',
        // boxShadow:
        //   'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',

        boxShadow:
          'rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px',
        padding: '10px',
        marginTop: '20px',
        width: '40%',
        minHeight: '50vh',
        display: 'flex',
        flexDirection: 'column',
        color: 'white',
        justifyContent: 'space-evenly',
        // backgroundColor: '#b0bec5',
        // backgroundColor: '#113F67',
      }}
    >
      <h3 style={{ color: '#1F509A' }}>
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
          {coffee.map((coffee) => (
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
        <h6 style={{ color: '#1F509A' }}>Total: ₹{coffeeTotal}</h6>
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
        <h6 style={{ color: '#1F509A' }}>Total: ₹{iceCreamTotal}</h6>
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
        <h6 style={{ color: '#1F509A' }}>Total: ₹{drinkTotal}</h6>
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
          <h4 style={{ color: '#1F509A' }}>Total: ₹{total}</h4>
        </p>
      </div>
    </div>
  );
};

export default TableCard;
