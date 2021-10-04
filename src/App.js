import logo from './logo.svg';
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


function App() {
  return (
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
          <Route exact path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
