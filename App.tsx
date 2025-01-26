import { Outlet } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import StarsCanvas from "./src/components/canvas/Star";
import Footer from "./src/components/Footer";

export default function App() {
    return (
        <main className="relative min-h-screen py-20">
            <Navbar />
            <div className="mx-auto px-1 sm:px-6">
                <Outlet />
            </div>
            <Footer />
            <StarsCanvas />
        </main>
    )
}

const rootElement = document.getElementById("root");
rootElement?.style.setProperty("min-height", "100vh");
