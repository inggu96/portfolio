import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "../components";
import { Home, Movie } from "../pages";
import LogoAnimation from "../pages/dev";

const route = (
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/movie" element={<Movie />} />
    <Route path="/logo" element={<LogoAnimation />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(route));
export default rootRouter;
