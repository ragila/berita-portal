import React, { Component } from "react";
import "./App.css";
import Berita from "./Container/Berita/Berita";
import SubBerita from "./Container/SubBerita/DetailBerita";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Teknologi from "./Container/Teknologi/Teknologi";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Header} />
        </Switch>
        <Switch>
          <Route path="/" exact={true} component={Berita} />
          <Route path="/teknologi" component={Teknologi} />
          <Route path="/:slug" component={SubBerita} />
        </Switch>
      </div>
    );
  }
}

export default App;
