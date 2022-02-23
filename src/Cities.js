import React from 'react'
import Card from 'react-bootstrap/Card'

class Cities extends React.Component {
render() {
  return(
    <div style={{height:'18vh', display:'flex', justifyContent:'auto'}}>
        <Card style={{ width:"18rem", overflow:'auto', margin: '20px'}} className="h-100">
        <Card.Body>
        <Card.Title>{this.props.cityData.display_name}</Card.Title>
        <Card.Text>{this.props.cityData.lon}</Card.Text>
        <Card.Text>{this.props.cityData.lat}</Card.Text>
        </Card.Body>
      </Card>
    </div>

    )
  }
}


export default Cities