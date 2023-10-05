import NavBar from "../components/navbar.js";
import Item from "../components/item.js";

const cinnamonRolls = [
  {
    title: "Original cinnamon roll",
    img: "assets/products/original-cinnamon-roll.jpg",
    price: "$ 2.49",
  },
  {
    title: "Apple cinnamon roll",
    img: "assets/products/apple-cinnamon-roll.jpg",
    price: "$ 3.49",
  },
  {
    title: "Raisin cinnamon roll",
    img: "assets/products/raisin-cinnamon-roll.jpg",
    price: "$ 2.99",
  },
  {
    title: "Walnut cinnamon roll",
    img: "assets/products/walnut-cinnamon-roll.jpg",
    price: "$ 3.49",
  },
  {
    title: "Double-chocolate cinnamon roll",
    img: "assets/products/double-chocolate-cinnamon-roll.jpg",
    price: "$ 3.99",
  },
  {
    title: "Strawberry cinnamon roll",
    img: "assets/products/strawberry-cinnamon-roll.jpg",
    price: "$ 3.99",
  },
];

// create 6 cinammon rolls using JSX
const itemList = cinnamonRolls.map((item, index) => (
  <Item key={index} title={item.title} img={item.img} price={item.price} />
));

function Homepage() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <div className="grid-container">{itemList}</div>
      </main>
    </div>
  );
}

export default Homepage;
