import React from "react";
import Container from "react-bootstrap/Container"
class SearchBar extends React.Component {
  render() {
    return (
      //add on submit and form
      <Container className="text-center">

        <form>
          <input type="text" onInput={(e) => {this.props.handleCityInput(e.target.value)}}></input>
          <button onClick={this.props.handleGetData}>Search</button>
        </form>

      </Container>
    );
  }
}

export default SearchBar;