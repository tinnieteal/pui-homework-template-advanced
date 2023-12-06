import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menuitem from "../components/menuitem";

const coffeeItems = [
  {
    name: "espresso",
    price: 2,
    content:
      "Espresso means 'pressed' in Italian. The name reflects the method of preparation, which involves forcing hot water through finely-ground coffee under high pressure. This process extracts the flavors, aromas, and oils from the coffee beans quickly, resulting in a concentrated and intense coffee.",
  },
  {
    name: "americano",
    price: 2.5,
    content:
      "The name 'Americano' is believed to have originated during World War II when American soldiers stationed in Europe would dilute the strong European espresso with water to create a more familiar and palatable coffee.",
  },
  {
    name: "macchiato",
    price: 3,
    content:
      "Macchiato is an espresso-based coffee beverage, and the word 'macchiato' itself is Italian for 'stained' or 'spotted.' The drink is typically made by adding a small amount of milk or foam to a shot of espresso. The milk stains the espresso, creating a bolder flavor and altering the texture slightly.",
  },
  {
    name: "latte",
    price: 3.5,
    content:
      "A basic latte is made with espresso, steamed milk, and a thin layer of foam, and this neutral base can easily be enhanced with various flavors, such as flavored syrups, spices, and other additives. The combination of these elements provides a versatile and adaptable platform for the drink. ",
  },
  {
    name: "flat white",
    price: 4,
    content:
      "The flat white is a popular espresso-based coffee beverage that originated in Australia and New Zealand. It is known for its balance between the rich flavor of espresso and the creamy texture of steamed milk. It offers a stronger coffee taste compared to a latte while maintaining a smooth and velvety mouthfeel.",
  },
  {
    name: "cappuccino",
    price: 4.5,
    content:
      "The combination of the strong espresso, the velvety steamed milk, and the airy foam results in a rich and satisfying coffee experience for cappuccino. The layers of a cappuccino are not only visually appealing but also contribute to the overall sensory experience.",
  },
  {
    name: "mocha",
    price: 5,
    content:
      "A mocha is a delicious and indulgent coffee beverage that combines the rich flavors of espresso, steamed milk, and chocolate. It's a popular choice for those who enjoy a sweeter and more decadent coffee experience. They are often enjoyed as a dessert-like treat and are a popular choice in coffee shops around the world.",
  },
];

function Menu() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const item = coffeeItems[selectedIndex];

  return (
    <div className="home">
      <div className="homeicon" onClick={() => navigate("/home")}>
        <img src="assets/logo2.svg" alt="Logo" />
      </div>
      <div className="frame">
        {coffeeItems.map((item, index) => (
          <Menuitem
            key={index}
            name={item.name}
            price={item.price}
            isSelected={selectedIndex === index}
            select={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== -1 ? (
        <div className="content">
          <div>
            <div className="content-top-bar">
              <div
                className="btn btn-close"
                onClick={() => setSelectedIndex(-1)}
              >
                <span>Close</span>
              </div>
            </div>
            <div className="coffee-card-container">
              <div className="cup">
                <div className={`filling reset ${item.name}`}>
                  <div className="coffee">Coffee</div>
                  <div className="water">Water</div>
                  <div className="liquor">Liquor</div>
                  <div className="milk">Milk</div>
                  <div className="whipped_cream">Whipped cream</div>
                  <div className="milk_foam">Milk foam</div>
                  <div className="steamed_milk">Steamed milk</div>
                  <div className="chocolate">Chocolate</div>
                </div>
                <div className="plate"></div>
              </div>
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Menu;
