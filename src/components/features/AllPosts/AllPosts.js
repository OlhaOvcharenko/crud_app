import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";


const AllPosts = (props) => {
 
    return(

      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2">Author:{props.author}</Card.Subtitle>
          <Card.Subtitle className="mb-2">Published: {props.publishedDate}</Card.Subtitle>
          <Card.Text>{props.shortDescription}</Card.Text>
          <Button variant="primary">Read more</Button>
        </Card.Body>
      </Card>
    )
}

export default AllPosts;