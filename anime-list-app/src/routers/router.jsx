import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../containers/Root";
import AnimeList, { AnimeListLoader } from "./pages/animelist";
import PageNotFOund from "./pages/animelist/PageNotFOund";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Root />} errorElement={<h1>error occures</h1>}>
            <Route index element={<AnimeList />} loader={AnimeListLoader} />
        </Route>
        <Route path="*" element={<PageNotFOund />} />
        </>
    )
)