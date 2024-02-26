// listPins.js
/*
import React, { useState, useEffect } from 'react';
import { getPins } from "../components/Pins.js";

export default function PinsList({ selectedCategory }) {
  const [pins, setPins] = useState([]);

  useEffect(() => {
    async function fetchPins() {
      try {
        let pinsData = await getPins();
        if (selectedCategory) {
          pinsData = pinsData.filter(pin => pin.category === selectedCategory);
        }
        setPins(pinsData);
      } catch (error) {
        console.error("Error fetching pins:", error);
        // Gérer les erreurs de récupération des épingles
      }
    }
    fetchPins();
  }, [selectedCategory]); // Effect will re-run whenever selectedCategory changes

  return (
    <>
      <h1>Épingles</h1>
      {Array.isArray(pins) && pins.length > 0 ? (
        pins.map((pin) => (
          <div key={pin.id} className="card my-5">
            <h3>{pin.attributes.title}</h3>
            <p>{pin.attributes.description}</p>
          </div>
        ))
      ) : (
        <p>Aucune épingle à afficher</p>
      )}
    </>
  );
}
 <Image src={`http://127.0.0.1:1337${pin.attributes.media.data[0].attributes.url}`}  width={pin.attributes.media.data[0].attributes.formats.medium.width} height={pin.attributes.media.data[0].attributes.formats.medium.height}/>
*/
// PinsList.js
// PinsList.js
/*
-------------
     V3
-------------

import Image from 'next/image'// PinsList.js// PinsList.js
import React, { useState, useEffect } from 'react';
import { getPins } from "../components/Pins";
//import {CategoriesList} from "./CategoryList"
import CategoryList from './CategoryList';

export default function PinsList({ pins }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredPins = selectedCategory ? pins.filter(pin => pin.categories.some(category => category.id === selectedCategory)) : pins;

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

 
  return (
    <>
      <CategoryList onSelectCategory={handleSelectCategory} />
      <button onClick={() => setSelectedCategory(null)}>Supprimer les filtres</button>
      <h1>Pins</h1>
      {filteredPins && filteredPins.map(pin => (
        <div key={pin.id} className="card my-5">
          <h3>{pin.attributes.title}</h3>
          <p>{pin.attributes.body}</p>
        </div>
      ))}
    </>
  );
}*/
/*
// Importez useState et useEffect depuis React
import React, { useState, useEffect } from 'react';
// Importez la fonction getPins depuis votre composant Pins
import { getPins } from "../components/Pins";
import CategoryList from './CategoryList';


export default function PinsList() {

  const [pins, setPins] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredPins = selectedCategory ? pins.filter(pin => pin.attributes.categories.data.some(category => category.id === selectedCategory)) : pins;

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };


  useEffect(() => {
    const fetchPins = async () => {
      try {
        const pinsData = await getPins();
        setPins(pinsData.data);
      } catch (error) {
        console.error('Error fetching pins:', error);
      }
    };


    fetchPins();
  }, []); 

  return (
    <div>
      <CategoryList onSelectCategory={handleSelectCategory} />
      <button onClick={() => setSelectedCategory(null)}>Supprimer les filtres</button>
      <h1>Pins List</h1>
      {filteredPins && filteredPins.map(pin => (
      <ul>
        {pins.map(pin => (
          <li key={pin.id}>
            <h3>{pin.attributes.title}</h3>
            <p>{pin.attributes.body}</p>
            {console.log(pin)
            // <img src={`http://127.0.0.1:1337${pin.attributes.media.data[0].attributes.url}`}  alt="Pin image"/>

            }
           
            <ul>
              {pin.attributes.categories.data && pin.attributes.categories.data.map(category => (
                <li key={category.id}>{category.attributes.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      ))}
    </div>
  );
}
*/
/*
import React, { useState, useEffect } from 'react';
import { getPins, getPinsImg } from "../components/Pins";
import CategoryList from './CategoryList';

export default function PinsList() {
  const [pins, setPins] = useState([]);
  const [pinsImg, setPinsImg] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchPins = async () => {
      try {
        const pinsWithCategories = await getPins(); // Récupère les épingles avec les catégories
        const pinsWithImages = await getPinsImg(); // Récupère les épingles avec les images
       // console.log("Pins with images:", pinsWithImages);
  {console.log("Image URLs:", pinsWithImages.map(pin => pin.attributes.media.data[0].attributes.url))}


        setPins(pinsWithCategories.data); // Vous pouvez choisir l'un des deux, ou fusionner les données selon vos besoins
        setPinsImg(pinsWithImages.data)
      } catch (error) {
        console.error('Error fetching pins:', error);
      }
    };
    fetchPins();
   
  }, []); 

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };


  const filteredPins = selectedCategory ? pins.filter(pin => pin.attributes.categories.data.some(category => category.id === selectedCategory)) : pins;

  const filteredPinsImg = selectedCategory ? pinsImg.filter(pinImg => pinImg.attributes.categories.data.some(category => category.id === selectedCategory)) : pins;
  

  return (
    <div>
      <CategoryList onSelectCategory={handleSelectCategory} />
      <button onClick={() => setSelectedCategory(null)}>Supprimer les filtres</button>
      <h1>Pins List</h1>
      {filteredPins.length === 0 ? (
        <p>Aucun pin disponible pour cette catégorie</p>
      ) : (
        <>
   -
      <ul>
        {filteredPins.map(pin => (
          <li key={pin.id}>
            <h3>{pin.attributes.title}</h3>
            <p>{pin.attributes.body}</p>
         

            {filteredPinsImg.map(pinImg=>(

<p>key={pinImg.id}

<img src={`http://127.0.0.1:1337${pinImg.attributes.media.data[0].attributes.url}`}  alt="Pin image"/>
</p>
            ))}
           
     
            <h4>Catégories </h4>
            <ul>
              {pin.attributes.categories.data.map(category => (
                <li className="pinCategory" key={category.id}>{category.attributes.name}</li>
              ))}
            </ul>
          </li>
       ))}
       </ul>
       </>
      )}
   </div>
 );
}

=>data=> id=>attributes=>media=>data=>0=>attributes=>url

*/

