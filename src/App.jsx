import { HashRouter, Route, Routes } from "react-router-dom";
import HomePosts from "./pages/HomePosts";
import SinglePosts from "./pages/SinglePosts";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <div className=" h-screen  bg-slate-100">
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<HomePosts />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/posts/:id" element={<SinglePosts />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
          <Route path="/posts/new-post" exact element={<NewPost />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
