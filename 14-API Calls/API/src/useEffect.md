# MAKING API CALLS
  1. GET  the data (fetch) or another tools like AXIOS
  2. SAVE the data to STATE

useEffect Syntax - useEffect(Required Param, Optional Param)

## IMPORTANT

It must have always a 2nd param e.g. dependencies array [ ] and without the dependencies, render will run only once and only every re-render of the component.

## STARWARS API in RENDER AREA (SIDE EFFECT without useEffect Hook)
  NOTE: A useEffect must have a 2nd param.
  fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
  .then(data => setStarWarsData(data))
  .then(data => console.log(data))

## SIDE EFFECTS IN REACT
  Any react out of reach / anything that React isn't in charge of
      Examples:
      localStorage,
      API / database interactions
      Subscriptions (e.g. web sockets)
      Syncing 2 different internal states together

# API CALLS USING USEEFFECT HOOK
useEffect lets you synchronize a component with an external system
Connecting to An External System like API - To connect your component to some external system, call "useEffect" AT THE TOP LEVEL OF YOUR COMPONENT like in the RENDER AREA.

 In React Classes, we put SIDE EFFECTS into "componentDidMount" and "componentDidUpdate"

Why is "useEffect" called inside a component?
Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

## USEEFFECT QUIZ

  1.)  What is the "side effect" in React?  What are some examples?
  * Any code that affects an outside system.
  * Examples: local storage, API, websockets, 2 states to keep in sync

2.)  What is NOT a "side effect" in React? What are some examples?
 * Anything that React is in charge of.
 * Examples:  Maintaining state, keeping the UI in sync with the data, render DOM elements.

3.)  When does React run your useEffect function?  When does it NOT run the effect function?

 * As soon as the component loads (first render)
 * On every re-render of the component (assuming no dependecies array)
 * Will NOT run the effect when the values of the dependencies in the array stay the same between renders. Ex. useState[0], dependecies array [0]

 4.)   How would you explain what the "dependencies array" is?
 * Second parameter to the useEffect function
 * A way for React to know whether it should re-run the effect function.

 # USE EFFECT FOR FETCHING DATA

