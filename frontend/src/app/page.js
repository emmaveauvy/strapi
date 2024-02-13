// src/pages/index.js
/*"use client"
// Home.js
import React, { useState } from 'react';
//import CategoriesList from './views/CategoryList';
import PinsList from './views/listPins';

export default function Home() {
  /*const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  return (
    <main>
      <PinsList />

  
    </main>
  );
}*/

/*
"use client"
// pages/Home.js
import React from 'react';
import CategoriesList from './views/CategoryList';
import PinsList from './views/listPins';

export default function Home() {
  return (
    <main>    <CategoriesList onCategorySelect={handleCategorySelect} />
      <PinsList selectedCategory={selectedCategory} />

      <CategoriesList />
      <PinsList />
    </main>
  );
}
*/

/* 
-------------
     V3
-------------

"use client"
import { useState, useEffect } from 'react';
import { getCategories } from "./components/Categories.js";
import PinsList from './views/listPins.js';
import CategoryList from './views/CategoryList';
import {getPins} from './components/Pins.js';
export default function Home() {
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

  return (
    <main>
      <PinsList pins={pins} />
    </main>
  );
}*/


"use client"
import { useState, useEffect } from 'react';
import { getCategories } from "./components/Categories.js";
import PinsList from './views/listPins.js';
import CategoryList from './views/CategoryList';
import {getPins} from './components/Pins.js';
export default function Home() {
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

  return (
    <main>
      <PinsList pins={pins} />
    </main>
  );
}