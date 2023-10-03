import { Card } from "react-bootstrap";
import  { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const PostCard = (props) => {
 
    return(

      <Col  className="col-lg-4 col-sm-12 col-md-6 px-2 py-2">
        <Card >
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="mb-2"><b>Author:</b>  {props.author}</Card.Text>
            <Card.Text className="mb-2"><b>Published:</b> {props.publishedDate}</Card.Text>
            <Card.Text>{props.shortDescription}</Card.Text>
            <Link key={props.id} to={`/post/${props.id}`} >
              <Button variant="primary">Read more</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
      
    )
}

export default PostCard;