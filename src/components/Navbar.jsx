import PillNav from "@/components/lib/PillNavbar";

const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
    return (
        <div className="w-full flex justify-center items-center py-4 fixed top-0 left-0 z-50">
            <PillNav
                items={navItems}
                activeHref="/"
                className="custom-nav"
                ease="power2.easeOut"
                baseColor="#060010"
                pillColor="#060010"
                hoveredPillTextColor="#cc01ff"
                pillTextColor="#ffffff"
                initialLoadAnimation={true}
            />
        </div>
    );
};
