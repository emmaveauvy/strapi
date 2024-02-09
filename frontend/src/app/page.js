// src/pages/index.js
import React from 'react';
import CategoriesList from './views/listCategories';
import PinsList from './views/listPins';
import CreatePin from './views/createForm';

export default function Home() {
  return (
    <main>
      <CreatePin/>
      <CategoriesList />
      <PinsList />
    </main>
  );
}
