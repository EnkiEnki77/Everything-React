// React is a js library for building UI. 

// React was designed for gradual adoption, meaning you can choose to only add bits and pieces
//to pre-existing codebases. Although you can also make apps that are entirely React based.

// The most common way to go about an entirely React based application is through a CLI called 
// create-react-app. It was made by Dan Abramov, a developer on the core React team. 

import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

//grabs root container created in index.html
const domContainer = document.querySelector('#root')
//utilizes root container as root entry point for React code.
const root = ReactDOM.createRoot(domContainer)
//renders App component into root container
root.render(<App/>)