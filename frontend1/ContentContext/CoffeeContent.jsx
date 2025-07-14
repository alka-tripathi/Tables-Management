import { React, useState, useEffect, createContext } from 'react';

export const CoffeeContext = createContext();

export const CoffeeProvider = ({ children }) => {
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/coffeedata');
        const data = await res.json();
        if (data.success) {
          setCoffee(data.coffeedata);
        }
      } catch (err) {
        console.log('Error fetching drinks in context API:' + err.message);
      }
    };
    fetchdata();
  }, []);

  return (
    <CoffeeContext.Provider value={{ coffee }}>
      {children}
    </CoffeeContext.Provider>
  );
};
