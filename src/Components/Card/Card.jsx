import React, { Component } from "react";
import Axios from "axios";
import CardSingular from "./CardSingular";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import CardLoading from "./CardLoading";

export default class Card extends Component {
  state = {
    news: [],
    loading: false
  };
  componentDidMount() {
    Axios.get(
      "https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15"
    )
      .then(res => {
        console.log(res, ">>>>>>>>>ini res");
        this.setState({
          news: res.data,
          loading: true
        });
      })
      .catch();
  }
  render() {
    return (
      <div>
        {console.log(this.state.news, ">>>>>>ini NEWSSSS")}
        {this.state.loading ? ( //berfungsi untuk menunggu fungsi data state
          <CardSingular lempar={this.state.news} />
        ) : (
          <CardLoading />
        )}
      </div>
    );
  }
}
