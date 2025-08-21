import "../styles/education.css"
import Input from "../subcomponents/Input"
import Button from "../subcomponents/Button"
import { useState } from "react";

const Education = () => {

    const [bulletDetails, setBulletDetails] = useState([]);

    const addBulletPoint = (e) => {
        e.preventDefault();
        setBulletDetails(
            [
                ...bulletDetails,
                {
                    id: crypto.randomUUID(),
                    text: ""
                }
            ]
        );
    }

    return (
        <section>
            <div className="form_container">
                <header className="header_section">
                    <h2 className="header_title">Education</h2>

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
                            University Name
                            <Input
                                type='text'
                                name='university_name'
                                id='university_name'
                                className='half_input_length'
                                placeholder='University Name'
                            />
                        </label>
                        <label htmlFor="job_title" className="name_label">
                            Degree
                            <Input
                                type='text'
                                name='degree_name'
                                id='degree_name'
                                className='half_input_length'
                                placeholder='Degree name'
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email" className="name_label">
                            Start Date
                            <Input
                                type='date'
                                name='email'
                                id="email"
                                className="half_input_length"
                                placeholder='Email'
                            />
                        </label>
                        <label htmlFor="end_date" className="name_label">
                            End Date
                            <Input
                                type='date'
                                name='end_date'
                                id='end_date'
                                className='half_input_length'
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="university_address" className="name_label">
                            University Address
                            <Input
                                type='text'
                                name='university_address'
                                id="email"
                                className="half_input_length"
                                placeholder='University Address'
                            />
                        </label>
                        <label htmlFor="university_location" className="name_label">
                            University Location
                            <Input
                                type='text'
                                name='university_location'
                                id='university_location'
                                className='half_input_length'
                                placeholder='University Location'
                            />
                        </label>
                    </div>
                    <div className="bullet_points_input_container">
                        <label className="name_label bullet_label" htmlFor="">
                            Add Bullet Points
                        </label>
                        {
                            bulletDetails.map(() => (
                                <input
                                    type="text"
                                    className="bullet_inputs"
                                />
                            ))
                        }
                    </div>
                    <div className="add_button_container">
                        <button
                            className="current_button"
                            onClick={addBulletPoint}
                        >
                            Add More
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Education;