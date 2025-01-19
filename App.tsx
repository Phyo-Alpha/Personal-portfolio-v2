import { Outlet } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import StarsCanvas from "./src/components/canvas/Star";
import Footer from "./src/components/Footer";

export default function App() {
    return (
        <main className="relative min-h-screen pb-20">
            <Navbar />
            <div className="mx-auto mt-20 space-y-12 px-6 pt-12">
                <Outlet />
            </div>
            <Footer />
            <StarsCanvas />
        </main>
    )
}

const rootElement = document.getElementById("root");
rootElement?.style.setProperty("min-height", "100vh");
