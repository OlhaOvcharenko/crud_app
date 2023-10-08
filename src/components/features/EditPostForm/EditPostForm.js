import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";
import { editPost } from "../../../redux/postsRedux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import moment from "moment/moment";

const EditPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { id } = useParams();

    const postData = useSelector(state => getPostById(state, id));

    const handleSubmit = (post) => {
        dispatch(editPost({ ...post, id}));
        navigate('/');
    };

    return (
        <PostForm
            postId = {id}
            action={handleSubmit}
            actionText='Edit post'
            title={postData.title}
            author={postData.author}
            date={postData.publishedDate}
            shortDescription={postData.shortDescription}
            content={postData.content}
        />

    );
};

export default EditPostForm;





