export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="absolute bottom-0 w-full text-center text-gray-400 py-4">
            <p>&copy; {currentYear} Edward - All rights reserved</p>
            <p>Build Using React and Three js.</p>
        </footer>
    )
}