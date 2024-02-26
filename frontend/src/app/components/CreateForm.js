
/*
import React, { useState } from 'react';
import axios from 'axios';


export async function CreatePostForm() {


  const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [media, setMedia] = useState('')
    const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, media: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {

      const pin ={
        title, body, media}
      
        const res = await fetch('http://localhost:1337/api/pins', {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(pin)
      })

      const response = await axios.post("http://localhost:1337/api/pins", formDataToSend);
      console.log("Post created successfully:", res.data);
      setSuccessMessage('Post créé avec succès !');
    } catch (error) {
      console.error("Error creating post: ", error);
      setError('Une erreur s\'est produite lors de la création du post. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titre:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="body">Contenu:</label>
        <textarea id="body" name="body" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
      </div>
      <div>
        <label htmlFor="media">Média:</label>
        <input type="file" id="media" name="media" value={media} onChange={(e) => setMedia(e.target.value)} />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'En cours...' : 'Créer le post'}
      </button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};


import React, { useState } from 'react';
import axios from 'axios';

async function submitPost(formData) {
  try {
    const response = await axios.post("http://localhost:1337/api/pins");
    console.log("Post created successfully:", response.data);
    return 'Post créé avec succès !';
  } catch (error) {
    console.error("Error creating post: ", error);
    throw new Error('Une erreur s\'est produite lors de la création du post. Veuillez réessayer.');
  }
}

export function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [media, setMedia] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = { title, body, media };
      const message = await submitPost(formData);
      setSuccessMessage(message);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titre:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="body">Contenu:</label>
        <textarea id="body" name="body" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
      </div>
      <div>
        <label htmlFor="media">Média:</label>
        <input type="file" id="media" name="media" value={media} onChange={(e) => setMedia(e.target.value)} />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'En cours...' : 'Créer le post'}
      </button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};
*/

/*
import React, { useState } from 'react';
import axios from 'axios';

export function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const postData = {
        data: {
          title: title,
          body: body
        }
      };

      const response = await axios.post("http://localhost:1337/api/pins", postData);

      console.log("Post created successfully:", response.data);
      setSuccessMessage('Post créé avec succès !');
    } catch (error) {
      console.error("Error creating post: ", error);
      setError('Une erreur s\'est produite lors de la création du post. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titre:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="body">Contenu:</label>
        <textarea id="body" name="body" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'En cours...' : 'Créer le post'}
      </button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};
*/import React, { useState } from 'react';
import axios from 'axios';

export function CreatePostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
          const formDataImg = new FormData();
          formDataImg.append('files', image);
          const uploadImageResponse = await axios.post('http://localhost:1337/api/upload', formDataImg, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
  
         
  
            // Récupérez l'URL de l'image téléchargée
            const imageUrl = uploadImageResponse.data[0].url;
            console.log("imagUrl",imageUrl);
      // Créez le post avec les données textuelles
      const formData = {
        data: {
          title: title,
          body: body,
          media: {
            data: [
              {
                attributes: {
                  url: "/uploads/IMG_9840_52751f47c1.jpeg"
                }
              }
            ]
          }
        }
      };
      
      const response = await axios.post('http://localhost:1337/api/pins', formData);
      console.log(response);
  
      /*
      // Vérifiez si la création du post a réussi
      if (response.status === 200 || response.status === 201) {
        console.log("Post created successfully:", response.data);
  
        // Si une image est sélectionnée, téléchargez-la et associez-la au post
        if (image) {
          // Téléchargez l'image
          const formDataImg = new FormData();
          formDataImg.append('files', image);
          const uploadImageResponse = await axios.post('http://localhost:1337/api/upload', formDataImg, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
  
          // Vérifiez si le téléchargement de l'image a réussi
          if (uploadImageResponse.status === 200 || uploadImageResponse.status === 201) {
            console.log("Image uploaded successfully:", uploadImageResponse.data);
  
            // Récupérez l'URL de l'image téléchargée
            const imageUrl = uploadImageResponse.data[0].url;
            // Vérifiez si les données de média sont null


// Envoyez la requête PUT pour mettre à jour le média


  
            // Associez l'URL de l'image au post en utilisant une requête PUT
            const newData = {
              media: {
                data: [
                  {
                    attributes: {
                      url: imageUrl
                    }
                  }
                ]
              }
            };

            //renvoie null, du coup j'arrive pas à modifier l'url car elle existe pas.
            console.log(response.data.data.attributes.media.data);

            if (response.data.data.attributes.media.data === null) {
              // Utilisez l'image par défaut
              const defaultImageUrl = "http://localhost:1337/uploads/IMG_9840_52751f47c1.jpeg";
              newData.media.data[0].attributes.url = defaultImageUrl;
            }
            
            //ça c'est ok, je recupère bien l'id du pin
            //console.log(`http://localhost:1337/api/pins/${response.data.data.id}`);
            const updatePostResponse = await axios.put(`http://localhost:1337/api/pins/${response.data.data.id}?populate=*`, newData);
            console.log("Post updated with image URL:", updatePostResponse.data);
          }
        }
  
        setSuccessMessage('Post créé avec succès !');
      }*/
    } catch (error) {
      console.error("Error creating post: ", error);
      setError('Une erreur s\'est produite lors de la création du post. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
      
  };
  



  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Titre:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="body">Contenu:</label>
        <textarea id="body" name="body" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <div className="ctn-btn">
      <button className="btn-purple" type="submit" disabled={isLoading}>
        {isLoading ? 'En cours...' : 'Créer le post'}
      </button>
      </div>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};
