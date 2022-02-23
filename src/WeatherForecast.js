import React from 'react'
import Card from 'react-bootstrap/Card'
class WeatherForecast extends React.Component {

  render() {
    return (
    <div style={{height: "10vh", margintop: '50px'}}>

      <Card className="h-100" style={{ width:"auto" }}>
        <Card.Body>
          <Card.Title style={{textTransform: 'capatalize'}}>{this.props.query} Weather:</Card.Title>
          <Card.Text>{this.props.weatherResults.description}</Card.Text>
          <Card.Text>{this.props.weatherResults.date}</Card.Text>
        </Card.Body>
      </Card>
    </div>
    )
  }
}
export default WeatherForecast;
