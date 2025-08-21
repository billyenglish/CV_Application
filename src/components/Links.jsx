import Button from "../subcomponents/Button"
import Input from "../subcomponents/Input"

const Links = () => {

  return (
    <>
      <section>
            <div className="form_container">
                <header className="header_section">
                    <h2 className="header_title">Links</h2>

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
                            Website Url
                            <Input
                                type='text'
                                name='full'
                                id='full_name'
                                className='half_input_length'
                                placeholder='Website Url'
                            />
                        </label>
                        <label htmlFor="job_title" className="name_label">
                            Shortcut Url
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
                            LinkedIn
                            <Input
                                type='email'
                                name='email'
                                id="email"
                                className="half_input_length"
                                placeholder='LinkedIn Profile'
                            />
                        </label>
                        <label htmlFor="phone_number" className="name_label">
                            LinkedIn User
                            <Input
                                type='phone'
                                name='phone_number'
                                id='phone_number'
                                className='half_input_length'
                                placeholder='LinkedIn User'
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email" className="name_label">
                            Github
                            <Input
                                type='email'
                                name='email'
                                id="email"
                                className="half_input_length"
                                placeholder='Github Profile'
                            />
                        </label>
                        <label htmlFor="phone_number" className="name_label">
                            Github User
                            <Input
                                type='phone'
                                name='phone_number'
                                id='phone_number'
                                className='half_input_length'
                                placeholder='Git User'
                            />
                        </label>
                    </div>
                </form>
            </div>
        </section>
    </>
  );
};

export default Links;
