# SETTING / GETTING LOCAL STORAGE
## Example:
export default function App() {
  * Getting Notes from Local Storage
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem ("notes")) || []);
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ''
  );

  * Setting Notes to Local Storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

# LAZY STATE INITIALIZATION
* State should not reach into local Storage every single re-render of the App Componennt.

* The argument passes to **useState** is the **initialState**, the value which initialized your state in the *first* render and gets *disregarded* in subsequent renders.  As example below:

* Example:
* const Component = ( ) =>{
    const [state, setState] = useState(getInitialHundredItems())
}

Imagine this being called on each render needlessly **(remember even though the initial value is disregarded upon next renders, the function which initializes it still gets called).**

**For use cases** like those of just provide a value you can pass a **function () => func()** which turns the initial state, this function will only be executed once *(initial render)* and not on each render like example above will.

Or function like this:
* const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});

* Example:
* const Component = ( ) =>{
    const [state, setState] = useState(getInitialHundredItems)
}

*   const [notes, setNotes] = useState (() =>
    JSON.parse(localStorage.getItem ("notes")) || []);


## How to perform Lazy Initialization of the State?
With the useState hook, you can pass a function as an argument to initialize the state lazily.
* Example:
const [counter, setCounter] = useState(() => Math.floor(Math.random() * 16));

* The example initializes the **counter** state with a random number

## How to get the Previous State Data and Use it?
The **useState** hook returns a function to update the state like using setCounter(value) method.
* Example: const incrBy3 = () => {
    setCounter((prev) => prev + 3);
};

Passing a callback function to the setCounter() method gives us the previous value to use.

## Adding Note Summary Titles
## Modifying Notes to the Top of the List
* Pseudo Code
  - Create a new empty array
  - Loop over the original array
    - if the id matches
      - put the updataed note at the beginning of the new array
    - else
      - push the old note to the end of the new array
  - Return the new array

## DELETING A NOTE
  - Create handleDelete function
  - Add parameters (event, which to delete)
  - call the second state(setNotes)
  - Take the oldNotes and from oldNotes filter the note and if the note.id is not equal to noteId, it will be removed
- In onClick() event it will be also with parameters like. . .
- onClick={(event) => props.handleDelete(event, note.id)}
  * Example:
  * function handleDelete(event, noteId) {
        event.stopPropagation()
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    }
