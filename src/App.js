import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import NotFound from "./Components/NotFound/NotFound";
import MenuBar from './Components/MenuBar/MenuBar';
import Footer from './Components/Footer/Footer';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import { createContext } from 'react';
import { useState } from 'react';



export const ServiceContext = createContext('service');
function App() {
  const [serviceDetails, SetserviceDetails] = useState([]);
  const [cartQuantity, SetcartQuantity] = useState([]);
  // SetserviceDetails(array);
  return (
    <ServiceContext.Provider value={[serviceDetails, SetserviceDetails, cartQuantity, SetcartQuantity]}>
      <div className="">
        <Router>
          <MenuBar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/service">
              <Service></Service>
            </Route>
            <Route path="/services/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route exact path="/blog">
              <Blogs></Blogs>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </ServiceContext.Provider>
  );
}

export default App;
