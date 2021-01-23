import './App.css';
import Home from "./pages/home.page"
import NavBar from "./components/navbar.component";
import TrivialArch from "./pages/trivialarch.page";
import Contact from "./pages/contact.page";
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path="/trivialArch" component={TrivialArch} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>

    </div>
  );
}

export default App;
