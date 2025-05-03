import Footer from "../components/Footer";

const Home = () => {

    return (
        <>
        <section className="flex items-center justify-center border-1 min-w-screen h-[95vh]">
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