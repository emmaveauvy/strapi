/*
import React from 'react';
import {CategoriesList} from '../components/Categories'

export default function CategoryItem({ category, onClick, isSelected }) {
  return (
    <div className={`card my-5 ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <h3>{category.name}</h3>
    </div>
  );
}
*/
/*
-------------
     V3
-------------

import { getCategories } from "../components/Categories.js";

export default function CategoriesList({ categories, onSelectCategory }) {
  return (
    <>
      <h1>Catégories</h1>
      {categories.map(category => (
        <div key={category.id} className="card my-5">
          <h3 onClick={() => onSelectCategory(category.id)}>{category.attributes.name}</h3>
        </div>
      ))}
    </>
  );
}*/

/*
import { getCategories } from "../components/Categories.js";

export default function CategoriesList({ categories, onSelectCategory }) {
  return (
    <>
      <h1>Catégories</h1>
      <div className="categories">

      
        {categories.map(category => (
            <h3 key={category.id}  className="category" onClick={() => onSelectCategory(category.id)}>{category.attributes.name}</h3>
        ))}
      </div>
    </>
  );
}*/