import UserInput from "../subcomponents/UserInput";
import Footer from "../components/Footer";

const PersonalDetails = () => {

    return (
        <>
            <section className="min-w-screen min-h-[95vh]">
                <form className="flex flex-col gap-y-6">
                    <div className="flex gap-x-6">
                        <UserInput
                            type="text"
                            placeholder="Full Name"
                        />

                        <UserInput
                            type="text"
                            placeholder="Job Title"
                        />
                    </div>
                    <div className="flex gap-x-6">
                        <UserInput
                            type="email"
                            placeholder="Email"
                        />

                        <UserInput
                            type="phone"
                            placeholder="Phone"
                        />
                    </div>
                    <div>
                        <UserInput
                            type="text"
                            placeholder="Addres"
                        />
                    </div>
                    <div>
                        <textarea className="border-2 black-border h-100 w-150">

                        </textarea>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default PersonalDetails;