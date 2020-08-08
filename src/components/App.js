import React from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };
  onSearch = async query => {
    const res = await unsplash.get(`/search/photos`, {
      params: { query: query, per_page: 20 }
    });
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className=" ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearch} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
