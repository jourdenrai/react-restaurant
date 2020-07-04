import React from 'react';
import '../assets/stylesheets/menu.css';

function Menu() {
  return (
    <div>
      
      <h1>Our Menu</h1>
      <img id="menu-img"alt="background" src={require('../assets/images/shrimp-bg.png')} />
      <div id="center">
        <hr className="hr" id="hr-menu"/>
      </div>

      <div id="menu-container">
        <div className="menu-items" id="apps">
          <div>
            <h3>Appetizers:</h3>
          </div>
          <div className="items">
            <p>Fried pickles</p>
            <p>Peel n eat shrimp</p>
            <p>Oysters</p>
            <p>Crab dip</p>
            <p>Seafood nachos</p>
            <p>Crab claws</p>
          </div>
        </div>

        <div className="menu-items" id="lunch">
          <div>
            <h3>Lunch:</h3>
          </div>

          <div className="items">
            <p>Fish 'n chips</p>
            <p>Shrimp 'n chips</p>
            <p>Shrimp pasta</p>
            <p>Crab salad</p>
            <p>Fish Po'boy</p>
            <p>Lobster mac</p>
          </div>
        </div>

        <div className="menu-items" id="entrees">
          <div>
            <h3>Entrees:</h3>
            <h4 id="two-sides">(with two sides)</h4>
          </div>
          <div className="items">
            <p>Shrimp</p>
            <p id="smaller">(Fried, Grilled, or Blackened)</p>
            <p>Flounder</p>
            <p id="smaller">(Fried, Grilled, or Blackened)</p>
            <p>Crab legs</p>
            <p>Lobster tail</p>
            <p>Surf 'n turf</p>
            <p>Steam pot</p>
            <p id="smaller">(no sides)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
