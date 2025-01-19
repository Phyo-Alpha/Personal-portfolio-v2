import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const location = useLocation();

    const links = [
        { href: "/about", label: "About Me" },
        { href: "/projects", label: "My Works" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-sm">
            <div className="max-w-[90%] mx-auto flex flex-row justify-between items-center">
                <Link to="/" className="text-3xl">
                    Edward
                </Link>
                <div className="flex h-16 items-center justify-between">
                    <div className="flex gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={cn(
                                    "text-lg font-medium transition-colors hover:text-primary-foreground tracking-wide",
                                    location.pathname === link.href
                                        ? "text-primary-foreground"
                                        : "text-primary-foreground/60"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <Link
                    to='/contact-me'
                    className={cn(
                        "text-lg font-medium transition-colors hover:text-primary-foreground tracking-wide",
                        location.pathname === 'contact-me'
                            ? "text-primary-foreground"
                            : "text-primary-foreground/60"
                    )}
                >
                    Contact Me
                </Link>
            </div>
        </nav>
    );
} 