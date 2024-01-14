import { useState } from "react";

// more complex update with spread oper 

function App() {
  const [greeting, setGreeting ] = useState(
    { greet: "Hello",
     place: "World"
   });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    setGreeting(prevState => {
      return { ...prevState, place: "World wide Web" }
    });
    //greeting.greet = "Hello, World wide Web";
    //setGreeting(greeting);
  }
  return (
    <div>
    <h1>{greeting.greet}, {greeting.place}</h1>
    <button onClick={updateGreeting}>Update Greeting</button>

    </div>
  
  );
}

export default App;
