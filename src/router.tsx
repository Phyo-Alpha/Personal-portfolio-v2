import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Tech from "./components/Tech";
import NotFound from "./pages/NotFound";
import AboutMe from "./pages/AboutMe";
import MyWorks from "./pages/MyWorks";
import ContactMe from "./pages/ContactMe";
import About from "./components/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: (
                    <>
                        <About />
                        <Tech />
                        <Experience />
                        <Project />
                    </>
                ),
            },
            {
                path: "/about",
                element: <AboutMe />,
            },
            {
                path: "/experience",
                element: <Experience />,
            },
            {
                path: "/projects",
                element: <MyWorks />,
            },
            {
                path: "/tech",
                element: <Tech />,
            },
            {
                path: "/contact-me",
                element: <ContactMe />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]); 