import Nav from "../components/Nav";
import UserInput from "../subcomponents/UserInput";
import Footer from "../components/Footer";
import Button from "../subcomponents/Button";

const PersonalDetails = () => {

    return (
        <>
            <div className="h-[95vh] min-w-full flex gap-2">
                <Nav className="border-2 border-black" />
                <section className="flex flex-col items-center border-2 border-black min-w-[90%]">


                    <h2 className="text-3xl font-light tracking-wider pt-12 pb-20">Personal Details</h2>

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
                                    rounded-sm
                                "
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