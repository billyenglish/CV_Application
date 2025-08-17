import "../styles/homepage.css"
import Button from "../subcomponents/Button";

const Homepage = () => {

    return (
        <section className="homepage_section">
            <div className="homepage_content">
                <h1 className="homepage_title">
                    Cover Letter Builder
                </h1>
                <Button
                    className="homepage_button"
                    text='Get Started'
                />
            </div>
        </section>
    );
};

export default Homepage;