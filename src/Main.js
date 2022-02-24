import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Cities from "./Cities";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "./Image";
// import Modal from "react-bootstrap/Modal"
import WeatherForecast from "./WeatherForecast";
import Movies from "./Movies";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      searchResults: [],
      cityData: {},
      error: false,
      errorMessage: '',
      showModal: false,
      weatherResults: [],
      movieResults: []
      
    };
  }

  handleGetData = async (event) => {
    event.preventDefault();

    try {
      let locationRequestURL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.query}&format=json`;
      let locationResponse = await axios.get(locationRequestURL);
      this.setState({
        cityData: locationResponse.data[0],
        searchResults: locationResponse.data,
      });
    } catch (event) {
      console.log("Main - 37 error response:", event.response);
      this.setState({
        error: true,
        errorMessage: `anErrorOccured: ${event.response.status}, ${event.response.data}`
      })
    }

    try {
      let weatherRequestURL = `${process.env.REACT_APP_SERVER}/weather?lat=${this.state.cityData.lat}&lon=${this.state.cityData.lon}`;
      let weatherResponse = await axios.get(weatherRequestURL);
      this.setState({ 
        weatherResults: weatherResponse.data
      });
    } catch (event) {
      console.log("Main - 50 error response:", event.response);
      this.setState({
        error: true,
        errorMessage: `anErrorOccured: ${event.response.status}, ${event.response.data}`
      })
    }

    try {
      let movieRequestURL = `${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.query}`;
      let movieResponse = await axios.get(movieRequestURL);
      this.setState({ 
        movieResults: movieResponse.data
      });
    } catch (event) {
      console.log("Main - 50 error response:", event.response);
      this.setState({
        error: true,
        errorMessage: `anErrorOccured: ${event.response}, ${event.response.data}`
      })
    }

  };


  handleCity = (e) => {
    this.setState({
      query: e,
    });
  };
  handleShow = (error) => {
    this.setState({
      showModal:true,
      error:error,
      
    });
  }
  handleHide = () => {
    this.setState({
      showModal:false,
      error:false
    });
  }
  render() {
    console.log(this.state);
    
      //Doesnt work
    /*
    <Modal show={this.handleShow(this.state.errorMessage)} hide={this.handleHide()}>
          <Modal.Header closebutton>
            <Modal.Title>
              Error: {this.state.errorMessage}
            </Modal.Title>
          </Modal.Header>
      </Modal>
    */
    let filter = this.state.searchResults.slice(0, -1)
    return (
      <>
      {this.state.error?  
      <p>{this.state.errorMessage}</p>
        :
        <Container style={{justifycontent: 'center'}} className="text-center">
          <SearchBar
            handleCityInput={this.handleCity}
            handleGetData={this.handleGetData}
            />
          <Container className="mainContainer">
            <Row xs={1} sm={2} md={3} lg={3}>
              {filter.map((city, index) => (
                  <Col key={index}>
                  <Cities cityData={city} />
                </Col>
              ))}
            </Row>

            <Row xs={1} sm={2} md={3} lg={3} className="mt-5">
              {this.state.weatherResults.map((day, index) => (
                <Col key={index}>
                  <WeatherForecast 
                  weatherResults={day}
                  query={this.state.query}/>
                </Col>
              ))}
            </Row>

            <Row xs={1} sm={2} md={3} lg={3} className="mt-5">
              {this.state.movieResults.map((movie, index) => (
                <Col key={index}>
                  <Movies 
                  movieResults={movie}
                  />
                </Col>
              ))}
            </Row>
          </Container>
          <Image
            cityData={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=13`}
            />
        </Container>
        
          }
      </>
    );
  }
}
