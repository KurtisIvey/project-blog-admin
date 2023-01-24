import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import HomePosts from "./pages/HomePosts";
import SinglePosts from "./pages/SinglePosts";
import Login from "./pages/Login";
import NewPost from "./pages/NewPost";

function App() {
  return (
    <div className=" h-full  bg-slate-100">
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<HomePosts />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/posts/:id" element={<SinglePosts />} />
          <Route path="/posts/new-post" element={<NewPost />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
