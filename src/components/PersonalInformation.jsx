import Input from "../subcomponents/Input"
import TextArea from "../subcomponents/TextArea"
import Button from "../subcomponents/Button"

const PersonalInformation = () => {

    return (
        <section>
            <div className="form_container">
                <header className="header_section">
                    <h2 className="header_title">Personal Information</h2>

                    <div>
                        <Button
                            text='Next'
                            className="next_button"
                        />
                    </div>
                </header>
                <form>
                    <div>
                        <label htmlFor="full_name" className="name_label">
                            Full Name
                            <Input
                                type='text'
                                name='full_name'
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
                    <div>
                        <label htmlFor="address" className='name_label'>
                            Address
                            <Input
                                type='text'
                                name='address'
                                id='address'
                                className='full_input_length'
                                placeholder='Address'
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="summary" className="name_label">
                            Summary
                            <TextArea className="full_textarea_length" />
                        </label>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default PersonalInformation;