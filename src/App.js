import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function App() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">MyWebSite</span>
        <div className="d-flex">
          <a class="nav-link" href="#!">
            Home
          </a>

          <a class="nav-link" href="#!">
            Services
          </a>

          <a class="nav-link" href="#!">
            Contact
          </a>
        </div>
      </nav>
      <div class="container-fluid my-3">
        <div class="jumbotron">
          <h1 class="display-4">Contact Me</h1>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
            <button className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
