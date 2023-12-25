import Home from "../home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNavbar from "../../components/navbar";
import { ContactUs } from "../contact/contactUs";
import Login from "../login/login";
import Cart from "../myCart/cart";
import { Setting } from "../settings/setting";
import { Subscription } from "../subscription/subscription";
import { SignUp } from "../signup/signup";

export function App() {
  return (
    <Router>
      <>
        <TopNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
          <Route path="/view-cart">
            <Cart />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/subscription-plan">
            <Subscription />
          </Route>
        </Switch>
      </>
    </Router>
  );
}
