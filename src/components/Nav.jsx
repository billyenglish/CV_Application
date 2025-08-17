import { FaUser, FaLink, FaBrain, FaBriefcase } from "react-icons/fa";
import "../styles/nav.css";

const navMenuItems = [
    {
        navIcon: <FaUser />,
        id: 0,
    },
    {
        navIcon: <FaLink />,
        id: 1,
    },
    {
        navIcon: <FaBrain />,
        id: 2,
    },
    {
        navIcon: <FaBriefcase />,
        icon: 3,
    }
];

const Nav = () => {

    return (
        <nav>
            <ul>
                {navMenuItems.map((navItems) => (
                    <li key={navItems.id}>{navItems.navIcon}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Nav;