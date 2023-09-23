
function NavBar() {
    return (
          <div className="nav-row-container">
              <div className="logo-container">
                  <img src="assets/logo/logo-01.svg" alt="logo" />
              </div>
              <div className="nav-column-container">
                  <div className="navbar">
                      <ul>
                        <button type="submit" className="navmenu-link link">PRODUCTS</button>
                        <li className="navmenu-link ">CART</li>
                      </ul>
                  </div>
                  <p className="webtitle">Our hand-made cinnamon rolls</p>
              </div>
          </div>
    )
}

export default NavBar;
