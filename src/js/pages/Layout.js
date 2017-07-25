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
          <div class="row">
            <div class="col-lg-12">
              <div class="well text-center">
                Ad spot goes here
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <h2>Heading 1</h2>
              <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb.</p>
              <a class="btn btn-default" href="#">More info</a>
            </div>
            <div class="col-md-4">
              <h2>Heading 2</h2>
              <p>Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.</p>
              <a class="btn btn-default" href="#">More info</a>
            </div>
            <div class="col-md-4">
              <h2>Heading 3</h2>
              <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>
              <a class="btn btn-default" href="#">More info</a>
            </div>
          </div>
        </div>

          <footer class="container" style={containerStyle}>
            <div class="row">
              <div class="col-lg-12">
                <p>Copyright &copy; 2017 Ralph Minor</p>
              </div>
            </div>
          </footer>

      </div>
    );
  }
}