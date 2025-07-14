import React, { useState } from 'react';
import TableCard from './TableCard';

function TableButton() {
  const tableNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
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
      <h2>Choose a table</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {tableNumber.map((num) => {
          const isActive = activeTables.includes(num);

          return (
            <button
              className="btn btn-outline-primary"
              key={num}
              onClick={() => handleTableClick(num)}
              style={{
                background: isActive ? '#1e90ff' : 'white',
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
