
import  { Row } from "react-bootstrap";
import PostCard from "../PostCard/PostCard";
import { getAllPosts } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import  { Stack } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllPosts = (props) => {

  const posts = useSelector((state) => getAllPosts(state, props.id))
 
  return(
    <div>
      <Stack direction="horizontal" gap={4}>
          <div className="p-2"><h1>All posts </h1></div>
          <div className="p-2 ms-auto" >
            <Link key={props.id} to={`/post/add`} >
              <Button variant="outline-info">Add post</Button>{' '}
            </Link>
          </div>
      </Stack>
      <Row className="row my-5">
        {posts.map((post) => (
        <PostCard key={post.id} {...post} />
        ))}
      </Row>
    </div>   
  )
}

export default AllPosts;