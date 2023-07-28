import Header from "./components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Quotes from "./components/Quotes";
import PostQuotes from "./components/PostQuotes";
import "./app.css";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/quotes",
        element: <Quotes />,
      },
      {
        path: "post-quotes",
        element: <PostQuotes />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='app'>
      <div>
        <Header />
        <h2 style={{marginLeft:"5rem"}}>Welcome...! </h2>
        <Outlet />
      </div>
    </div>
  );
}

export default appRouter;
