import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "../Pages/Home"
import About from "../Pages/About"
import Blogs from "../Pages/Blogs"
import Blogdetail from "../Components/Blogdetail";
import App from "../App";
import Postdetail from "../Pages/Postdetail";


const routers = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/postdetail" element={<Postdetail />} />
  </Route>)
);

const RouterMain = () => {
  return <RouterProvider router={routers} />;
};

export default RouterMain;
