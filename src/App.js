import React from "react";
import Signup from "./authentication/Signup";
import Signin from "./authentication/Signin";
import Login from "./authentication/Login";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;