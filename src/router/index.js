import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "../components";
import { Home, Movie } from "../pages";

const route = (
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/movie" element={<Movie />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(route));
export default rootRouter;
