import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="mb-15 flex items-center justify-between py-6">
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://github.com/bal-19" target="_blank">
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/iqbal-haidee-a4a9742a3"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/i.iqbal19" target="_blank">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
