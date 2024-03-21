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


/*

"use client"
import { useState, useEffect } from 'react';
import { getCategories } from "./components/Categories.js";
import PinsList from './views/listPins.js';
import CategoryList from './views/CategoryList';
import {getPins} from './components/Pins.js';
import { CreatePin } from './views/createForm.js';
import AuthForm from './components/AuthForm';
import AuthProvider from './components/AuthProvider.js';
 
export default function Home() {
  const [pins, setPins] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
       <div>
      {!isAuthenticated ? (
        <AuthForm setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <p>User is authenticated!</p>
      )
      }
      
      <AuthProvider/>
    </div>
              <CreatePin/>


      <PinsList pins={pins} />
    </main>
  );
}*/
/*

VERSION QUI FONCTIONNE SANS AUTHENTIFICATION
"use client"
import React, { useState, useEffect } from 'react';
import { getPins } from './components/Pins.js';
import PinsList from './views/listPins.js';
import { CreatePin } from './views/createForm.js';
//import AuthForm from './components/AuthForm';
//import SignUpForm from './components/SignUpForm';
import AuthProvider from './components/AuthProvider.js';
import FormAccount from './views/Form.js';


export default function Home() {
  const [pins, setPins] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function loadCSS(filename) {
    var file = document.createElement('link');
    file.setAttribute('rel', 'stylesheet');
    file.setAttribute('type', 'text/css');
    file.setAttribute('href', filename);
    document.head.appendChild(file);
  }
  
  loadCSS('globals.css');
  
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
/*
  // Fonction pour gérer la connexion de l'utilisateur
  const handleLogin = (userData) => {
    // Logique de connexion ici
    // userData contient les données soumises par le formulaire de connexion
    // Si la connexion réussit, mettez à jour isAuthenticated à true
    setIsAuthenticated(true);
    setErrorMessage(""); // Efface les éventuels messages d'erreur précédents
  };

  // Fonction pour gérer la création de compte
  const handleSignUp = (userData) => {
    // Logique de création de compte ici
    // userData contient les données soumises par le formulaire de création de compte
    // Si la création de compte réussit, vous pouvez également connecter automatiquement l'utilisateur
    setIsAuthenticated(true);
    setErrorMessage(""); // Efface les éventuels messages d'erreur précédents
  };

  // Fonction pour gérer les erreurs d'authentification
  const handleAuthError = (error) => {
    // Mettez à jour l'état errorMessage avec le message d'erreur approprié
    setErrorMessage(error);
  };
*//*
  return (
    <main>
      <div className='form-container'>
        {/* Affichage du formulaire de connexion ou du message d'authentification 
        {!isAuthenticated ? (
          <AuthForm onLogin={handleLogin} onAuthError={handleAuthError} />
        ) : (
          <p>User is authenticated!</p>
        )}
        }
        {/ Affichage du formulaire de création de compte
        {!isAuthenticated && (
          <SignUpForm onSignUp={handleSignUp} onAuthError={handleAuthError} />
        )}
 }
        {Affichage du message d'erreur s'il y a eu un problème d'authentification 
        {errorMessage && <p>{errorMessage}</p>}
        
       }
      </div>

      <FormAccount/>
      <CreatePin />
      <PinsList pins={pins} />
    </main>
  );
}*/
/*
"use client"
import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import AuthProvider from "./components/AuthProvider/Authprovider";
import AppHeader from "./components/AppHeader/AppHeader"
import { BrowserRouter as Router } from "react-router-dom";

export default function Home() {
  return(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <AppHeader />
      </Router>
    </AuthProvider>
  </React.StrictMode>

  )
}*/
/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
);*/

"use client"
import { BrowserRouter } from 'react-router-dom';
import { Layout } from "antd";
import { getPins } from './components/Pins.js';
import PinsList from './views/listPins.js';
import { CreatePin } from './views/createForm.js';
import React, { useState, useEffect } from 'react';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';


export default function App() {
  const [pins, setPins] = useState([]);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const handleSignInClick = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  
  function loadCSS(filename) {
    var file = document.createElement('link');
    file.setAttribute('rel', 'stylesheet');
    file.setAttribute('type', 'text/css');
    file.setAttribute('href', filename);
    document.head.appendChild(file);
  }
  
  loadCSS('globals.css');
  
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
    <BrowserRouter> 
      <Layout>

      <div className="signForm">
              <div>
                {showSignUp ? (
                  <SignUp />
                ) : showSignIn ? (
                  <SignIn />
                ) : (
                  <div className="btn-sign">
                  <button className="btn-purple" type="primary" onClick={handleSignUpClick}>
                    New to BeautySphere ? Sign Up
                  </button>
                  </div>
                )}
              </div>
              {showSignUp ? (
 <div className="btn-sign">
                <button className="btn-purple" type="link" onClick={handleSignInClick}>
                  Already a part of BeautySphere ? Sign In
                </button>
                </div>
              ) : null}
               {showSignIn ? (
                 <div className="btn-sign">
                <button className="btn-purple" type="link" onClick={handleSignUpClick}>
                  New to BeautySphere ? Sign Up
                 
                </button>
                </div>
              ) : null}
            </div>
        <CreatePin />

        <PinsList pins={pins} />

      </Layout>
    </BrowserRouter> 
  );
};
