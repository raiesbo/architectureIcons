import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/home.page";
import Icons from "./pages/icons.page";
import TrivialArch from "./pages/trivialarch.page";
import Contact from "./pages/contact.page";
import Store from "./components/store/store.component";
import { Switch, Route, useLocation } from 'react-router-dom';


export default function App() {

  const [menuStrong, setMenuStrong] = useState("");
  let location = useLocation().pathname

  const menuStrongHandler = () => {
    switch (location) {
      case "/":
        setMenuStrong("Home")
        break;
      case "/icons":
        setMenuStrong("Icons")
        break;
      case "/trivialArch":
        setMenuStrong("TrivialArch")
        break;
      case "/contact":
        setMenuStrong("Contact")
        break;
    }
  }

  useEffect(() => {
    menuStrongHandler()
  }, [location])

  return (
    <div className="App">
      <NavBar menuStrong={menuStrong} />

      <Store>
        <Switch>

          <Route path="/icons/:architect" component={Icons} />
          <Route path="/icons" component={Icons} />
          <Route path="/trivialArch" component={TrivialArch} />
          <Route path="/contact" component={Contact} />
          <Route path="/*" component={Home} />



        </Switch>
      </Store>

      <Footer />
    </div>
  );
}
