import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

// Componentes
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/404/404";
import Resultado from './pages/Resultado/Resultado';
import { Propuestas } from './pages/Propuestas/Propuestas';

// Shared
import { Navbar } from './shared/Navbar/Navbar';
import { Footer } from './shared/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/propuesta" component={Propuestas} />
          <Route exact path="/fin" component={Resultado} />
          <Route component={PageNotFound} />

        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
