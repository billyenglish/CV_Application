import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Button from "../subcomponents/Button";
import UserInput from "../subcomponents/UserInput";

const SocialLinkDetails = () => {
    return (
        <>
            <div className="flex h-[95vh] min-w-full gap-2">
                <Nav />
                <section className="flex flex-col w-[95%]">
                    <div className="flex">
                        <h2 className="text-3xl text-light tracking-wider">Social Links</h2>
                        <div>
                            <Button type="button" text="Back" />
                            <Button type="button" text="Next" />
                        </div>
                    </div>

                    <form className="flex flex-col border-2 border-black">
                        <div className="flex items-center justify-evenly border-black">
                            <label>Website</label>
                            <UserInput
                                type="text"
                                placeholder="Website Link"
                                className="h-12 border-2 border-black"
                            />

                            <UserInput
                                type="text"
                                placeholder="UserName"
                                className="h-12 border-2 border-black"
                            />
                        </div>

                        <div className="flex items-center justify-evenly border-black">
                            <label>Linkedin</label>
                            <UserInput
                                type="text"
                                placeholder="LinkedIn Link"
                                className="h-12 border-2 border-black"
                            />

                            <UserInput
                                type="text"
                                placeholder="LinkedIn Username"
                            />
                        </div>
                        <div>
                            <label>GitHub</label>
                            <UserInput
                                type="text"
                                placeholder="GitHub Link"
                            />

                            <UserInput
                                type="text"
                                placeholder="GitHub Link"
                            />
                        </div>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default SocialLinkDetails;