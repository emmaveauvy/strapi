import { getCategories } from "../components/Categories.js";

export default async function CategoriesList() {
  let cats = await getCategories();
  

  return (
    <>
    <h1>Catégories</h1>
    {cats && cats.data.map((cat) => (
        <div key={cat.id} className="card my-5">
          
    
            <h3>{cat.attributes.name} </h3>
           
           
      
        </div>
  ))}
  </>

  );
}