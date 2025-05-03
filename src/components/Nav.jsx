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

const navMenuTop = [
    { icons: <FaHome />, id: 0 },
    { icons: <FaLink />, id: 1 },
    { icons: <FaComputer />, id: 2 },
    { icons: <FaHammer />, id: 3 },
    { icons: <FaPrint />, id: 4 },
    { icons: <FaGraduationCap />, id: 5 },
    { icons: <FaCertificate />, id: 6 }
];

const navMenuBottom = [
    { icons: <FaOpenid />, id: 0 },
    { icons: <FaFilePdf />, id: 2 },
    { icons: <FaTrashRestoreAlt />, id: 3 },
]

const Nav = () => {

    return (
        <nav className="w-[5%] h-full flex flex-col items-center justify-between pt-8 pb-8">
            <div className="flex flex-col gap-6">
                {
                    navMenuTop.map((navItems) => (
                        <ul key={navItems.id}>
                            <li className="text-3xl">{navItems.icons}</li>
                        </ul>
                    ))
                }
            </div>

            <div className="flex flex-col gap-6">
                {
                    navMenuBottom.map((navItems) => (
                        <ul key={navItems.id}>
                            <li className="text-3xl">{navItems.icons}</li>
                        </ul>
                    ))
                }
            </div>
        </nav>
    );
};

export default Nav;