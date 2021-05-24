import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from './pages/Home'
import ContactPage from "./pages/ContactPage";
import Product from "./pages/Product";
import {CartProvider} from "./contexts/Cart";
function App() {
  return (
      <CartProvider>
          <Router>
              <div className="App">
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/home" exact component={Home}></Route>
                  <Route path="/product" exact component={Product}></Route>
                  {/*<Route path="/product/:id" exact component={Detail}></Route>*/}
                  <Route path="/contact" exact component={ContactPage}></Route>
              </div>
          </Router>
      </CartProvider>
  );
}

export default App;
