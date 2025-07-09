import Link from "next/link";
import DesktopNavbar from "@/components/Navbar/DesktopNavbar/DesktopNavbar";
import MobileNavbar from "@/components/Navbar/MobileNavbar/MobileNavbar";

function Navbar() {
    return (
        <nav
            className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
                            Next Social
                        </Link>
                    </div>
                    <DesktopNavbar/>
                    <MobileNavbar/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;