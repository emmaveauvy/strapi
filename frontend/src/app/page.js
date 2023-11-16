// src/pages/index.js
import React from 'react';
import CategoriesList from './views/listCategories';
import PinsList from './views/listPins';

export default function Home() {
  return (
    <main>
      <CategoriesList />
      <PinsList />
    </main>
  );
}
