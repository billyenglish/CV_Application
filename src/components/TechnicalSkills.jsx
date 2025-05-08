import Nav from "./Nav";
import Footer from "./Footer";
import Button from "../subcomponents/Button";

const TechnicalSkills = () => {
    return (
        <>
            <Nav />
            <section className="flex flex-col items-center border-2 min-h-screen gap-32">
                <div className="flex justify-center items-center pt-14 gap-14">
                    <h2 className="text-3xl font-light">Technical Skills</h2>
                    <div className="flex gap-6">
                        <Button text="Back" />
                        <Button text="Next" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default TechnicalSkills;