import AllPosts from "../../features/AllPosts/AllPosts";
import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import  { Col } from "react-bootstrap";

const Home = props => {

    const posts = useSelector((state) => getAllPosts(state, props.id))

    return(
        <div>
            <h1>All posts</h1>

            <Row>
                <Col>
                    {posts.map((post) => (
                    <AllPosts key={post.id} {...post} />
                    ))}
                </Col>
            </Row>
          

        </div>
    )
}

export default Home;