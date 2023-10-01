import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
          <Route path="/" element={'HOME'}/>
          <Route path="/post/:id" element={'Single Page'}/>
          <Route path="/post/add" element={'Add Page'}/>
          <Route path="/post/edit/:id" element={'Edit Page'} />
          <Route path="/about" element={'About'}/>
          <Route path="*" element={'Not found'}/>
        </Routes>
    </main>
  );
}

export default App;
