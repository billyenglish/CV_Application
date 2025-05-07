import Nav from "./Nav";
import Footer from "./Footer";
import UserInput from "../subcomponents/UserInput";
import Button from "../subcomponents/Button";
import TextArea from "../subcomponents/TextArea";

const PersonalDetails = () => {

    return (
        <>
            <Nav />
            <section className="flex flex-col items-center border-2 min-h-screen gap-36">
                <div className="flex justify-center items-center pt-20 gap-14">
                    <h2 className="text-3xl font-light">Personal Details</h2>
                    <div className="flex gap-6">                    
                        <Button text="Back" />
                        <Button text="Next" />
                    </div>
                </div>
                <form className="flex flex-col border-2 w-auto gap-4 items-center pt-5 pb-10 pl-6 pr-6 rounded-md">
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-2">
                            <label>Full Name</label>
                            <UserInput
                                type="text"
                                placeholder="Full Name"
                                className="border-2 h-10 w-70"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Job Title</label>
                            <UserInput
                                type="text"
                                placeholder="Job Title"
                                className="border-2 h-10 w-70"
                            />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex flex-col gap-1">
                            <label>Email</label>
                            <UserInput
                                type="text"
                                placeholder="Email"
                                className="border-2 h-10 w-70"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Phone</label>
                            <UserInput
                                type="text"
                                placeholder="Phone"
                                className="border-2 h-10 w-70"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <label>Summary</label>
                            <TextArea className="border-2 h-70 w-146" />
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default PersonalDetails;