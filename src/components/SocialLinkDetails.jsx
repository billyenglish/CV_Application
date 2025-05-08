import Nav from "./Nav";
import Footer from "./Footer";
import Button from "../subcomponents/Button";
import UserInput from "../subcomponents/UserInput";

const SocialLinkDetails = () => {

    return (
        <>
            <Nav />
            <section className="flex flex-col items-center border-2 min-h-screen gap-32">
                <div className="flex justify-center items-center pt-14 gap-14">
                    <h2 className="text-3xl font-light">Social Links</h2>
                    <div className="flex gap-6">
                        <Button text="Back" />
                        <Button text="Next" />
                    </div>
                </div>
                <form className="flex flex-col border-2 w-auto gap-10 items-center pl-6 pr-6 pt-10 pb-20 rounded-md ">
                    <div className="flex flex-row items-end gap-6">
                        <h3 className="text-lg mb-1">Portfolio Website</h3>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-light">Website Link</label>
                                <UserInput
                                    type="text"
                                    placeholder="Full Name"
                                    className="border-2 h-10 w-70"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl font-light">Website Description</label>
                                <UserInput
                                    type="text"
                                    placeholder="Job Title"
                                    className="border-2 h-10 w-70"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly items-end gap-6">
                        <h3 className="text-lg mb-1">LinkedIn</h3>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2 ml-20">
                                <UserInput
                                    type="text"
                                    placeholder="Full Name"
                                    className="border-2 h-10 w-70"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <UserInput
                                    type="text"
                                    placeholder="Job Title"
                                    className="border-2 h-10 w-70"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-evenly items-end gap-6">
                        <h3 className="text-lg mb-1">GitHub</h3>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2 ml-22">
                                <UserInput
                                    type="text"
                                    placeholder="Full Name"
                                    className="border-2 h-10 w-70"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <UserInput
                                    type="text"
                                    placeholder="Job Title"
                                    className="border-2 h-10 w-70"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default SocialLinkDetails;