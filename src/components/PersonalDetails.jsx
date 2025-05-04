import Nav from "../components/Nav";
import UserInput from "../subcomponents/UserInput";
import Footer from "../components/Footer";
import Button from "../subcomponents/Button";

const PersonalDetails = () => {

    return (
        <>
            <div className="h-[95vh] min-w-full flex gap-2">
                <Nav className="border-2 border-black" />
                <section className="flex flex-col items-center border-2 border-black w-[95%]">

                    <div className="flex items-center content-center gap-20 pt-16 pb-18">
                        <h2 className="text-3xl font-light tracking-wider">Personal Details</h2>
                        <div className="flex self-center items-center gap-10 h-full">
                            <Button
                                type="button"
                                text="Back"
                            />

                            <Button
                                type="button"
                                text="Next"
                            />
                        </div>
                    </div>

                    <form className="flex flex-col gap-4 border-2 border-black p-6 rounded-md">
                        <div className="flex gap-6">
                            <UserInput
                                type="text"
                                placeholder="Full Name"
                                className="
                                    border-2
                                    border-black
                                    h-12 w-72
                                    rounded-sm
                                "
                            />
                            <UserInput
                                type="text"
                                placeholder="Job Title"
                                className="
                                    border-2
                                  border-black
                                    h-12 w-72
                                    rounded-sm
                                "
                            />
                        </div>
                        <div className="flex gap-6">
                            <UserInput
                                type="email"
                                placeholder="Email"
                                className="
                                    border-2
                                    border-black
                                    h-12 w-72
                                    rounded-sm
                                "
                            />
                            <UserInput
                                type="tel"
                                placeholder="Phone"
                                className="
                                    border-2
                                  border-black
                                    h-12 w-72
                                    rounded-sm
                                "
                            />
                        </div>
                        <div>
                            <UserInput
                                type="text"
                                placeholder="Address"
                                className="
                                    border-2
                                  border-black
                                    h-12 w-150
                                    rounded-sm
                                "
                            />
                        </div>
                        <div>
                            <textarea
                                className="
                                    border-2
                                    border-black
                                    h-64 w-150
                                    resize-none
                                    overflow-y-hidden
                                    rounded-sm
                                "
                                placeholder="Summary "
                                >
                            </textarea>
                        </div>
                        <div className="flex justify-between" placeholder="Summary">
                            <Button text="Submit" />
                            <Button text="Clear" />
                        </div>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default PersonalDetails;