import { createBrowserRouter } from "react-router-dom";
import { UserLayout } from "../layout/UserLayout";
import { AdminLayout } from "../layout/AdminLayout";
import { UserHome } from "../pages/user/UserHome";
import { AdminHome } from "../pages/admin/AdminHome";
import { FoodForm} from "../pages/admin/FoodForm";
import {Menus} from "../pages/admin/Menus";

export const router = createBrowserRouter([
  {
    path: "",
    element: <UserLayout />,

    children: [
      {
        path: "",
        element: <UserHome />,
      },
    ],
  },
  {
    path: "",
    element: <AdminLayout />,

    children: [
      { path: "admin", element: <AdminHome /> },
      { path: "admin/list-menus/add-food/:id", element: <FoodForm /> },
      { path: "admin/list-menus", element: <Menus/> },
    ],
  },
]);
