import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home.tsx";
import Login from "./pages/auth/Login.tsx";
import Registration from "./pages/auth/Registration.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./layouts/Layout.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Ошибка</h1>,
    children: [
      // {
      //   path: "/:userId",
      //   element: <ProtectedRoute element={<Home />} />,
      // },
      {
        path: "/:userId",
        element: (
          <Layout>
            <Home />
          </Layout>
        ),
      },

      {
        path: "login",
        element: (
          <AuthLayout>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "register",
        element: (
          <AuthLayout>
            <Registration />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* <Routes> */}
      <RouterProvider router={router} />
      {/* </Routes> */}
    </QueryClientProvider>
  </React.StrictMode>
);
