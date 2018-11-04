import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getIngredients() {
    console.log(document.getElementsByClassName("recipe-ingred_txt"));
    let ingrArr = [];
    let temp = document.getElementsByClassName("recipe-ingred_txt");
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].getAttribute("itemprop") === "recipeIngredient") {
        ingrArr.push(temp[i].textContent);
      }
    }
    console.log("ingrArr: ", ingrArr);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <button onClick={this.getIngredients}>Click me</button>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
