import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherForecast from "./WeatherForecast";

class Weather extends React.Component {
  render() {
    return (
      <Row xs={1} sm={2} md={3} lg={3} className="mt-5">
        {this.props.weatherResults.map((day, index) => (
          <Col key={index}>
            <WeatherForecast weatherResults={day} query={this.props.query} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default Weather;
