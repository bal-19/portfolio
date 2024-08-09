const Navbar = () => {
    return (
        <nav className="mb-15 flex items-center justify-between py-6">
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://github.com/bal-19" target="_blank">
                    <i className="ci ci-github ci-xl ci-invert"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/iqbal-haidee-a4a9742a3"
                    target="_blank"
                >
                    <i className="ci ci-linkedin ci-xl"></i>
                </a>
                <a href="https://www.instagram.com/i.iqbal19" target="_blank">
                    <i className="ci ci-instagram ci-xl"></i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
