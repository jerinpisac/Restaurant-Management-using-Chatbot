import React from 'react'
import '../styles/MenuPage.css'

function MenuPage({ props, ref }) {
  return (
    <div ref={ref} className='menu-container'>
        <h1>Menu</h1>
        <div className="menu-grid">
            <div className="menu-card">
                <h2>Starters</h2>
                <ul>
                    <li>
                        <div>Bruschetta</div>
                        <div className='price'>₹180</div>
                    </li>
                    <li>
                        <div>Loaded Nachos</div>
                        <div className="price">₹220</div>
                    </li>
                    <li>
                        <div>Chicken Wings (6 pcs)</div>
                        <div className="price">₹260</div>
                    </li>
                </ul>
            </div>
            <div className="menu-card">
                <h2>Main Course</h2>
                 <ul>
                    <li>
                        <div>Grilled Chicken Alfredo Pasta</div>
                        <div className="price">₹420</div>
                    </li>
                    <li>
                        <div>Paneer Butter Masala</div>
                        <div className="price">₹360</div>
                    </li>
                    <li>
                        <div>Lamb Rogan Josh</div>
                        <div className="price">₹490</div>
                    </li>
                    <li>
                        <div>Vegetable Biryani</div>
                        <div className="price">₹320</div>
                    </li>
                 </ul>
            </div>
            <div className="menu-card">
                <h2>Pizza & Burgers</h2>
                <ul>
                    <li>
                        <div>Margherita Pizza (9")</div>
                        <div className="price">₹280</div>
                    </li>
                    <li>
                        <div>Pepperoni Pizza (9")</div>
                        <div className="price">₹350</div>
                    </li>
                    <li>
                        <div>Classic Chicken Burger</div>
                        <div className="price">₹240</div>
                    </li>
                    <li>
                        <div>Paneer Tikka Burger</div>
                        <div className="price">₹210</div>
                    </li>
                </ul>
            </div>
            <div className="menu-card">
                <h2>Desserts</h2>
                <ul>
                    <li>
                        <div>Chocolate Lava Cake</div>
                        <div className="price">₹160</div>
                    </li>
                    <li>
                        <div>Gulab Jamun (2 pcs)</div>
                        <div className="price">₹100</div>
                    </li>
                    <li>
                        <div>Tiramisu</div>
                        <div className="price">₹200</div>
                    </li>
                </ul>
            </div>
            <div className="menu-card">
                <h2>Beverages</h2>
                <ul>
                    <li>
                        <div>Masala Lemonade</div>
                        <div className="price">₹90</div>
                    </li>
                    <li>
                        <div>Cold Coffee with Ice Cream</div>
                        <div className="price">₹140</div>
                    </li>
                    <li>
                        <div>Fresh Lime Soda</div>
                        <div className="price">₹80</div>
                    </li>
                    <li>
                        <div>Cappuccino / Latte / Espresso</div>
                        <div className="price">₹110</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default MenuPage