import { React, useState, useEffect, createContext } from 'react';

//step 1:create it
export const IcecreamContext = createContext();

//provider
export const IceCreamProvider = ({ children }) => {
  const [icecream, setIcecream] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/icecreamdata');
        const data = await res.json();
        if (data.success) {
          setIcecream(data.icecreamdata);
        }
      } catch (err) {
        console.log(
          'Error in fetching in context of Icecreame API:' + err.message
        );
      }
    };
    fetchdata();
  }, []);

  return (
    <IcecreamContext.Provider value={{ icecream }}>
      {children}
    </IcecreamContext.Provider>
  );
};
