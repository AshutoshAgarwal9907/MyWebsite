import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Developer from "./Developer";
import Explore from "./Explore";
import Product from "./Product";
import Signin from "./Signin";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
const AppHeader = () => {
  return (
    <div>
      <Router>
        <div className=" bg-black  text-white p-5 flex space-x-96">
          <div className="inline-flex mr-32 ml-32">
            <img
              src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
              className="h-8 w-8 mr-3"></img>
            <div className="text-xl font-sans">LeetCode</div>
          </div>

          <div className="float-right">
            <Link to="/Explore" className="m-5 text-yellow-400 ">
              Explore
            </Link>
            <Link to="/Product" className="m-5">
              Product
            </Link>
            <Link to="/Developer" className="m-5">
              Developer
            </Link>
            <Link to="/Signin" className="m-5">
              Sign in
            </Link>
            {/*  <a href="www.google.com" className="m-5 text-yellow-400 ">Premium</a>
            <a href="www.google.com" className="m-5">Explore</a>
            <a href="www.google.com" className="m-5">Product</a>
            <a href="www.google.com" className="m-5">Developer</a>
            <a href="www.google.com" className="m-5">Sign in</a> */}
          </div>
        </div>
        <Switch>
          <Route exact path="/Explore" element={<Explore />}></Route>
          <Route exact path="/Product" element={<Product />}></Route>
          <Route exact path="/Developer" element={<Developer />}></Route>
          <Route exact path="/Signin" element={<Signin />}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AppHeader;
