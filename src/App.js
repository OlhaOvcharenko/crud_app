import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import PostAdd from "./components/views/Post Add/PostAdd";
import PostEdit from "./components/views/Post Edit/PostEdit";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import SinglePost from "./components/features/SinglePost/SinglePost";
import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import NotFound from "./components/pages/Not Found/NotFound";

function App() {
  return (
    <main>
      <Container >
        <Header   />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/post/:postId" element={<SinglePost />}/>
          <Route path="/post/add" element={<PostAdd />}/>
          <Route path="/post/edit/:id" element={<PostEdit />} />
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;
