import { Form } from "react-bootstrap";
import  { Row } from "react-bootstrap";
import  { Col } from "react-bootstrap";
import  { Button } from "react-bootstrap";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const PostForm = ({ action, actionText, ... props}) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setSelectedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    
    
    const handleSubmit = e => {
        e.preventDefault();
        action({
            title, author, 
            publishedDate, 
            shortDescription, content });  
    };

    return (

        <section>

            <Row className="d-flex flex-column">
                
                <Form onSubmit={handleSubmit} >

                    <Col lg={10} xs={12} md={8}>
                        <Form.Group className="mb-3 px-1" controlId="formGroupTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3 px-1" controlId="formGroupAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control type="text" placeholder="Enter author"value={author} onChange={e => setAuthor(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3 px-3" controlId="formGroupDate">
                            <Row className="d-flex align-items-center">
                                <Form.Label className="px-0">Published</Form.Label>
                                <DatePicker selected={publishedDate} onChange={(date) => setSelectedDate(date)} className="form-control"
                                            placeholderText="Date" dateFormat="dd-MM-yyyy"/>
                            </Row>
                        </Form.Group>
                    </Col>

                    <Col lg={12} xs={12} md={10} className="px-1">
                        <Form.Group className="mb-3" controlId="floatingTextarea1">
                            <Form.Label>Short description</Form.Label>
                            <Form.Control as="textarea" rows={6} placeholder="Leave a comment here"
                            value={shortDescription} onChange={e => setShortDescription(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="floatingTextarea2">
                            <Form.Label>Main content</Form.Label>
                            <Form.Control as="textarea" rows={6} placeholder="Leave a comment here" 
                            value={content} onChange={e => setContent(e.target.value)} />
                        </Form.Group>
                    </Col>

                    <Button type="submit"  className="mx-1">{actionText}</Button>
                </Form>
            </Row>
        </section>
    )
}

export default PostForm;