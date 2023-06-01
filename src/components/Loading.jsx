import React, { Component } from "react";
import "../styles/Loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="page-loading">
        <div className="loading" />
      </div>
    );
  }
}

export default Loading;