/*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pinsData = await getPins();
        const pinsImgData = await getPinsImg();
        console.log(pinsData);
        if (pinsImgData.data) {
          // La variable pinsImgData.data est définie, vous pouvez donc appeler map dessus
          const images = pinsImgData.data.map(pin => {
            // Votre logique pour récupérer les images
          });
        } else {
          // La variable pinsImgData.data est undefined, il n'y a donc pas de données à mapper
          console.error("Aucune donnée disponible dans pinsImgData.data");
        }
        
        
        // Merge pins data with images
        const mergedPins = pinsData.data.map(pin => {
          
          //boucler sur le 1er tableau data pour avoir toutes les images
          const image = "http://127.0.0.1:1337"+pinsImgData.data[2].attributes.media.data[0].attributes.url;
          console.log(image);
          return {
            ...pin,
            image: image ? image.attributes.url : null
          };
        });

        setPins(mergedPins);
      } catch (error) {
        console.error('Error fetching pins:', error);
      }
    };

    fetchData();
  }, []);
*/

import React, { useState, useEffect } from 'react';
import { getPins, getPinsImg } from "../components/Pins";
import CategoryList from './CategoryList';
import PinPopup from './PinPopUp';


export default function PinsList() {
  const [pins, setPins] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPin, setSelectedPin] = useState(null);

useEffect(() => {
  const fetchPins = async () => {
    try {
      const pinsData = await getPins();
      const pinsImgData = await getPinsImg();

      // Vérifiez si les deux ont des données avant de procéder
      if (pinsData.data && pinsImgData.data) {
        // Mappez chaque pin dans pinsData
        const mergedPins = pinsData.data.map(pin => {
          const idImg=pin.id-1;
          console.log(idImg);
          // Filtrer les données d'image correspondant à l'ID du pin actuel
          const pinImageData = pinsImgData.data.filter(pinImg => pinImg.id === pin.id);

          // Si des données d'image sont trouvées pour le pin actuel
          if (pinImageData.length > 0) {
            // Récupérez toutes les URL des images associées à ce pin
            const imageUrls = pinImageData.map(pinImgData => {
              if (pinImgData.attributes.media.data && pinImgData.attributes.media.data.length > 0) {
                console.log(`http://127.0.0.1:1337${pinImgData.attributes.media.data[0].attributes.url}`);
                return `http://127.0.0.1:1337${pinImgData.attributes.media.data[0].attributes.url}`;
              } else {
                return null; // Ou une valeur par défaut si aucune URL n'est trouvée
              }
            });
  
            // Retournez le pin avec les URLs des images ajoutées
            return {
              ...pin,
              images: imageUrls
            };
          } else {
            // Si aucune donnée d'image n'est trouvée, retournez simplement le pin
            return pin;
          }
        });

        // Mettez à jour l'état avec les données fusionnées
        setPins(mergedPins);
      } else {
        console.error("Les données de pinsData ou pinsImgData sont manquantes.");
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des épingles:', error);
    }
  };

  fetchPins();
}, []);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handlePinClick = (pin) => {
    setSelectedPin(pin);
  };

  const handleClosePopup = () => {
    setSelectedPin(null);
  };

  const filteredPins = selectedCategory ? pins.filter(pin => pin.attributes.categories.data.some(category => category.id === selectedCategory)) : pins;

  return (
    <div>
      <CategoryList onSelectCategory={handleSelectCategory} />
    <div className='ctn-btn'>
      <button className="btn-purple" onClick={() => setSelectedCategory(null)}>Supprimer les filtres</button>
      </div>

      <div className="ctn-pin">
      <h1>Pins List</h1>

      <ul className="pins">
  {filteredPins.length > 0 ? (
    filteredPins.map((pin) => (
      <li key={pin.id} className='pin' onClick={() => handlePinClick(pin)}>
        <h3>{pin.attributes.title}</h3>
        {pin.images && pin.images.map((imageUrl) => (
          <img key={imageUrl} src={imageUrl} alt={pin.attributes.title} />
        ))}
        <ul>
          {pin.attributes.categories.data.map((category) => (
            <li className="pinCategory" key={category.id}>{category.attributes.name}</li>
          ))}
        </ul>
      </li>
    ))
  ) : (
    <p className='no-pin'>Aucun pin ne correspond à la catégorie sélectionnée.</p>
  )}

</ul>
{selectedPin && <PinPopup pin={selectedPin} onClose={handleClosePopup} />}
</div>
    </div>
  );
}
