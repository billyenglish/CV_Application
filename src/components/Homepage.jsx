import '../styles/homepage.css'
import Button from "../subcomponents/Button";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const currentNav = useNavigate('')

    return (
        <section className="homepage_section">
            <div className="homepage_content">
                <h1 className='homepage_title'>Cover Letter Builder</h1>
                <div>
                    <Button
                        text="Get Started"
                        className="get_started"
                        onClick={() => currentNav('personal-information')}
                    />
                </div>
            </div>
        </section>
    );
};

export default Homepage;