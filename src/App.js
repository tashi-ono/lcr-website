import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Careers from "./components/Careers/Careers";
import Contact from "./components/Contact/Contact";
import Covid from "./components/Covid/Covid";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";

import Recycling from "./components/Recycling/Recycling";
import Services from "./components/Services/Services";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/covid" component={Covid} />
          <Route exact path="/about" component={About} />
          <Route exact path="/recycling" component={Recycling} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
