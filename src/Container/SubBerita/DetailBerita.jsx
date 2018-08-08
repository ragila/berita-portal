import React, { Component } from "react";
import axios from "axios";
export default class DetailBerita extends Component {
  state = {
    data: [],
    loading: false
  };

  componentDidMount() {
    axios
      .get(
        `https://id.techinasia.com/wp-json/techinasia/3.0/posts/${
          this.props.match.params
        }`
      )
      .then();
  }
  render() {
    console.log(this.props.match, "ini kiee >>>>>>>>>>>>>.");
    return (
      <div>
        <h1>INI SUB BERITA!!!</h1>
      </div>
    );
  }
}
