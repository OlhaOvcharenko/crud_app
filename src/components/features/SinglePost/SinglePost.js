import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";


const SinglePost = (props) => {

    const { postId } = useParams();

    const postData = useSelector(state => getPostById(state, postId));
   
 
    return(
        
        <section>
            <Row >
                <Col>
                   <h1  className={'px-3'}>{postData.title}</h1>
                </Col>
                <Col className="d-flex justify-content-end align-items-center p-2">
                    <Link key={props.id} to={`/post/edit/${props.id}`}>
                        <Button variant="outline-info" className={'px-4'}>Edit</Button>
                    </Link>
                    <Link key={props.id} to={`/post/delete`} className={'p-2'}>
                        <Button variant="outline-danger">Delete post</Button>{' '}
                    </Link>
                </Col>
            </Row>
            <Card className="border-0" >
                <Card.Body>
                <Card.Text className="mb-2"><b>Author:</b> {postData.author}</Card.Text>
                <Card.Text className="mb-2"><b>Published:</b> {postData.publishedDate}</Card.Text>
                <Card.Text>{postData.shortDescription}</Card.Text>
                <Card.Text>{postData.content}</Card.Text>
                </Card.Body>
            </Card>
        </section>   
    )
}

export default SinglePost;