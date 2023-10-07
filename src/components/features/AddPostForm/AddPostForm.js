import { Form } from "react-bootstrap";
import  { Row } from "react-bootstrap";
import  { Col } from "react-bootstrap";
import  { Button } from "react-bootstrap";

const AddPostForm = () => {

    return (

        <section>

            <Row className="d-flex flex-column">
                
                <Col lg={10} xs={12} md={8}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="email" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="password" placeholder="Enter author" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Published</Form.Label>
                            <Form.Control type="password" placeholder="Enter author" />
                        </Form.Group>
                    </Form>
                </Col>

                <Col lg={12} xs={12} md={10}>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Short description</Form.Label>
                            <Form.Control as="textarea" rows={6} placeholder="Leave a comment here"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Main content</Form.Label>
                            <Form.Control as="textarea" rows={6} placeholder="Leave a comment here"/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Button type="submit">Add Post</Button>
            
        </section>
    )
}

export default AddPostForm;