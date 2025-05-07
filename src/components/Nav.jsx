import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { FaHammer } from "react-icons/fa";
import { FaPrint } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaOpenid } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { FaSketch } from "react-icons/fa";

const navMenuTop = [
    { icons: <FaHome />, navLinks: "/", id: 0 },
    { icons: <FaComputer />, navLinks: "/personal-details", id: 1 },
    { icons: <FaLink />, navLinks: "/social-link-detail", id: 2 },
    { icons: <FaHammer />, navLinks: "/work-details", id: 3 },
    { icons: <FaGraduationCap />, navLinks: "/education", id: 4 },
    { icons: <FaSketch />, navLinks: "/technical-skills", id: 5 },
    { icons: <FaPrint />, navLinks: "/project", id: 6 },
    { icons: <FaCertificate />, navLinks: "/certification", id: 7 }
];

const navMenuBottom = [
    { icons: <FaOpenid />, id: 0 },
    { icons: <FaFilePdf />, id: 2 },
    { icons: <FaTrashRestoreAlt />, id: 3 },
]

const Nav = () => {

    return (
        <nav className="flex flex-col items-center justify-between absolute border-2 top-0 min-h-full w-[5rem] pt-15 pb-15">
            <div className="flex flex-col gap-8 text-3xl">
                {navMenuTop.map((navItems) => (
                    <ul key={navItems.id}>
                        <li className="hover:scale-120 cursor-pointer ease-in-out"><Link to={navItems.navLinks}>{navItems.icons}</Link></li>
                    </ul>
                ))}
            </div>

            <div className="flex flex-col gap-10 text-3xl">
                {navMenuBottom.map((navItems) => (
                    <ul key={navItems.id}>
                        <li className="hover:scale-120 cursor-pointer ease-in-out">{navItems.icons}</li>
                    </ul>
                ))}
            </div>
        </nav>
    );
};

export default Nav;