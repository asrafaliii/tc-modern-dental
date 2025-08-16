import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import { Cars } from "../pages/Cars/Cars";
import { Services } from "../pages/Services/Services";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Team from "../pages/About/Sections/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:slug",
        element: <ServiceDetails />,
      },
      {
        path: "/doctors",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
