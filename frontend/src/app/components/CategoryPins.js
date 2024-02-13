// CategoryPins.js
/*
-------------
     V3
-------------

import React from 'react';
import { useState, useEffect } from 'react';
import { getPins } from './Pins';

export default function CategoryPins({ categoryId }) {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const fetchPins = async () => {
      try {
        const allPins = await getPins();
        setPins(allPins.data);
      } catch (error) {
        console.error('Error fetching pins:', error);
      }
    };

    fetchPins();
  }, []);

  const filteredPins = pins.filter(pin => pin.category === categoryId);

  return (
    <>
      <h2>Pins de cette catégorie</h2>
      {filteredPins.map(pin => (
        <div key={pin.id} className="card my-5">
          <h3>{pin.attributes.title}</h3>
          <p>{pin.attributes.body}</p>
         //image à ajouter
        </div>
      ))}
    </>
  );
}
*/