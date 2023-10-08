import { Modal } from "react-bootstrap";
import  { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/postsRedux";

const RemovePost = ({ id }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const handleDeletePost = () => {
        console.log('Deleting post with ID:', id);
        dispatch(deletePost(id)); // Dispatch the action to remove the post
        handleClose(); // Close the modal
    };

    return(
        <div>
           <Button variant="outline-danger" onClick={handleShow} classNmae={'mr-2'} >Delete post</Button>{' '}

           <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>The operation will completely remove this post from the app.Are you sure you want to do that?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDeletePost}>
                    Remove
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RemovePost;