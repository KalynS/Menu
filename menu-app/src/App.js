
import './App.css';
import Menu from './Components/Menu';
import Categories from './Components/Categories';
import items from './Components/Data';
import React, { useState } from "react";

//only get unique categories from the list
const allCategories = ['all',...new Set(items.map((item)=> item.category))]


function App() {
  const[menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState (allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }
  return <main>
    <section className="menu section">
    <div className='title'>
      <h2>Kalyn's Menu</h2>
      <div className='underline'></div>
    </div>
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={menuItems}/>
    </section>

  </main>;
}

export default App;
