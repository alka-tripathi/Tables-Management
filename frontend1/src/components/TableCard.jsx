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

const TableCard = ({ tableNumber, onDelete }) => {
  const [selectCoffee, setSelectedCoffee] = useState('');
  const [quantity, setQuantity] = useState(1);


  //total
  const getTotal=()=>{
    const cofee=coffeeMenu.
  }
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
          <option selected>Coffee</option>
          {/* <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option> */}
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
    <option key={no} value={no}>
      {no}
    </option>
  ))}
        </select>
      </div>

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
        >
          <option selected>Drinks</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
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
      </div>

      {/* ice creame */}

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
        >
          <option selected>Drinks</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
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
        <h4>Total:</h4>
      </div>
    </div>
  );
};

export default TableCard;
