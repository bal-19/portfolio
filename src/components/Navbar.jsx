const Navbar = () => {
    return (
        <nav className="mb-15 flex items-center justify-between py-6">
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    data-tooltip-target="tooltip-github"
                    data-tooltip-placement="bottom"
                    href="https://github.com/bal-19"
                    target="_blank"
                >
                    <i className="ci ci-github ci-xl ci-invert"></i>
                </a>
                <div
                    id="tooltip-github"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                    GitHub
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <a
                    data-tooltip-target="tooltip-linkedin"
                    data-tooltip-placement="bottom"
                    href="https://www.linkedin.com/in/iqbal-haidee-a4a9742a3"
                    target="_blank"
                >
                    <i className="ci ci-linkedin ci-xl"></i>
                </a>
                <div
                    id="tooltip-linkedin"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                    LinkedIn
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>

                <a
                    data-tooltip-target="tooltip-instagram"
                    data-tooltip-placement="bottom"
                    href="https://www.instagram.com/i.iqbal19"
                    target="_blank"
                >
                    <i className="ci ci-instagram ci-xl"></i>
                </a>
                <div
                    id="tooltip-instagram"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                    Instagram
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
