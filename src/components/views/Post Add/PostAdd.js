import { Col } from "react-bootstrap";
import  { Row } from "react-bootstrap";
import AddPostForm from "../../features/AddPostForm/AddPostForm";


const PostAdd = () => {
    return(

        <Row  className="justify-content-center align-items-start px-5"> 
            <Col xs={12} md={10} lg={8}>
                <h1>Add Post</h1>
                <AddPostForm />  
            </Col>
        </Row>
    )
}

export default PostAdd;