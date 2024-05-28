import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import SchoolManagement from "@/pages/SchoolManagement";
import Layout from "@/components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "school-management",
        element: <SchoolManagement />,
      },
    ],
  },
]);

export default router;
