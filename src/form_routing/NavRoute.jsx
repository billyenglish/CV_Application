import { useNavigate } from "react-router-dom";

const NavRoute = ({ navRoute = '' }) => {

    const navigate = useNavigate(navRoute);

    return navigate;
};

export default NavRoute;