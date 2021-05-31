import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.scss';


function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="app">
      <header className="App-header">
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      </header>
    </div>
  );
}

export default App;
