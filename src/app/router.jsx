import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Pricing from "../pages/Pricing";
import Staff from "../pages/Staff";
import Analytics from "../pages/Analytics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Dashboard /></Layout>,
  },
  {
    path: "/orders",
    element: <Layout><Orders /></Layout>,
  },
  {
    path: "/pricing",
    element: <Layout><Pricing /></Layout>,
  },
  {
    path: "/staff",
    element: <Layout><Staff /></Layout>,
  },
  {
    path: "/analytics",
    element: <Layout><Analytics /></Layout>,
  },
]);