# State Sharing and Hooks Overview

## Prop Drilling
Passing shared data through multiple component layers that do not need the data directly, only to reach deeper components.

This often leads to:
- Harder maintenance
- Tightly coupled components
- Poor readability

## Context API
The Context API allows sharing data across components without passing props through multiple layers.

It is commonly used to:
- Avoid prop drilling
- Share global data (theme, user, language, auth state)

A context is created using `createContext`

### Context Provider
The Provider component is used to wrap parts of the app that need access to the shared data.
When using a Context Provider, *it is required to pass a value prop*. *All components inside the Provider can access this value.*

### Consuming Context Data

#### useContext Hook
useContext is a React hook used to consume context values inside functional components.

Rules of usage:
- Can only be used inside React function components or custom hooks
- Must be called at the top level of the component
- Cannot be used inside loops, conditions, or JSX (e.g. inside a div)

*Context.Consumer*
Context.Consumer is an alternative way to consume context values.

Characteristics:
- Uses the render props pattern
- Wraps JSX inside the return
- Uses a function to access the context value

This approach is older and less commonly used today
useContext is the recommended approach in modern React

When the value passed to a Context Provider changes:
- All components that consume that context will re-render
- Even if they only use part of the vale
This is why context should not be overused for fequently changing data

## Reducer

A reducer is a pure function that:
- Receives the current state
- Receives an actiion
- Returns a new state
Reducers are commonly used to manage complex state logic

### useReducer
Is a React Hook used as an alternative to useState
It returns an array with two elements:
- state: the current state
- dispatch: a function used to send actions to the reducer

## Context + useReducer
A common pattern is combining Context API with useReducer to manage global state