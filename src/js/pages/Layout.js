import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>

        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            </div>
            <div id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li>
                  <a>Featured</a>
                </li>
                <li>
                  <a>Archives</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>React App</h1>



            </div>
          </div>
          <footer>
            <div class="row">
              <div class="col-lg-12">
                <p>Copyright &copy; 2017 Ralph Minor</p>
              </div>
            </div>
          </footer>
        </div>

      </div>
    );
  }
}