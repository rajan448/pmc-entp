import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ContactUs from "./pages/Contact";

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about" component={About} />
            {/*<Route path="/blog" component={Blog} />*/}
            <Route path="/contact" component={ContactUs} />
          </Switch>
        </div>
        <div className="copyright">
          <img height={'50px'} width={'50px'} src="./assets/images/logo.jpg" alt="LOGO"/>
          <small>© PMC Enterprises 2022</small>
        </div>
      </Router>
    </div>
  );
}

export default App;
