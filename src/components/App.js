import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  onSearch(query) {
    console.log(query);
  }
  render() {
    return (
      <div className=" ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearch} />
      </div>
    );
  }
}

export default App;
