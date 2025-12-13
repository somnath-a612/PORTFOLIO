// import About from "./component/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Project from "./component/Project";
// import Contact from "./component/Contact"
import HomePage from "./component/HomePage";


function App() {

const router  = createBrowserRouter([

  {
    path: '/',
    element: <HomePage />
  },
  //  {
  //   path: '#about',
  //   element: <About />
  // },
  //  {
  //   path: '#project',
  //   element: <Project />
  // },
  //  {
  //   path: '/Contact',
  //   element: <Contact />
  // },

  
])

  return <RouterProvider router = {router} ></RouterProvider>
}

export default App