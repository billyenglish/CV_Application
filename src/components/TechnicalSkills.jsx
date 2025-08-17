import Nav from "../components/Nav";
import Input from "../subcomponents/Input";
import TextArea from "../subcomponents/TextArea";
import Button from "../subcomponents/Button";

const TechnicalSkills = () => {

    return (
        <>
            <Nav />
            <section>

                <div className="form_container">

                    <header className="header_container">
                        <h2 className="form_title">Technical Skills</h2>
                        <div>
                            <Button className="form_button" text="Back" />
                            <Button className="form_button" text="Next" />
                        </div>
                    </header>

                    <form>
                        <div>
                            <label className="form_label">
                                Company Name
                                <Input
                                    className="user_details"
                                    placeholder="Company Name"
                                />
                            </label>

                            <label className="form_label">
                                Job Title
                                <Input
                                    className="user_details"
                                    placeholder="Job Title"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="form_label">
                                Employment Duration
                                <Input
                                    className="user_details"
                                    placeholder="Employment Duration"
                                />
                            </label>
                            <label className="form_label">
                                Company Address
                                <Input
                                    className="user_details"
                                    placeholder="Company"
                                />
                            </label>
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

export default TechnicalSkills;