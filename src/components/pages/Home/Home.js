import AllPosts from "../../features/AllPosts/AllPosts";
import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import  {Stack } from "react-bootstrap";
const Home = props => {

    const posts = useSelector((state) => getAllPosts(state, props.id))

    return(
        <div>
           <Stack direction="horizontal" gap={4}>
                <div className="p-2"><h1>All posts </h1></div>
                <div className="p-2 ms-auto" ><Button variant="outline-info">Add post</Button>{' '}</div>
            </Stack>
            <Row className="row my-5">
                {posts.map((post) => (
                <AllPosts key={post.id} {...post} />
                ))}
            </Row>
        </div>
    )
}

export default Home;