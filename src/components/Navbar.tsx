import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

export default function Navbar() {
    const location = useLocation();

    const links = [
        { href: "/about", label: "About Me" },
        { href: "/projects", label: "My Works" },
        { href: "/contact-me", label: "Contact Me" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-sm border-b">
            <div className="max-w-[90%] mx-auto flex flex-row justify-between items-center py-4">
                <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Edward
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <NavLink
                            key={link.href}
                            href={link.href}
                            label={link.label}
                            currentPath={location.pathname}
                        />
                    ))}
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger className="md:hidden p-2" aria-label="Open navigation menu">
                        <Menu className="h-6 w-6 text-primary-foreground" />
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[300px] bg-primary backdrop-blur-lg border-l">
                        <div className="flex flex-col h-full pt-8">
                            <div className="space-y-4">
                                {links.map((link) => (
                                    <SheetClose key={link.href} asChild>
                                        <Link
                                            to={link.href}
                                            className={cn(
                                                "flex w-full items-center py-3 px-4 text-lg font-medium",
                                                "transition-colors hover:bg-accent/50 rounded-lg",
                                                location.pathname === link.href
                                                    ? "text-primary-foreground bg-accent/20"
                                                    : "text-primary-foreground/80"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}

interface NavLinkProps {
    href: string;
    label: string;
    currentPath: string;
}

function NavLink({ href, label, currentPath }: NavLinkProps) {
    return (
        <Link
            to={href}
            className={cn(
                "text-lg font-medium transition-colors px-4 py-2 rounded-lg",
                "hover:bg-accent/20 hover:text-primary-foreground",
                currentPath === href
                    ? "text-primary-foreground bg-accent/20"
                    : "text-primary-foreground/60"
            )}
        >
            {label}
        </Link>
    );
}