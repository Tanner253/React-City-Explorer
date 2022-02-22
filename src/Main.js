import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Cities from "./Cities"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      query: "",
      searchResults: [],
      cityData: {},
    };
  }

  handleGetData = async (event) => {
    event.preventDefault();
    try {
      let request = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=seattle&format=json`;
      let response = await axios.get(request);
      this.setState({ searchResults: response.data, cityData: response.data[0] });
    } catch (event) {
      console.log("error:", event.response);
    }
  };

  render() {
    console.log(this.state);

    return (
      <>
      <SearchBar
        handleCityInput={this.handleCityInput}
        handleGetData={this.handleGetData}
      />
      <Container>
        <Row xs={1} sm={2} md={3} lg={4}>
          {this.state.searchResults.map((city, index) => (
          <Col key={index}>
            <Cities cityData={city}/>
          </Col>
          ))}
        </Row>
      </Container>
      </>
    );
  }
}
