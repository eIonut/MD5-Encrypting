import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./HomePage";
import EncryptPage from "./EncryptPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/encrypt" element={<EncryptPage />} />
      <Route path="" element={<HomePage />} />
    </>
  )
);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
