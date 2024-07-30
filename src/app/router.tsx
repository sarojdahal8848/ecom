import { createBrowserRouter } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import App from "./App";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            }
        ]
    },
]);

export default router;