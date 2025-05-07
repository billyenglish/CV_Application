import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {

    const navigation = useNavigate();

    return (
        <>
        <section className="flex items-center justify-center border-1 min-w-full min-h-screen">
            <div className="flex flex-col gap-10">
                    <h1 className="text-6xl font-extralight text-shadow-orange-500">Cover Letter Builder</h1>
                    <div className="flex justify-center">
                        <button
                            type="button"
                            className="uppercase
                                text-xl border-2 pt-1
                                pb-1 pl-2 pr-2 rounded-lg
                                cursor-pointer
                                hover:animate-pulse
                                hover:text-white
                                hover:bg-black
                            "
                            onClick={() => navigation("/personal-details")}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;