import { useEffect , useReducer } from "react";
import './App.css';
import chef from "./images/chef.png";

function Header({ name }) {
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

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <button onClick={() => onStatus(true)}>
        {!openStatus ? "Open" : "Close" } the restaurant..
      </button>
      <h2>Welcome to my restaurant!
        <br></br>
        Its {openStatus ? "Open😁" : "Closed🫣"}
      </h2>
      <main>

        <img id="chef" src={chef} alt="A smiling chef image" />

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
  //const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer(
    (status) => !status,
    true
  );

  useEffect(() => {
  console.log(`The restaurant is ${status ? "open" : "closed"} `);
}, [])

  return (
    <div>
      <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
      <button onClick={toggle}>
        {status ? "Close" : "Open"} Restaurant
      </button>
      <Header name="Kee" />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
    </div>
  );
}

export default App;