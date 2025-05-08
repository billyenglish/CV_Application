import Nav from "./Nav";
import Footer from "./Footer";
import Button from "../subcomponents/Button";
import UserInput from "../subcomponents/UserInput";

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
                <form className="flex flex-col">
                    <h3 className="text-3xl font-light tracking pb-10 text-center">Add Skills</h3>
                    <div>
                        <ul className="flex flex-col gap-6">
                            <li className="flex gap-2">
                                <UserInput type="text" className="border-2 h-10 w-80" placeholder="Skill" />
                                <Button type="button" text="Remove" className="border-2 h-10 pl-2 pr-2 rounded-sm" />
                            </li>
                            <li className="flex gap-2">
                                <UserInput type="text" className="border-2 h-10 w-80" placeholder="Skill" />
                                <Button type="button" text="Remove" className="border-2 h-10 pl-2 pr-2 rounded-sm" />
                            </li>
                            <li className="flex gap-2">
                                <UserInput type="text" className="border-2 h-10 w-80" placeholder="Skill" />
                                <Button type="button" text="Remove" className="border-2 h-10 pl-2 pr-2 rounded-sm" />
                            </li>
                            <li className="flex gap-2">
                                <UserInput type="text" className="border-2 h-10 w-80" placeholder="Skill" />
                                <Button type="button" text="Remove" className="border-2 h-10 pl-2 pr-2 rounded-sm" />
                            </li>
                        </ul>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default TechnicalSkills;