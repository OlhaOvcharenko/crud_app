import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { Navigate } from "react-router-dom";
import RemovePost from "../RemovePost/RemovePost";

import { dateToStr } from "../../../utils/FormatDate";

const SinglePost = (props) => {

    const { postId } = useParams();

    const postData = useSelector(state => getPostById(state, postId));

    if(!postData) return <Navigate to="/" />
    else return(

        <Row className="justify-content-center">
            <Col  className="col-lg-6">
                <Row>
                    <Col>
                    <h1  className={'px-3'}>{postData.title}</h1>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                    <Link key={props.id} to={`/post/edit/${postId}`} className={'px-2'}>
                        <Button variant="outline-info" className={'px-4'}>Edit</Button>
                    </Link>
                    <RemovePost id={postData.id}/>
                    </Col>
                </Row>
                <Card className="border-0" >
                    <Card.Body>
                    <Card.Text className="mb-2"><b>Author:</b> {postData.author}</Card.Text>
                    <Card.Text className="mb-3"><b>Published:</b> {dateToStr(postData.publishedDate)}</Card.Text>
                    <Card.Text className="mb-3"><b>Category:</b> {postData.category}</Card.Text>
                    <Card.Text dangerouslySetInnerHTML={{ __html: postData.content }}></Card.Text>
                    </Card.Body>
                </Card>
            </Col> 
        </Row>  
    )
}

export default SinglePost;