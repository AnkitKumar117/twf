import React, { useRef, useState } from "react";
import {
  Form,
  Nav,
} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import "./style.scss";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const history = useHistory();

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to Login");
    }
    setLoading(false);
  }
  return (
    <div className="sigin_page">
      <Form onSubmit={handleSubmit}>
        <div className="base-container">
          <div className="header">Login</div>
          <div className="content">
            {/* <div className="image">
              <img src={loginImg} />
            </div> */}
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Email</label>
                <input
                  className="email"
                  type="text"
                  name="username"
                  placeholder="email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  ref={passwordRef}
                  required
                />
              </div>
            </div>
          </div>
          <div className="footer">
            <input type="submit" className="btn" value="Submit" /> <br />
            <h4 style={{ "margin-bottom": "10px" }}>Need an Account?</h4>
            <Nav.Link className="" href="#link">
              <button type="button" class="btn btn-default btn-lg">
                <a href="/signup" style={{ color: "#fff" }}>
                  Register
                </a>
              </button>
            </Nav.Link>
            {/* <button className="btn">Register</button>      */}
          </div>
        </div>
      </Form>
    </div>
  );
}