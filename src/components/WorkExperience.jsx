import "../styles/work_experience.css";
import Button from "../subcomponents/Button"
import Input from "../subcomponents/Input"
import { useState } from "react";

const WorkExperience = () => {

    const [inputs, setInputs] = useState([]);

    const addInput = (e) => {
        e.preventDefault();
        setInputs([...inputs, ""]);
    }

    return (
        <section>
            <div className="form_container">
                <header className="header_section">
                    <h2 className="header_title">Work Experience</h2>

                    <div className="button_controls">
                        <Button
                            text='Back'
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
                        <label htmlFor="full_name" className="name_label">
                            Company Name
                            <Input
                                type='text'
                                name='full'
                                id='full_name'
                                className='half_input_length'
                                placeholder='Full Name'
                            />
                        </label>
                        <label htmlFor="job_title" className="name_label">
                            Job Title
                            <Input
                                type='text'
                                name='job_title'
                                id='job_title'
                                className='half_input_length'
                                placeholder='Job Title'
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email" className="name_label">
                            Email
                            <Input
                                type='email'
                                name='email'
                                id="email"
                                className="half_input_length"
                                placeholder='Email'
                            />
                        </label>
                        <label htmlFor="phone_number" className="name_label">
                            Phone
                            <Input
                                type='phone'
                                name='phone_number'
                                id='phone_number'
                                className='half_input_length'
                                placeholder='Phone Number'
                            />
                        </label>
                    </div>
                    <div className="bullet_point_container">
                        <label htmlFor="bullet_point" className="name_label">
                            Bullet Points
                            {
                                inputs.map((value, index) => (
                                    <div className="bullet_point_container">
                                        <Button className="bullet_button" />
                                        <input
                                            key={index}
                                            type="text"
                                            value={value}
                                            className="bullet_input"
                                        />
                                        <Button
                                            text="Remove"
                                            className="bullet_button"
                                        />
                                    </div>
                                ))
                            }
                        </label>
                    </div>
                    <div className="bullet_point_button_container">
                        <Button
                            text='Add'
                            className="current_button"
                            onClick={addInput}
                        />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default WorkExperience;