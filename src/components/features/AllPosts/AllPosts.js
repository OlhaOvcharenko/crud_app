
import  { Row } from "react-bootstrap";
import  { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { dateToStr } from "../../../utils/FormatDate";



const AllPosts = (props) => {

  const posts = useSelector((state) => getAllPosts(state))
 
  return(
    <div>
      <Stack direction="horizontal" gap={4}>
          <div className="p-2"><h1>All posts </h1></div>
          <div className="p-2 ms-auto" >
            <Link key={props.id} to={`/post/add`} >
              <Button variant="outline-info">Add post</Button>{' '}
            </Link>
          </div>
      </Stack>
      <Row className="row my-5">
        <Col  className="col-lg-4 col-sm-12 col-md-6 px-2 py-2">
          {posts.map(post=>    
            <Card key={post.id}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className="mb-2"><b>Author:</b>  {post.author}</Card.Text>
                <Card.Text className="mb-2"><b>Published:</b> {dateToStr(post.publishedDate)}</Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Link key={post.id} to={`/post/${post.id}`}>
                  <Button variant="primary">Read more</Button>
                </Link>
              </Card.Body>
            </Card>)}
        </Col>
      </Row>
    </div>   
  )
}

export default AllPosts;
