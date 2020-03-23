import React, { Suspense, Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import * as Pages from "../../route.js";
import {ProtectedRoute, RouteLogin} from './protectedRoute';
import { MyContext } from "../../context/context";

const loader = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh"
};

const FourZeroFour = () => (
  <div
    style={{
      background: "#e5eff1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%"
    }}
  >
    <span>404</span>
  </div>
);
class Main extends Component {
  state = {
    user: null
  };
  setUser = (data, route) => {
    if (route === "/" || route === '/register') {
      this.setState({
        user: data
      }, ()=> {
        localStorage.setItem('ActiveUser-SB', JSON.stringify(this.state.user));
      });
    } else if (route === "/detect") {
      this.setState({
        user: {
          ...this.state.user,
          entries: data
        }
      }, ()=> {
        localStorage.setItem('ActiveUser-SB', JSON.stringify(this.state.user));
      });
    }
  };
  

  render() {
    const { user } = this.state;
    const { setUser } = this;
    return (
      <MyContext.Provider value={{ user, setUser }}>
        <Router basename="smart_brains">
          <Suspense fallback={<div style={loader}>Loading...</div>}>
            <Switch>
              <RouteLogin exact path="/" component={Pages.Home} />
              <RouteLogin path="/register" component={Pages.Register} />
              <ProtectedRoute  path="/detect" component={Pages.Detection} />
              <Route  path="*" component={FourZeroFour} />
            </Switch>
          </Suspense>
        </Router>
      </MyContext.Provider>
    );
  }
}

export default Main;
