import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Feed from "../pages/Feed";
import Post from "../pages/Post";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Feed />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/post" element={<Post />} />
    </>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
