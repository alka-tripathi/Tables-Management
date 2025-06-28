import React from 'react';
import TableButton from './TableButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const TableCard = ({ tableNumber, onDelete }) => {
  return (
    <div
      style={{ border: '1px solid #aaa', padding: '10px', marginTop: '20px' }}
    >
      <h3>Table {tableNumber}</h3>

      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => onDelete(tableNumber)}
      >
        Delete
      </Button>
      <Button color="secondary">Secondary</Button>

      <div style={{ display: 'flex' }}>
        {/* select coffee */}
    

        <select
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Drinks</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Quantity</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div style={{ display: 'flex' }}>
        {/* select coffee */}
    
        <select
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Select Coffee</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <select
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>Quantity</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      {/* ice creame */}
    </div>
  );
};

export default TableCard;
