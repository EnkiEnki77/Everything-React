import React from 'react'

const App = () => {
    // This funny tag syntax is neither a string nor HTML, it is called JSX. JSX is a syntax extension of JS and 
    // is the React recommended way of describing the UI. It may remind you of a template language, but it comes
    // with all of the power and capabilities of JS. 
    // JSX produces React elemnts, React elements are rendered to the DOM in order to describe what the UI should 
    // look like. 
    // React embraces the fact render logic is inherently coupled with other UI logic, such as how events are 
    // handled, how state changes over time, etc. Instead of arifically seperating ui from logic, React seperates
    // concerns by loosely coupling them together into small units called components. 
    // JSX isnt required, but its useful visually, and allows React to give more helpful warning and error messages. 
    const element = <h1>Hello World</h1>

    // You can embed any valid JS expression into JSX, to be rendered as a string in the DOM, you do so by wrapping
    // the expression in curly braces.Below are a few valid examples.

    //The value of the variable name is embedded into the JSX
    const name = 'Enki'
    const nameElement = <h1>Hi my name is {name}</h1>

    // The value returned form the call to formatName is embedded into the JSX
    function formatName(name) {
        return name.firstName + name.lastName
    }

    const user = {
        firstName: 'Enki',
        lastName: 'Layman'
    }

    const nameElementFunction = <h1>Hi, my name is {formatName(user)}</h1>

  return (
    <div>
        {nameElement}
        {nameElementFunction}
    </div>
  )
}

export default App