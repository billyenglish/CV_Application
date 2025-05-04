import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Button from "../subcomponents/Button";
import UserInput from "../subcomponents/UserInput";

const WorkDetails = () => {
    return (
        <>
            <div className="flex h-[95vh] min-w-full">
                <Nav />
                <section className="flex flex-col items-center w-[95%]">
                    <div className="flex items-center content-center gap-20 pt-16 pb-18">
                        <h2 className="text-3xl text-light tracking-wider">Work Experience</h2>
                        <div className="flex gap-10 h-full">
                            <Button type="button" text="Back" />
                            <Button type="button" text="Next" />
                        </div>
                    </div>

                    <form className="flex flex-col gap-10">
                        <div className="flex gap-10">
                            <UserInput
                                type="text"
                                placeholder="Company Name"
                                className="h-12 w-72 border-2"
                            />
                            <UserInput
                                type="text"
                                placeholder="Position"
                                className="h-12 w-72 border-2"
                            />
                        </div>
                        <div className="flex gap-10">
                            <UserInput
                                type="text"
                                placeholder="Start: (08/1/2019) - End: (9/21/2020)"
                                className="h-12 w-72 border-2"
                            />
                            <UserInput
                                type="text"
                                placeholder="Company Address"
                                className="h-12 w-72 border-2"
                            />
                        </div>
                        <div>
                            
                        </div>
                    </form>
                </section>
             </div>
            <Footer />
        </>
    );
};

export default WorkDetails;