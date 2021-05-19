import React from "react";
import Signup from "./authentication/Signup";
import Login from "./authentication/Login";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./authentication/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/home" exact component={Home}/>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            {/* <Route path="/signin" component={Signin} /> */}
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;