import { Form } from "react-bootstrap";
import  { Row } from "react-bootstrap";
import  { Col } from "react-bootstrap";
import  { Button } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useSelector } from "react-redux/es/hooks/useSelector";
import { getAllCategories } from "../../../redux/categoriesRedux";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


const PostForm = ({ action, actionText, ... props}) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setSelectedDate] = useState(props.date || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [category, setCategory] =useState(props.category || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    
    const categories = useSelector(getAllCategories);

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        setCategoryError(!category || !categories.includes(category));
    
        if (content && publishedDate && category && categories.includes(category)) {
          action({ title, author, publishedDate, category, shortDescription, content });
        }
    };
                                                                                                                                  
    return (

        <section>

            <Row className="d-flex flex-column"> 
                <Form onSubmit={validate(handleSubmit)} >

                    <Col lg={10} xs={12} md={8}>
                        <Form.Group className="mb-3 px-1" controlId="formGroupTitle">
                            <Form.Control
                                {...register("title", { required: true, minLength: 3 })}
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                type="text" placeholder="Enter title"
                            />
                            {errors.title && <small className="d-block form-text text-danger mt-2">This field is required (min 3 characters).</small>}
                        </Form.Group>
                        <Form.Group className="mb-3 px-1" controlId="formGroupAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                {...register("author", { required: true, minLength: 3 })}
                                value={author}
                                onChange={e => setAuthor(e.target.value)}
                                type="text" placeholder="Enter author"
                            />
                            {errors.author && <small className="d-block form-text text-danger mt-2">This field is required (min 3 characters).</small>}
                        </Form.Group>
                        <Form.Group className="mb-3 px-3" controlId="formGroupDate">
                            <Row className="d-flex align-items-center">
                                <Form.Label className="px-0">Published</Form.Label>
                                <DatePicker selected={publishedDate} onChange={(date) => setSelectedDate(date)} className="form-control"
                                    placeholderText="Date" dateFormat="dd/MM/yyyy"
                                />
                                {dateError && (<small className="d-block form-text text-danger mt-2 px-0">This field is required.</small>)}
                            </Row>
                        </Form.Group>
                        <Form.Group className="mb-3 px-1">
                            <Form.Label className="px-0">Categories</Form.Label>
                            <Form.Select 
                                value={category} onChange={e => setCategory(e.target.value)}>
                                <option>Select Category</option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            
                            </Form.Select>
                            {categoryError && (<small className="d-block form-text text-danger mt-2 px-0">This field is required.</small>)}
                        </Form.Group>
                        
                    </Col>

                    <Col lg={12} xs={12} md={10} className="px-1">

                        <Form.Group className="mb-3" controlId="floatingTextarea1">
                            <Form.Label>Short description</Form.Label>
                            <Form.Control 
                                {...register("shortDescription", { required: true, minLength: 20 })}
                                value={shortDescription}
                                onChange={e => setShortDescription(e.target.value)}
                                as="textarea" rows={6} placeholder="Leave a comment here"
                            />
                                {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required (min 20 characters).</small>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="floatingTextarea2">
                            <Form.Label>Main content</Form.Label>
                            <ReactQuill theme="snow" style={{ height: '200px' }} value={content} onChange={setContent} />
                            {contentError && (<small className="d-block form-text text-danger mt-5">Content can't be empty</small>)}
                        </Form.Group>

                    </Col>

                    <Button type="submit"  className="mx-1 mt-5">{actionText}</Button>

                </Form>
            </Row>
        </section>
    )
}

export default PostForm;


/* 1. We get data to state by props from EditPostForm or PostForm
     2.Title is putting into proper place into the code like value
     3.Value is activated by function SetTitle/SetOthe...
     4.Those function is activated after some action wich is provided in argument  */