import { useState } from "react";
import './App.css';
import chef from "./images/chef.png";

function Header({name}) {
  return (
      <header>
          <h1>{name}'s Restaurant</h1>
      </header>
  ); 
}

const items = [
"Vegetable Pulao",
"Idli and Sambar",
"Masala Dosa",
"Mushroom Biryani"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({dishes}) {
  return(
    <>
    <h2>Welcome to my restaurant!</h2>
    <main>
      <img id="chef" src={chef} alt="A smiling chef image"/>
      <h3>Menu</h3>
        <ul>
          {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>
          ))}
        </ul>
    </main>
    </>
  );
}

function App() {
  const [status, setStatus] = useState(true);
  return (
      <div>
          <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
          <button onClick={() => setStatus(!status)}>
            {status ? "Close": "Open"} Restaurant
          </button>
          <Header name="Kee" />
          <Main dishes={dishObjects} />
      </div>
  );
}

export default App;