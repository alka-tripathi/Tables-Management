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
  };

  const handleDelete = (tablenum) => {
    setActiveTable(activeTables.filter((num) => num !== tablenum));
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Header */}
      <h2
        style={{
          textAlign: 'center',
          padding: '10px 0',
          color: '#144272',
          fontSize: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <GradeIcon style={{ fontSize: '40px' }} />
        CHOOSE YOUR TABLES
      </h2>

      {/* Table Buttons */}
      <div
        className="table-buttons"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '30px',
        }}
      >
        {tableNumber.map((num) => {
          const isActive = activeTables.includes(num);
          return (
            <button
              key={num}
              onClick={() => handleTableClick(num)}
              style={{
                padding: '12px 18px',
                fontSize: '1rem',
                borderRadius: '8px',
                border: '1px solid #144272',
                background: isActive ? '#144272' : 'white',
                color: isActive ? 'white' : '#144272',
                cursor: 'pointer',
                minWidth: '90px',
                transition: 'all 0.2s ease',
              }}
            >
              Table {num}
            </button>
          );
        })}
      </div>

      <hr style={{ margin: '30px 0', borderColor: '#ccc' }} />

      {/* Selected Tables */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {activeTables.map((num) => (
          <TableCard
            key={num}
            tableNumber={num}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Responsive Styling */}
      <style>{`
        @media (max-width: 992px) {
          .table-buttons button {
            padding: 10px 14px;
            font-size: 0.9rem;
            min-width: 75px;
          }
        }

        @media (max-width: 600px) {
          h2 {
            font-size: 1.5rem !important;
          }
          .table-buttons button {
            padding: 8px 12px;
            font-size: 0.85rem;
            min-width: 65px;
          }
        }
      `}</style>
    </div>
  );
}

export default TableButton;
