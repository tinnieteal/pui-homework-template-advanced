import NavBar from './navbar.js'; 
import Item from './item.js';

function Homepage() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <div className="grid-container">
              {/* cinnamon roll #1 */}
              <Item title="Original cinnamon roll" img="assets/products/original-cinnamon-roll.jpg" price="$ 2.49"/>
                
              {/* cinnamon roll #2 */}
              <Item title="Apple cinnamon roll" img="assets/products/apple-cinnamon-roll.jpg" price="$ 3.49"/>

              {/* cinnamon roll #3 */}
              <Item title="Raisin cinnamon roll" img="assets/products/raisin-cinnamon-roll.jpg" price="$ 2.99"/>

              {/* cinnamon roll #4 */}
              <Item title="Walnut cinnamon roll" img="assets/products/walnut-cinnamon-roll.jpg" price="$ 3.49"/>

              {/* cinnamon roll #5 */}
              <Item title="Double-chocolate cinnamon roll" img="assets/products/double-chocolate-cinnamon-roll.jpg" price="$ 3.99"/>

              {/* cinnamon roll #6 */}
              <Item title="Strawberry cinnamon roll" img="assets/products/strawberry-cinnamon-roll.jpg" price="$ 3.99"/>

        </div>
    </main>      
    </div>
  );
}

export default Homepage;