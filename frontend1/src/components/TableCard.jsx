import React, { useState } from 'react';
import TableButton from './TableButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TableBarIcon from '@mui/icons-material/TableBar';

const coffeeMenu = [
  { name: 'Espresso', price: 120 },
  { name: 'Latte', price: 150 },
  { name: 'Cappuccino', price: 160 },
  { name: 'Mocha', price: 170 },
];

const iceCreamMenu = [
  { name: 'Vanilla Scoop', price: 80 },
  { name: 'Chocolate Chip', price: 90 },
  { name: 'Strawberry Swirl', price: 85 },
  { name: 'Butterscotch Delight', price: 95 },
  { name: 'Mango Mania', price: 100 },
  { name: 'Cookies & Cream', price: 110 },
  { name: 'Black Currant', price: 105 },
  { name: 'Kulfi Stick', price: 70 },
];

const drinksMenu=[
  {name:'Coca Cola',price:40},
  {name:'Pepsi', price:35},
  {name:'Orange Juice',price:60},
  {name:'Lemonande' ,price:30},
  {name:'Iced Tea',price:50},
  {name:'Mango shake',price:80},
  {name:'Strawberry Shake' ,price:85},
  {name:'Chocolate Shake'}
  
]

//gettotal of coffee

const TableCard = ({ tableNumber, onDelete }) => {
  const [selectCoffee, setSelectedCoffee] = useState('');
  // coffee
  const [quantity, setQuantity] = useState(1);

  const [selectIcecreame, setSelectIcecream] = useState('');
  const [icquantity, seticQuantity] = useState(1);

  const [selectDrrink, selectedDrink]=useState('');
  const [drinkQuantity,selectedDrinkQuantity]=useState(1);

  const getItemPrice = (menu, itemName) => {
    const get = coffeeMenu.find((i) => itemName === i.name);
    return get ? get.price : 0;
  };

  const coffeeTotal=  quantity * getItemPrice(coffeeMenu, selectCoffee);
  const iceCTotal = quantity * getItemPrice(iceCreamMenu,selectIcecreame);

  const total =coffeeTotal+iceCTotal;
   
  

  return (
    <div
      style={{
        border: '2px solid #cfd8dc',
        padding: '10px',
        marginTop: '20px',
        width: '40%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#b0bec5',
      }}
    >
      <h3 style={{ color: '#263238' }}>
        <TableBarIcon></TableBarIcon> Table {tableNumber}
      </h3>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {/* select coffee */}

        <select
          class="form-select"
          aria-label="Default select example"
          style={{ width: '50%' }}
          value={selectCoffee}
          onChange={(e) => setSelectedCoffee(e.target.value)}
        >
          <option value="">Select Coffee</option>
          {coffeeMenu.map((coffee) => (
            <option
              key={coffee.name}
              value={coffee.name}
            >
              {coffee.name} - &#8377;{coffee.price}
            </option>
          ))}

        </select>
        <select
          className="form-select"
          aria-label="Default select example"
          style={{ width: '13%' }}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
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
                  <p>Total:{getItemPrice(coffeeMenu, selectCoffee)*quantity}</p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {/* select ice-creame */}

        <select
          className="form-select"
          aria-label="Default select example"
          style={{ width: '50%' }}
          value={selectIcecreame}
          onChange={(e) => setSelectIcecream(e.target.value)}
        >
          <option value="">Ice Creame</option>
          {iceCreamMenu.map((ic) => (
            <option
              value={ic.name}
              key={ic.name}
            >
              {ic.name} - &#8377;{ic.price}
            </option>
          ))}
        </select>
        <select
          className="form-select"
          aria-label="Default select example"
          style={{ width: '13%' }}
          value={icquantity}
          onChange={(e) => {
            seticQuantity(Number(e.target.value));
          }}
        >
          {/* <option selected>Qyt</option> */}
          {[1, 2, 3, 4, 5].map((no) => (
            <option
              value={no}
              key={no}
              selected
            >
              {no}
            </option>
          ))}
        </select>
      </div>

      {/* ice creame */}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        {/* select drink*/}

        <select
          className="form-select"
          aria-label="Default select example"
          style={{ width: '50%' }}
          value={drinkQuantity}
          onChange={selectedDrink((e)=> e.target.name)}
        >
          <option value="">Select Drink</option>
        {

        }
        </select>
        <p></p>
        <select
          class="form-select"
          aria-label="Default select example"
          style={{ width: '20%' }}
        >
          <option selected>Qyt</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <p>Total:{total}</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          gap: '10px',
          height: '30px',
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
        <p>Total:</p>
      </div>
    </div>
  );
};

export default TableCard;
