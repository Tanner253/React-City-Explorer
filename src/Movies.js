import React from 'react'
import Card from 'react-bootstrap/Card'

class Movies extends React.Component {
render() {
  return(
    <div style={{height:'20vh', display:'flex', justifyContent:'auto'}}>
        <Card style={{ width:"18rem", overflow:'auto', margin: '20px'}} className="h-100">
        <Card.Body>
        <Card.Title>{this.props.movieResults.title}</Card.Title>
        <Card.Text>{this.props.movieResults.description}</Card.Text>
        <Card.Text>{this.props.movieResults.releaseDate}</Card.Text>
        </Card.Body>
      </Card>
    </div>

    )
  }
}


export default Movies;