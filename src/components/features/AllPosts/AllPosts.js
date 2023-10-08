
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Stack, Button, Col, Card } from 'react-bootstrap';
import { dateToStr } from '../../../utils/FormatDate';
import { getAllPosts } from '../../../redux/postsRedux';

const AllPosts = () => {
  const posts = useSelector((state) => getAllPosts(state));

  return (
    <div>
      <Stack direction="horizontal" gap={4}>
        <div className="p-2">
          <h1>All posts</h1>
        </div>
        <div className="p-2 ms-auto">
          <Link to="/post/add">
            <Button variant="outline-info">Add post</Button>
          </Link>
        </div>
      </Stack>
      <div className="row my-5">
        {posts.map((post) => (
          <Col key={post.id} className="col-lg-4 col-sm-12 col-md-6 px-2 py-2">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text className="mb-2">
                  <b>Author:</b> {post.author}
                </Card.Text>
                <Card.Text className="mb-2">
                  <b>Published:</b> {dateToStr(new Date(post.publishedDate))}
                </Card.Text>
                <Card.Text>{post.shortDescription}</Card.Text>
                <Link to={`/post/${post.id}`}>
                  <Button variant="primary">Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
