import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TableBarIcon from '@mui/icons-material/TableBar';
import '../style/tablecard.css';

import { DrinkContext } from '../../ContentContext/DrinkContent';
import { IcecreamContext } from '../../ContentContext/IceCreamContext';
import { CoffeeContext } from '../../ContentContext/CoffeeContent';

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
    <div className="table-card">
      <h3 className="table-card-title">
        <TableBarIcon /> Table {tableNumber}
      </h3>

      {/* Coffee Section */}
      <div className="item-section">
        <select
          className="form-select"
          value={selectedCoffee}
          onChange={(e) => setSelectedCoffee(e.target.value)}
        >
          <option value="">Select Coffee</option>
          {coffee.map((c) => (
            <option
              key={c.name}
              value={c.name}
            >
              {c.name} - ₹{c.price}
            </option>
          ))}
        </select>
        <select
          className="form-select qty-select"
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
        <span className="item-total">₹{coffeeTotal}</span>
      </div>

      {/* Ice Cream Section */}
      <div className="item-section">
        <select
          className="form-select"
          value={selectedIceCream}
          onChange={(e) => setSelectedIceCream(e.target.value)}
        >
          <option value="">Select Ice Cream</option>
          {icecream?.map(
            (ic, idx) =>
              ic?.name && (
                <option
                  key={idx}
                  value={ic.name}
                >
                  {ic.name} - ₹{ic.price}
                </option>
              )
          )}
        </select>
        <select
          className="form-select qty-select"
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
        <span className="item-total">₹{iceCreamTotal}</span>
      </div>

      {/* Drinks Section */}
      <div className="item-section">
        <select
          className="form-select"
          value={selectedDrink}
          onChange={(e) => setSelectedDrink(e.target.value)}
        >
          <option value="">Select Drink</option>
          {drinks?.map(
            (d, idx) =>
              d?.name && (
                <option
                  key={idx}
                  value={d.name}
                >
                  {d.name} - ₹{d.price}
                </option>
              )
          )}
        </select>
        <select
          className="form-select qty-select"
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
        <span className="item-total">₹{drinkTotal}</span>
      </div>

      {/* Total & Actions */}
      <div className="table-card-actions">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => onDelete(tableNumber)}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="secondary"
        >
          Pay Now
        </Button>
        <h4>Total: ₹{total}</h4>
      </div>
    </div>
  );
};

export default TableCard;
