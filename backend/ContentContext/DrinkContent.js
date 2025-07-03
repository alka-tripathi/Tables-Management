import React, { useState, useEffect, createContext, useContext } from 'react';

// Step 1: Create context
export const DrinkContext = createContext();

// Step 2: Create provider
export const DrinkProvider = ({ children }) => {
  const [drink, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/restaurant');
        const data = await res.json();
        if (data.success) {
          setDrinks(data.drinkdata);
        }
      } catch (err) {
        console.log('Error fetching drinks in context API: ' + err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <DrinkContext.Provider value={{ drink }}>
      {children}
    </DrinkContext.Provider>
  );
};


