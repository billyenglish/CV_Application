import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Button from "../subcomponents/Button";
import UserInput from "../subcomponents/UserInput";

const SocialLinkDetails = () => {
    return (
        <>
            <div className="flex h-[95vh] min-w-full gap-2">
                <Nav />
                <section className="flex flex-col items-center w-[95%]">
                    <div className="flex items-center content-center gap-20 pt-16 pb-18">
                        <h2 className="text-3xl text-light tracking-wider">Social Links</h2>
                        <div className="flex gap-10 h-full">
                            <Button type="button" text="Back" />
                            <Button type="button" text="Next" />
                        </div>
                    </div>

                    <form className="flex flex-col gap-10 p-10 pb-36 border-2 border-black rounded-sm">
                        <div className="flex items-center justify-evenly gap-10 border-black">
                            <label className="text-xl font-normal">Website</label>
                            <UserInput
                                type="text"
                                placeholder="Website Link"
                                className="h-12 w-72 border-2 border-black"
                            />

                            <UserInput
                                type="text"
                                placeholder="UserName"
                                className="h-12 w-72 border-2 border-black"
                            />
                        </div>

                        <div className="flex items-center justify-evenly gap-10 border-black">
                            <label className="text-xl font-normal">Linkedin</label>
                            <UserInput
                                type="text"
                                placeholder="LinkedIn Link"
                                className="h-12 w-72 border-2 border-black"
                            />

                            <UserInput
                                type="text"
                                placeholder="LinkedIn Username"
                                className="h-12 w-72 border-2 border-black"
                            />
                        </div>
                        <div className="flex items-center justify-evenly gap-10 border-black">
                            <label className="text-xl font-normal">GitHub</label>
                            <UserInput
                                type="text"
                                placeholder="GitHub Link"
                                className="h-12 w-72 ml-2.5 border-2 border-black"
                            />

                            <UserInput
                                type="text"
                                placeholder="GitHub Link"
                                className="h-12 w-72 border-2 border-black"
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