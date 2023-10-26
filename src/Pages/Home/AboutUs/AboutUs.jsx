import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const AboutUs = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">

                <div className="w-1/2 relative">
                    <img src={person} className="lg:w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="lg:w-1/2 rounded-lg shadow-2xl absolute right-5 top-1/2 border-8 border-white" />
                </div>

                <div className="w-1/2 px-10">
                    <h5 className="text-2xl font-semibold text-orange-500 mb-5">About Us</h5>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6 text-slate-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="pb-6 text-slate-500">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;