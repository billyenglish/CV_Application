import "../styles/personal_information.css";
import Nav from "../components/Nav";
import Input from "../subcomponents/Input";
import TextArea from "../subcomponents/TextArea";
import Button from "../subcomponents/Button";
import { useNavigate } from "react-router-dom";

const PersonalInformation = () => {

    const navigation = useNavigate('');

    return (
        <>
            <Nav />
            <section className="personal_information_section">

                <div className="form_container">

                    <header className="header_container">
                        <h2 className="form_title">Personal Information</h2>
                        <div>
                            <Button className="form_button" text='Next' onClick={() => navigation('/work-experience')} />
                        </div>
                    </header>

                    <form>
                        <div>
                            <Input
                                className="user_details"
                                placeholder="Full Name"
                            />

                            <Input
                                className="user_details"
                                placeholder="Job Title"
                            />
                        </div>
                        <div>
                            <Input
                                className="user_details"
                                placeholder="Email"
                            />
                            <Input
                                className="user_details"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div>
                            <Input
                                className="user_address"
                                placeholder="Address"
                            />
                        </div>
                        <div>
                            <TextArea
                                className="user_textarea"
                                placeholder="Summary"
                            />
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default PersonalInformation;