import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "sadf" };
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  //event.target.value// event.target.value// event.target.value

  onFormSubmit = event => {
    event.preventDefault();
    //event.preventDefault();
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.onInputChange}
              // onChange={e => this.setState({ term : e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
