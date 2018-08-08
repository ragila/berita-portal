import React, { Component } from "react";
import axios from "axios";
export default class DetailBerita extends Component {
  state = {
    data: [],
    loading: false
  };

  componentDidMount() {
    axios
      // akan mengambil .params.slug
      .get(
        `https://id.techinasia.com/wp-json/techinasia/3.0/posts/${
          this.props.match.params.slug
        }`
      )
      .then(res => {
        console.log(res, ">>>>>>> ini resss");
        this.setState({
          data: res.data,
          loading: true
        });
      });
  }
  render() {
    console.log(this.state.data, "ini kiee >>>>>>>>>>>>>."); //setiap Route pasti ada match
    return (
      <div>
        {this.state.loading ? (
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.data.posts[0].content //__html => inner html. semua tag nya akan di tampilkan.. post[0]
            }}
          />
        ) : (
          <h1> Loading sub Berita ... </h1>
        )}
      </div>
    );
  }
}
