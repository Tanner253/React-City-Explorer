import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Movies from "./Movies";

class Theatre extends React.Component {
  render() {
    return (
      <Row xs={1} sm={2} md={3} lg={3} className="mt-5">
      {this.props.movieResults.map((movie, index) => (
        <Col key={index}>
          <Movies movieResults={movie} />
        </Col>
      ))}
    </Row>
    );
  }
}

export default Theatre;
