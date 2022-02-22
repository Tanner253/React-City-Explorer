import React from 'react'
import Card from 'react-bootstrap/Card'

class Cities extends React.Component {
render() {
  return(
    <article>
      <Card style={{ width:"18rem" }}>
        <Card.Body>
        <Card.Title>{this.props.cityData.display_name}</Card.Title>
        <Card.Text>{this.props.cityData.lon}</Card.Text>
        <Card.Text>{this.props.cityData.lat}</Card.Text>
        </Card.Body>
      </Card>
    </article>
    )
  }
}


export default Cities