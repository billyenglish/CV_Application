import "../styles/homepage.css"
import Button from "../subcomponents/Button";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

    const navigate = useNavigate('personal-information');

    return (
        <section className="homepage_section">
            <div className="homepage_content">
                <h1 className="homepage_title">
                    Cover Letter Builder
                </h1>
                <Button
                    className="homepage_button"
                    text='Get Started'
                    onClick={() => navigate('personal-information')}
                />
            </div>
        </section>
    );
};

export default Homepage;