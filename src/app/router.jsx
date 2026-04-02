import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Success from "../modules/mobile/Success";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Pricing from "../pages/Pricing";
import Staff from "../pages/Staff";
import Analytics from "../pages/Analytics";
import MobileHome from "../modules/mobile/MobileHome";
import SelectItems from "../modules/mobile/SelectItems";
import Payment from "../modules/mobile/Payment";
import OrderTracking from "../modules/orders/OrderTracking";
import OrderDetails from "../modules/orders/OrderDetails";
import Rooms from "../pages/Rooms";
import Payments from "../pages/Payments";
import LaundryShop from "../modules/mobile/LaundryShop";
import Checkout from "../modules/mobile/Checkout";
import Tracking from "../modules/mobile/Tracking";
import TrackOrders from "../modules/mobile/TrackOrders";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Dashboard /></Layout>,
  },
  {
    path: "/admin",
    element: <Layout><Dashboard /></Layout>,  
  },
  {
    path: "/admin/orders",
    element: <Layout><Orders /></Layout>,
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
  {
    path:"/tracking",
    element: <Layout><OrderTracking /></Layout>,
  },
  {
    path: "/mobile",
    element: <MobileHome />,
  },
  {
    path: "/select",
    element: <SelectItems />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
  path: "/success",
  element: <Success />,
},
  {
  path: "/orders/:id",
  element: <Layout><OrderDetails /></Layout>,
},
{
  path: "/rooms",
  element: <Layout><Rooms /></Layout>,
},
{
  path: "/payments",
  element: <Layout><Payments /></Layout>,
},
{
  path: "/shop",
  element: <LaundryShop />,
},
{
  path: "/checkout",
  element: <Checkout />,
},
{
  path: "/track",
  element: <TrackOrders />,
},
{
  path: "/track/:id",
  element: <Tracking />,
},

]);