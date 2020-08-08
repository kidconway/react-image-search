import React from "react";

class SearchBar extends React.Component {
  state = { query: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="text" className="ui label">
              Image Search
            </label>
            <input
              id="text"
              type="text"
              onChange={e => this.setState({ query: e.target.value })}
              value={this.state.query}
              placeholder="Search for image..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
