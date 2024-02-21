
// CategoryList.js
/*
------
  v3
------
  import { getCategories } from "../components/Categories";
import React, { useState, useEffect } from 'react';


export default function CategoryList({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const allCategories = await getCategories();
        setCategories(allCategories.data);
      } catch (error) {
        console.error('Error while retrieving categories:', error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <h1>Categories</h1>
      {categories && categories.map(category => (
        <div key={category.id} className="card my-5" onClick={() => onSelectCategory(category.id)}>
          <h3>{category.attributes.name}</h3>
        </div>
      ))}
    </>
  );
}*/

import { getCategories } from "../components/Categories";
import React, { useState, useEffect } from 'react';


export default function CategoryList({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const allCategories = await getCategories();
        setCategories(allCategories.data);
      } catch (error) {
        console.error('Error while retrieving categories:', error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <h1>Categories</h1>
      <div className="categories">
      {categories && categories.map(category => (
        <div key={category.id} className="card my-5 category" onClick={() => onSelectCategory(category.id)}>
          <h3>{category.attributes.name}</h3>
        </div>
      ))}
      </div>
    </>
  );
}