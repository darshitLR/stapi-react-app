import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./index.css"
import { router } from "./routers/router";

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} fallbackElement={<h1 className="text-5xl">Loading..</h1>}/>
    </div>
  );
}

export default App;
