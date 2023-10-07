import { Form } from "react-bootstrap";
import  { Row } from "react-bootstrap";
import  { Col } from "react-bootstrap";
import  { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addPost } from "../../../redux/postsRedux";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";

import moment from "moment";

const AddPostForm = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setSelectedDate] = useState(null);
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    
    const handleSubmit = e => {
        e.preventDefault();
       
        dispatch(
            addPost({
              postId: props.postId,
              title,
              author,
              publishedDate: moment().format('DD-MM-YYYY'),
              shortDescription,
              content,
            })
        );

        setTitle('');
        setAuthor('');
        setSelectedDate(null);
        setShortDescription('');
        setContent('');

        navigate('/');
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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Short description</Form.Label>
                            <Form.Control as="textarea" rows={6} placeholder="Leave a comment here"
                            value={shortDescription} onChange={e => setShortDescription(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Main content</Form.Label>
                            <Form.Control as="textarea" rows={6} placeholder="Leave a comment here" 
                            value={content} onChange={e => setContent(e.target.value)} />
                        </Form.Group>
                    </Col>

                    <Button type="submit"  className="mx-1">Add Post</Button>
                </Form>
            </Row>
        </section>
    )
}

export default AddPostForm;