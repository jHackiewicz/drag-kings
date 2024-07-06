import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Dashboard, Stats, About } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
