import "../styles/technical_skills.css";
import Button from "../subcomponents/Button"
import TextArea from "../subcomponents/TextArea"

const TechnicialSkills = () => {

    return (
        <section>
            <div className="form_container">
                <header className="header_section">
                    <h2 className="header_title">Technicial Skills</h2>

                    <div className="button_controls">
                        <Button
                            text="Back"
                            className="current_button"
                        />
                        <Button
                            text='Next'
                            className="current_button"
                        />
                    </div>
                </header>
                <form>
                    <div>
                        <label htmlFor="summary" className="name_label">
                            Certificates?
                            <TextArea
                                className="full_textarea_length skills_textarea"
                                placeholder="Please enter your certificates ?"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="summary" className="name_label">
                            Skills?
                            <TextArea
                                className="full_textarea_length skills_textarea"
                                placeholder="Please provide your skills ?"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="summary" className="name_label">
                            Personal Interest/Hobbies or anything interesting about you?
                            <TextArea
                                className="full_textarea_length skills_textarea"
                                placeholder="Please share your interest or hobbies ?"
                            />
                        </label>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default TechnicialSkills;