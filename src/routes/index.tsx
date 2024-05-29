import { createBrowserRouter } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import SchoolManagement from "@/pages/SchoolManagement";
import Layout from "@/components/Layout";
import SingleSchool from "@/pages/SingleSchool";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/school-management",
        element: <SchoolManagement />,
      },
      {
        path: "/school-management/:id",
        element: <SingleSchool />,
      },
    ],
  },
]);

export default router;
