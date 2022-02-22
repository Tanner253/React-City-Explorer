import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Cities from "./Cities";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "./Image";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchResults: [],
      cityData: {},
      imageURL: "",
    };
  }

  handleGetData = async (event) => {
    event.preventDefault();
    try {
      let request = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.query}&format=json`;
      let response = await axios.get(request);
      this.setState({
        searchResults: response.data,
        cityData: response.data[0],
      });
    } catch (event) {
      console.log("error:", event.response);
    }
  };
  getImage = async () => {
    let request = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=12`;
    let response = await axios.get(request);
    this.setState({
      imageURL: response,
    });
  };
  handleCity = (e) => {
    this.setState({
      query: e,
    });
  };
  render() {
    console.log(this.state);

    return (
      <>
        <Container className="text-center">
          <SearchBar
            handleCityInput={this.handleCity}
            handleGetData={this.handleGetData}
          />
          <Container className="mainContainer">
            <Row xs={1} sm={2} md={3} lg={4}>
              {this.state.searchResults.map((city, index) => (
                <Col key={index}>
                  <Cities cityData={city} />
                </Col>
              ))}
            </Row>
          </Container>
          <Image
            cityData={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`}
          />
        </Container>
      </>
    );
  }
}
