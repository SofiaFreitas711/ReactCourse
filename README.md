# 👩🏻‍💻 React Course

## ℹ️ About this repository

This repository documents my learning journey with React through a Udemy course.

It contains small projects, exercises, and learning notes created while studying core React concepts.  
The repository is continuously updated as I progress through the course.

## 📖 What I've learned so far

- Creating and using functional components
- Passing data via props
- Managing component state with `useState`
- Handling events (`onClick`, `onChange`)
- Conditional rendering
- Rendering lists using `map()`
- Basic project setup using Vite


## 💻 Code environment

For this course I used *VSCode* with *Vite* as my setup!
For that I did:
- open terminal
- npm create vite@latest my-app
- select 'React'
- select 'JavaScript'

To start the project:
- npm run dev

## 📋 Learning Notes

### What is React? 

React is a JavaScript library for building user interfaces.

It enables smooth UI updates and dynamic content rendering without reloading the entire page.

#### Why React?

In React, we define the target UI state, and React determines the most efficient way to update the UI to match that state.

### About React syntax

React code does not run directly in the browser.
JSX (JavaScript Syntax Extension) is used to describe the UI structure and is transformed into JavaScript during the build process.

- {} in JSX allows embedding dynamic JavaScript expressions
- JSX is not a default JavaScript feature

### Component Function rules
1. Function name must start with an uppercase
2. Multi-word should be written in PascalCase

Images should be used with import, for a better build and deployment

Instead of "<CoreConcept 
              title={CORE_CONCEPTS[1].title} 
              description={CORE_CONCEPTS[1].description}
              img={CORE_CONCEPTS[1].image} />", we can use "<CoreConcept {...CORE_CONCEPTS[1]}>" where ... takes all the object properties and turns them into the values for the attributes.

### Styling Notes

The CSS from each component should be on the components folder and imported into each component JSX file. *Styles will not be restricted to the component!*

### Props & Children

props.children (or {children}) is a property of React, so it can use the text between tags of component

### Event Handling

()=> nameOfTheFunction() to pass params to the function - nameOfTheFunction. *This will not execute the function when the page is loaded*

### State & Re-rendering
React does not automatically track UI changes. State is used to tell React when to re-render.

#### React Hooks:
- Functions imported with use are React Hooks
- Hooks can only be used inside components or other hooks
- Hooks must be called at *top level* of the component

#### Conditional Rendering

When using states, we can want to present something before the click, for that, we use conditional rendering, for example:  {!selectedTopic && (<p>Please select a topic</p>)} or {!selectedTopic? <p>Please select a topic</p>:null} or store the paragraph onto a variable and call it and use an if to update.

*But what's this?* If there isn't a selected topic, it will show the paragraph, otherwise, it will do nothing or show an alternative instead of null.

#### Rendering Lists

To output dynamically components based on an array we must use the map function, on the array that has the data. Example: {CORE_CONCEPTS.map((conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem}/>))}