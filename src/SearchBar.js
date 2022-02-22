import React from "react";
import Container from "react-bootstrap/Container"
class SearchBar extends React.Component {
  render() {
    return (
      //add on submit and form
      <Container className="text-center">
        <form>
          <button onClick={this.props.handleGetData}>Display some data</button>
        </form>
        <form>
          <label>Enter city name! <input type="text" onInput={this.props.handleCityInput}></input></label>
          <button type="submit">Search!</button>
        </form>

      </Container>
    );
  }
}

export default SearchBar;