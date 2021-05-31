import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Hero from "./components/hero/Hero";
import './App.scss';
import Work from "./components/work/Work";


function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="app">
      <header className="App-header">
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      </header>
      <div>
        <Hero />
        <Work />
      </div>
    </div>
  );
}

export default App;
