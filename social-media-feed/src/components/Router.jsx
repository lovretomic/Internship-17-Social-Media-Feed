import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FeedPage from "../pages/FeedPage";
import NotFound from "../pages/NotFound";
import PostPage from "../pages/PostPage";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<FeedPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/post">
          <Route index element={<NotFound />}></Route>
          <Route path=":postId" element={<PostPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
