import { useState } from "react";

function App() {
  const [greeting, setGreeting ] = useState({ greet: "Hello World" });
  console.log(greeting, setGreeting);

  function updateGreeting() {
    greeting.greet = "Hello, World wide Web";
    setGreeting(greeting);
  }
  return (
    <div>
    <h1>{greeting.greet}</h1>
    <button onClick={updateGreeting}>Update Greeting</button>

    </div>
  
  );
}

export default App;
