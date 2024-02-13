
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
      
      const formData = {
        data: {
          title: title,
          body: body
        }
      };
      
      const formDataImg = new FormData();
      if (image) {
        formDataImg.append('files', image);
      }

      // Envoi de la requête POST pour créer le post avec les données textuelles
      const response = await axios.post('http://localhost:1337/api/pins', formData);

      let res; // Déclaration de res à ce niveau

      // Envoi de la requête POST pour télécharger l'image
      if (image) {
        res = await axios.post('http://localhost:1337/api/upload', formDataImg, {
          headers: {
            'Content-Type': 'multipart/form-data' // Indique que le contenu est de type FormData
          }
        });
      }

      console.log("Post created successfully:", response.data);
      if (res) { // Vérifie si res est défini avant de l'utiliser
        
        console.log("Image uploaded successfully:", res.data);
      }
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
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'En cours...' : 'Créer le post'}
      </button>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};
