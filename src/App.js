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
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={ContactUs} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
