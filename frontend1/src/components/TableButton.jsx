import React, { useState } from 'react';
import TableCard from './TableCard';
import GradeIcon from '@mui/icons-material/Grade';

function TableButton() {
  const tableNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [activeTables, setActiveTable] = useState([]);
  const handleTableClick = (tablenum) => {
    if (!activeTables.includes(tablenum)) {
      setActiveTable([...activeTables, tablenum]);
    }
    if (activeTables.includes(tablenum)) {
    }
  };
  const handleDelete = (tablenum) => {
    setActiveTable(activeTables.filter((num) => num !== tablenum));
  };
  return (
    <div>
      <h2
        style={{
          textAlign: 'center',
          paddingTop: '10px',
          paddingBottom: '10px',
          color: '#144272',
        }}
      >
        <GradeIcon
          style={{ fontSize: '40px', paddingRight: '10px' }}
        ></GradeIcon>
        CHOOSE YOUR TABLES
      </h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {tableNumber.map((num) => {
          const isActive = activeTables.includes(num);

          return (
            <button
              className="btn"
              key={num}
              onClick={() => handleTableClick(num)}
              style={{
                background: isActive ? '#144272' : 'white',
                color: isActive ? 'white' : 'black',
              }}
            >
              Table {num}
            </button>
          );
        })}
      </div>
      <hr />
      <div
        style={{
          display: 'flex',
          gap: '20px', // space between cards
          flexWrap: 'wrap', // allow wrapping to next line
          justifyContent: 'center', // optional: centers horizontally
        }}
      >
        {activeTables.map((num) => (
          <TableCard
            key={num}
            tableNumber={num}
            onDelete={handleDelete}
          ></TableCard>
        ))}
      </div>
    </div>
  );
}

export default TableButton;
