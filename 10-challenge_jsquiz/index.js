/* Challenge #1 - Complete the function below. Given a name, return "Good <timeOfDay>, <name!>" depending on the current time of day.

4  am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm, timeOfDay = "afternoon"
5  pm - 7:59 pm, timeOfDay = "evening"
8  pm - 3:59 am, timeOfDay = "night"

Result:  "Good after, Jane!"

const date = new Date()
const hours = date.getHours()
 */

function greeting(name){
    const date = new Date();
    hours = date.getHours();

    let timeOfDay;
    if(hours >= 4 && hours < 12 ){
        timeOfDay = "morning"
    }else if(hours >=12 && hours < 17) {
        timeOfDay = "afternoon"
    }else if(hours >= 17 && hours < 20){
        timeOfDay = "evening"
    }else{
        timeOfDay = "night"
    }

    return `Good ${timeOfDay}, ${name}!`
}

console.log(greeting("Bob"))

/*
HOW WOULD YOU DESCRIBE THE CONCEPT OF A "STATE"?
STATE -A way for React to remember saved values from within a component.  This is similar to declaring varialbes from within a coponent, with a few added bonuses (which we wil get to later.)

WHEN WOULD YOU WANT TO USE PROPS INSTEAD OF STATE?
Anytime you want to pass data into a componenet so that component can determine what will get displayed on the screen.

WHEN WOULD YOU WANT TO USE STATE INSTEAD OF PROPS?
Anytime you want a component to MAINTAIN some values from within the component.  (And REMEMBER those values even when React re-renders the component.)

WHAT DOES "IMMUTABLE" MEAN? ARE PROPS IMMUTABLE? IS STATE IMMUTABLE?
Unchanging. Props are immutable and State is mutable.

NOTE:  If you ever need the old value of state to help you determine the new value of stea, you should pass a CALLBACK function to your state setter function instead of using state directly.  This callback function will receive the old value of state as its parameter, which you can then use to determine your new value of state.

Example:
    function add(){
        setCount(prevCount => prevCount + 1)
    }

* */