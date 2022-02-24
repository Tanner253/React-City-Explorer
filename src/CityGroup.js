import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cities from "./Cities";
class CityGroup extends React.Component {
  render() {
    let filter = this.props.searchResults.slice(0, -1);
    return (

      <Row xs={1} sm={2} md={3} lg={3}>
      {filter.map((city, index) => (
        <Col key={index}>
          <Cities cityData={city} />
        </Col>
      ))}
    </Row>
    )
  }
}

export default CityGroup;
